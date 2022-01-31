import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import config from './config';
import { Log } from './utils';
import { MongoDBConnection } from './connection';
import initCollections from './collections';
import app from './app';

const { appKey, mongo } = config;
const { port } = appKey;

MongoDBConnection.connect(mongo.url)
  .then((database) => {
    // at this point create your collections, they are all promises and should be in a promises.all
    initCollections(database);
    Log.gateway.info('connection to database successful');
    app.build().listen(port).on('error', onError).on('listening', onListening);
  })
  .catch((error) => {
    Log.gateway.error(error.message);
  });

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      Log.gateway.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      Log.gateway.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  Log.gateway.info(`Server listening on PORT ${port}`);
}
