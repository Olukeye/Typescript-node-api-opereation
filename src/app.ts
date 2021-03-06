import compression from 'compression';
import cookieParser from 'cookie-parser';
import jwt from 'express-jwt';
import express, {Request, Response} from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import { InversifyExpressServer } from 'inversify-express-utils';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginExpress from '@bugsnag/plugin-express';

import container from './inversify';
import config from "../config/default";

Bugsnag.start({
  apiKey: config.bugsnag,
  plugins: [BugsnagPluginExpress],
});

const bugsnagMidddleware = Bugsnag.getPlugin('express');

function configureApp(app) {
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(helmet());
  app.use(mongoSanitize());
  if (config.appKey.isProd) {
    app.use(bugsnagMidddleware.requestHandler);
  }

  app.set('trust proxy', 1); // trust first proxy

  app.use(
    jwt({ secret: config.jwt.secret }).unless({
      // these paths are excluded from authentication
      path: [
        { url: '/customers/', methods: ['POST'] },
        { url: '/login/admin', methods: ['POST'] },
        { url: '/login/vendor', methods: ['POST'] },
        { url: '/login/vendor-token', methods: ['POST'] },
        { url: '/login/customer', methods: ['POST'] },
        
        { url: /oneTimePassCodes/i, methods: ['GET'] },
      ],
    }),
  );
}

function configureErrorHandler(app) {
  if (config.appKey.isProd) {
    app.use(bugsnagMidddleware.errorHandler);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((error: any, req: Request, res: Response, next) => {
    if (error.code == 'invalid_token') {
      res.status(error.status || 401).json({ data: 'Session expired, please login to proceed' });
      return;
    }

    if (error.code == 'credentials_required') {
      res.status(error.status || 401).json({ data: 'Please login to proceed' });
      return;
    }

    res.status(error.status || 500).json({ data: error.message });
  });
}

const inversifyApp = new InversifyExpressServer(container, null);

export default inversifyApp
  .setConfig((app) => {
    configureApp(app);
  })
  .setErrorConfig((app) => {
    configureErrorHandler(app);
  });
