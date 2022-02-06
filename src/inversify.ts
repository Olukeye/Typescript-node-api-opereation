import { Container } from "inversify";
import { makeLoggerMiddleware } from 'inversify-logger-middleware';










const container = new Container();





// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logger = makeLoggerMiddleware();
// container.applyMiddleware(logger);

export default container;