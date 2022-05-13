export interface Info {
  rentalInformationUrl: string;
  termsAndConditionsUrl: string;
  dataPrivacyUrl: string;
  taxInformation: string;
  specialApplied: boolean;
  corporateDiscountNumber: number;
  corporateCustomerNumber: number;
  pickupStationId: string;
  returnStationId: string;
  pickupDate: Date;
  returnDate: Date;
  vehicleType: string;
}

export interface DriverRequirements {
  minAge: number;
  licenseCategory: string;
  licenseMinYears: number;
  youngDriverAge: number;
}

export interface ModelExample {
  name: string;
  imageUrl: string;
  additionalExamples: string[];
}

export interface Baggage {
  bags: number;
  suitcases: number;
}

export interface CarGroupInfo {
  bodyStyleKey: string;
  bodyStyle: string;
  airCondition: boolean;
  automatic: boolean;
  navigationSystem: boolean;
  modelGuaranteed: boolean;
  maxPassengers: number;
  doors: number;
  driverRequirements: DriverRequirements;
  modelExample: ModelExample;
  premium: boolean;
  luxury: boolean;
  baggage: Baggage;
}

export interface DriverRequirements2 {
  minAge: number;
  licenseCategory: string;
  licenseMinYears: number;
  youngDriverAge: number;
}

export interface ModelExample2 {
  name: string;
  imageUrl: string;
  additionalExamples: string[];
}

export interface Baggage2 {
  bags: number;
  suitcases: number;
}

export interface VehicleGroupInfo {
  bodyStyleKey: string;
  bodyStyle: string;
  airCondition: boolean;
  automatic: boolean;
  navigationSystem: boolean;
  modelGuaranteed: boolean;
  maxPassengers: number;
  doors: number;
  driverRequirements: DriverRequirements2;
  modelExample: ModelExample2;
  premium: boolean;
  luxury: boolean;
  baggage: Baggage2;
}

export interface Amount {
  value: number;
  display: string;
  currency: string;
}

export interface BasePrice {
  prefix: string;
  amount: Amount;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface Amount2 {
  value: number;
  display: string;
  currency: string;
}

export interface TotalPrice {
  prefix: string;
  amount: Amount2;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface Amount3 {
  value: number;
  display: string;
  currency: string;
}

export interface DayPrice {
  prefix: string;
  amount: Amount3;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface Amount4 {
  value: number;
  display: string;
  currency: string;
}

export interface CrossedOutTotalPrice {
  prefix: string;
  amount: Amount4;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface Amount5 {
  value: number;
  display: string;
  currency: string;
}

export interface CrossedOutDayPrice {
  prefix: string;
  amount: Amount5;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface Prices {
  basePrice: BasePrice;
  totalPrice: TotalPrice;
  dayPrice: DayPrice;
  crossedOutTotalPrice: CrossedOutTotalPrice;
  crossedOutDayPrice: CrossedOutDayPrice;
  promoLabel: string;
  youngDriverFeeApplied: boolean;
  isHourlyBooking: boolean;
}

export interface SplashImage {
  url: string;
  narrowMedium: string;
  narrowLarge: string;
  wideMedium: string;
  wideLarge: string;
}

export interface Images {
  small: string;
  medium: string;
  large: string;
}

export interface IncludedCharge {
  title: string;
}

export interface Amount6 {
  value: number;
  display: string;
  currency: string;
}

export interface Price {
  prefix: string;
  amount: Amount6;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface Amount7 {
  value: number;
  display: string;
  currency: string;
}

export interface DiffPrice {
  prefix: string;
  amount: Amount7;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface Amount8 {
  value: number;
  display: string;
  currency: string;
}

export interface Price2 {
  prefix: string;
  amount: Amount8;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface Amount9 {
  value: number;
  display: string;
  currency: string;
}

export interface Price3 {
  prefix: string;
  amount: Amount9;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface Item {
  reference: string;
  title: string;
  type: string;
  price: Price3;
}

export interface PriceBreakdown {
  reference: string;
  title: string;
  type: string;
  price: Price2;
  items: Item[];
}

export interface Amount10 {
  value: number;
  display: string;
  currency: string;
}

export interface CrossedOutTotalPrice2 {
  prefix: string;
  amount: Amount10;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

export interface PaymentOption {
  id: string;
  price: Price;
  diffPrice: DiffPrice;
  priceBreakdown: PriceBreakdown[];
  crossedOutTotalPrice: CrossedOutTotalPrice2;
  cancellationNote: string;
}

export interface Payment {
  selectedPaymentOption: string;
  paymentOptions: PaymentOption[];
  paymentRequired: boolean;
}

export interface SortIndexes {
  name: number;
  price: number;
  popularity: number;
  datascience: number;
  subscription: number;
}

export interface MileageInfo {
  display: string;
}

export interface Headlines {
  description: string;
  shortSubline: string;
  longSubline: string;
}

export interface Offer {
  id: string;
  status: string;
  onRequest: boolean;
  unlimited: boolean;
  description: string;
  carGroupInfo: CarGroupInfo;
  vehicleType: string;
  vehicleGroupInfo: VehicleGroupInfo;
  acrissCode: string;
  prices: Prices;
  splashImages: SplashImage[];
  images: Images;
  includedCharges: IncludedCharge[];
  payment: Payment;
  sortIndexes: SortIndexes;
  mileageInfo: MileageInfo;
  rentalDays: number;
  rentalHours: number;
  headlines: Headlines;
}

export interface OffersRootObject {
  info: Info;
  offers: Offer[];
  recommendations?: any;
  recommendations_v2?: any;
}
