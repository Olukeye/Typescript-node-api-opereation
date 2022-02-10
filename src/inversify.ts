import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';

import TYPES from './types';

// import { AdminService } from './app/admin/admin.service';
// import { AdminRepository } from './app/admin/admin.model';
// import './app/admin/admin.controller';

// import { LoginService } from './app/auth/login/login.service';
// import './app/auth/login/login.controller';

// import { PasswordResetService } from './app/auth/passwordReset/passwordReset.service';
// import './app/auth/passwordReset/passwordReset.controller';

// import { VerifyService } from './app/auth/verify/verify.service';
// import './app/auth/verify/verify.controller';

// import { CustomerService } from './app/customer/customer.service';
// import { CustomerRepository } from './app/customer/customer.model';
// import './app/customer/customer.controller';

// import { DeviceService } from './app/device/device.service';
// import { DeviceRepository } from './app/device/device.model';
// import './app/device/device.controller';

// import { OTPService } from './app/auth/otp/otp.service';
// import { OTPRepository } from './app/auth/otp/otp.model';
// import './app/auth/otp/otp.controller';

// import { VendorService } from './app/vendor/vendor.service';
// import { VendorRepository } from './app/vendor/vendor.model';
// import './app/vendor/vendor.controller';

// import { RestaurantService } from './app/restaurant/restaurant.service';
// import { RestaurantRepository } from './app/restaurant/restaurant.model';
// import './app/restaurant/restaurant.controller';

// import { ReviewService } from './app/review/review.service';
// import { ReviewRepository } from './app/review/review.model';
// import './app/review/review.controller';

// import { PhotoService } from './app/photo/photo.service';
// import { PhotoRepository } from './app/photo/photo.model';
// import './app/photo/photo.controller';

// import { FAQService } from './app/FAQ/FAQ.service';
// import { FAQRepository } from './app/FAQ/FAQ.model';
// import './app/FAQ/FAQ.controller';

// import { MenuService } from './app/menu/menu.service';
// import { MenuRepository } from './app/menu/menu.model';
import './app/menu/menu.controller';
const container = new Container();

// container.bind<AdminService>(TYPES.AdminService).to(AdminService);
// container.bind<AdminRepository>(TYPES.AdminRepository).to(AdminRepository);

// container.bind<LoginService>(TYPES.LoginService).to(LoginService);
// container.bind<PasswordResetService>(TYPES.PasswordResetService).to(PasswordResetService);
// container.bind<VerifyService>(TYPES.VerifyService).to(VerifyService);

// container.bind<CustomerService>(TYPES.CustomerService).to(CustomerService);
// container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerRepository);

// container.bind<DeviceService>(TYPES.DeviceService).to(DeviceService);
// container.bind<DeviceRepository>(TYPES.DeviceRepository).to(DeviceRepository);

// container.bind<OTPService>(TYPES.OTPService).to(OTPService);
// container.bind<OTPRepository>(TYPES.OTPRepository).to(OTPRepository);

// container.bind<VendorService>(TYPES.VendorService).to(VendorService);
// container.bind<VendorRepository>(TYPES.VendorRepository).to(VendorRepository);

// container.bind<RestaurantService>(TYPES.RestaurantService).to(RestaurantService);
// container.bind<RestaurantRepository>(TYPES.RestaurantRepository).to(RestaurantRepository);

// container.bind<ReviewService>(TYPES.ReviewService).to(ReviewService);
// container.bind<ReviewRepository>(TYPES.ReviewRepository).to(ReviewRepository);

// container.bind<PhotoService>(TYPES.PhotoService).to(PhotoService);
// container.bind<PhotoRepository>(TYPES.PhotoRepository).to(PhotoRepository);

// container.bind<FAQService>(TYPES.FAQService).to(FAQService);
// container.bind<FAQRepository>(TYPES.FAQRepository).to(FAQRepository);

// container.bind<MenuService>(TYPES.MenuService).to(MenuService);
// container.bind<MenuRepository>(TYPES.MenuRepository).to(MenuRepository);

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
const logger = makeLoggerMiddleware();
container.applyMiddleware(logger);

export default container;