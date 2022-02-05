import express from "express";
import log from "./middleware/logger";
import config from "config";
import connectDB from "./db/connection";
// import routes from "./router/routes";
const app = express();



//  config to receive for data
app.use(express.json());


const hostname: string = config.get("hostname");
const port: number = config.get("appKey.port");

app.listen(port, hostname, () => {
  log.info(`server is running on http://${hostname}:${port}`);

  connectDB();
  // routes(app);
});
