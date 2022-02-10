const TYPES = {
  AdminService: Symbol.for('AdminService'),
  AdminRepository: Symbol.for('AdminRepository'),

  LoginService: Symbol.for('LoginService'),
  VerifyService: Symbol.for('VerifyService'),
  PasswordResetService: Symbol.for('PasswordResetService'),

  CustomerService: Symbol.for('CustomerService'),
  CustomerRepository: Symbol.for('CustomerRepository'),

  DeviceService: Symbol.for('DeviceService'),
  DeviceRepository: Symbol.for('DeviceRepository'),

  StoreService: Symbol.for('StoreService'),
  StoreRepository: Symbol.for('StoreRepository'),

  StoreVendorService: Symbol.for('StoreVendorService'),
  StoreVendorRepository: Symbol.for('StoreVendorRepository'),

  ThemeService: Symbol.for('ThemeService'),
  ThemeRepository: Symbol.for('ThemeRepository'),

  OTPService: Symbol.for('OTPService'),
  OTPRepository: Symbol.for('OTPRepository'),

  VendorService: Symbol.for('VendorService'),
  VendorRepository: Symbol.for('VendorRepository'),

  RestaurantService: Symbol.for('RestaurantService'),
  RestaurantRepository: Symbol.for('RestaurantRepository'),

  ReviewService: Symbol.for('ReviewService'),
  ReviewRepository: Symbol.for('ReviewRepository'),

  PhotoService: Symbol.for('PhotoService'),
  PhotoRepository: Symbol.for('PhotoRepository'),

  FAQService: Symbol.for('FAQService'),
  FAQRepository: Symbol.for('FAQRepository'),

  MenuService: Symbol.for('MenuService'),
  MenuRepository: Symbol.for('MenuRepository'),
};

export default TYPES;
