import log from "./middleware/logger";
import config from "../config/default";
import {MongoDBConnection} from "./db/connection";
// import initCollections from './collections';
// import routes from "./router/routes";
import app from  './app';

const { appKey, mongo} = config;
const { port, hostname } = appKey;

// const hostname: string = config.get("hostname");
// const port: number = config.get("appKey.port");

// app.onListeng(port, hostname, () => {
//   log.info(`server is running on http://${hostname}:${port}`);

//   connectDB();
//   // routes(app);
// });

MongoDBConnection.connect(mongo.url)
  .then((database) => {
    // at this point create your collections, they are all promises and should be in a promises.all
    // initCollections(database);
    log.info('connection to database successful');
    app.build().listen(port).on('error', onError).on('listening', onListening);
  })
  .catch((error) => {
    log.error(error.message);
  });

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      log.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      log.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  log.info(`Server listening on http://${hostname}:${port}`);
}