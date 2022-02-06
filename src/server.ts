import express from "express";
import log from "./middleware/logger";
import config from "config";
import connectDB from "./db/connection";
// import routes from "./router/routes";
import app from  './app';


const hostname: string = config.get("hostname");
const port: number = config.get("appKey.port");

// app.onListeng(port, hostname, () => {
//   log.info(`server is running on http://${hostname}:${port}`);

//   connectDB();
//   // routes(app);
// });

app.build().listen(port).on('error', onError).on('listening', onListening);
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
  log.info(`server is running on http://${hostname}:${port}`);

  connectDB();
}