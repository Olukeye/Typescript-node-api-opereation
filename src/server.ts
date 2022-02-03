import express from "express";
import log from "./middleware/logger";
import config from "./config/default";
import connectDB from "./db/connection";
// import routes from "./router/routes";
const app = express();


//  config to receive for data
app.use(express.json());

const { appKey } = config;
const { port, hostname } = appKey;


app.listen(() => {
  log.info(`server is running on http://${hostname}:${port}`);

  connectDB();

  // routes(app);
});
