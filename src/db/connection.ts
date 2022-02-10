import { Db, MongoClient } from 'mongodb';
import config from '../../config/default';

const { mongo } = config;

export class MongoDBConnection {
  private static isConnected = false;
  private static db: Db;
  private static connection: MongoClient;

  public static getConnection(url = '') {
    if (this.isConnected) {
      return this.db;
    } else {
      this.connect(url);
    }
  }

  public static async connect(mongoUrl: string): Promise<Db> {
    try {
      const MongoConnection = await MongoClient.connect(mongoUrl, mongo.options);
      const database = await MongoConnection.db();
      this.db = database;
      this.isConnected = true;
      return database;
    } catch (ex) {
      console.log(ex.message);
    }
  }

  public static async disconnect() {
    this.connection.close();
  }
}
