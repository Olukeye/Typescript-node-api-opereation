// import { ObjectID } from 'mongodb';

// export interface IMeta {
//   createdAt: Date;
//   active: boolean;
//   activatedAt: Date;
//   deactivatedAt: Date;
//   updatedAt?: Date;
// }

// export interface IMetaExtended extends IMeta {
//   verified: boolean;
//   verifiedAt: Date;
// }

// export interface IRead<T> {
//   find(query: Record<string, unknown>, filter: Record<string, unknown>): Promise<T[]>;
//   findOne(query: Record<string, unknown>, filter: Record<string, unknown>): Promise<T>;
//   findOneById(id: ObjectID, message: string, filter: Record<string, unknown>): Promise<T>;
//   aggregate(query): Promise<T>;
// }

// export interface IWrite<T> {
//   create(item: T): Promise<T>;
//   createMany(item: T[]): Promise<T>;
//   deactivate(item: ObjectID): Promise<unknown>;
//   update(documentId: ObjectID, data: Record<string, unknown>): Promise<unknown>;
// }
