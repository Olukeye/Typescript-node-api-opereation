import dotenv from "dotenv";
dotenv.config();

const isDev = process.env.NODE_ENV === "development" ? true : false;
const isProd = process.env.NODE_ENV === "production" ? true : false;

export default {
  appKey: {
    port: process.env.PORT || 4040,
    env: process.env.NODE_ENV || "development",
    isDev,
    isProd,
    hostname: process.env.HOSTNAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  mongo: {
    url: process.env.MONGO_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
      poolSize: 10, // Maintain up to 10 socket connections
      // If not connected, return errors immediately rather than waiting for reconnect
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      // family: 4, // Use IPv4, skip trying IPv6
    },
  },
  appLog: {
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  },
  bugsnag: process.env.BUGSNAG,
};
