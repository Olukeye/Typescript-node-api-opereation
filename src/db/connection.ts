import mongoose from "mongoose";
import config from "config";
import log from '../middleware/logger';


const connectDB = async () => {
    const mongo = config.get("mongo.url") as string
    try{
        await mongoose.connect(mongo);
        log.info('MongoDB connected..');
    }catch(err){
        log.error(err);
        process.exit(1)
    }
}
    
 export default  connectDB;