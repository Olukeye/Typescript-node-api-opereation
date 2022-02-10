import { createCollection as customer } from './app/customer/customer.model';
import { Db } from 'mongodb';

import { createCollection as admin } from './app/admin/admin.model';
import { createCollection as device } from './app/device/device.model';
import { createCollection as otp } from './app/auth/otp/otp.model';
import { createCollection as vendor } from './app/vendor/vendor.model';
import { createCollection as restaurant } from './app/restaurant/restaurant.model';
import { createCollection as review } from './app/review/review.model';
import { createCollection as faq } from './app/FAQ/FAQ.model';
import { createCollection as menu } from './app/menu/menu.model';
import { createCollection as photo } from './app/photo/photo.model';
/**
 *
 * @param database
 * Create collections from the application
 */
export default async function initCollections(database: Db) {
  admin(database).catch();
  customer(database).catch();
  device(database).catch();
  otp(database).catch();
  vendor(database).catch();
  restaurant(database).catch();
  review(database).catch();
  faq(database).catch();
  menu(database).catch();
  photo(database).catch();
}
