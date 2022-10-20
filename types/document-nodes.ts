import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Void: any;
};

export type Address = {
  __typename: 'Address';
  apartmentNumber: Maybe<Scalars['String']>;
  postalCity: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  streetAddress: Maybe<Scalars['String']>;
};

export type AddressAutocompleteResult = {
  __typename: 'AddressAutocompleteResult';
  block: Maybe<Scalars['String']>;
  building: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  countryCode: Maybe<Scalars['String']>;
  countryName: Maybe<Scalars['String']>;
  county: Maybe<Scalars['String']>;
  district: Maybe<Scalars['String']>;
  /** Unique id of address, from HERE Geocoding and Search */
  hereId: Scalars['String'];
  houseNumber: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  stateCode: Maybe<Scalars['String']>;
  street: Maybe<Scalars['String']>;
  subblock: Maybe<Scalars['String']>;
  subdistrict: Maybe<Scalars['String']>;
};

export type AddressGeocodeResult = {
  __typename: 'AddressGeocodeResult';
  block: Maybe<Scalars['String']>;
  building: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  countryCode: Maybe<Scalars['String']>;
  countryName: Maybe<Scalars['String']>;
  county: Maybe<Scalars['String']>;
  district: Maybe<Scalars['String']>;
  /** Unique id of address, from HERE Geocoding and Search */
  hereId: Scalars['String'];
  houseNumber: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  latitude: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  postalCode: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  stateCode: Maybe<Scalars['String']>;
  street: Maybe<Scalars['String']>;
  subblock: Maybe<Scalars['String']>;
  subdistrict: Maybe<Scalars['String']>;
};

export enum AlcoholSellingStatus {
  Allowed = 'ALLOWED',
  NotAllowed = 'NOT_ALLOWED'
}

export type Allergen = {
  __typename: 'Allergen';
  allergenTypeCode: Maybe<Scalars['String']>;
  allergenTypeText: Maybe<Scalars['String']>;
  levelOfContainmentCode: Maybe<Scalars['String']>;
};

export type AuthTokens = {
  __typename: 'AuthTokens';
  accessToken: Maybe<Scalars['String']>;
  idToken: Maybe<Scalars['String']>;
  refreshToken: Maybe<Scalars['String']>;
};

export type AuthorizePaymentResponse = {
  __typename: 'AuthorizePaymentResponse';
  authorized: Maybe<Scalars['Boolean']>;
  orderId: Maybe<Scalars['String']>;
};

export type AvailablePackagingMaterial = {
  __typename: 'AvailablePackagingMaterial';
  ean: Scalars['String'];
  materialPrice: Scalars['Float'];
  materialType: MaterialType;
};

export type BonusInfo = {
  __typename: 'BonusInfo';
  membershipNumber: Maybe<Scalars['String']>;
};

export type BoundingBox = {
  bottomRight: Location;
  topLeft: Location;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CartItem = {
  __typename: 'CartItem';
  additionalInfo: Maybe<Scalars['String']>;
  basicQuantityUnit: Maybe<Scalars['String']>;
  brand: Maybe<Scalars['String']>;
  collectingPriority: Maybe<Scalars['Int']>;
  ean: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemCount: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  priceUnit: Maybe<Scalars['String']>;
  productType: Maybe<ProductType>;
  replace: Maybe<Scalars['Boolean']>;
};

export type CartItemInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  basicQuantityUnit?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  collectingPriority?: InputMaybe<Scalars['Int']>;
  ean?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  itemCount?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  priceUnit?: InputMaybe<Scalars['String']>;
  productType?: InputMaybe<ProductType>;
  replace?: InputMaybe<Scalars['Boolean']>;
};

export type CartRecommendation = {
  __typename: 'CartRecommendation';
  amounts: Array<CartRecommendationProduct>;
  products: Maybe<ProductList>;
  runId: Scalars['String'];
};


export type CartRecommendationProductsArgs = {
  from: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  order: InputMaybe<SortOrder>;
  orderBy: InputMaybe<SortKey>;
  storeId: Scalars['String'];
};

export type CartRecommendationProduct = EanProduct & {
  __typename: 'CartRecommendationProduct';
  amount: Scalars['Int'];
  ean: Scalars['String'];
};

export enum CartRecommendationType {
  Cart = 'CART',
  Try = 'TRY',
  YouMayNeed = 'YOU_MAY_NEED'
}

export enum CoOperative {
  Arina = 'ARINA',
  Eekoo = 'EEKOO',
  Eepee = 'EEPEE',
  Hameenmaa = 'HAMEENMAA',
  Hok = 'HOK',
  Keskimaa = 'KESKIMAA',
  Keula = 'KEULA',
  Koillismaa = 'KOILLISMAA',
  Kpo = 'KPO',
  Kso = 'KSO',
  Maakunta = 'MAAKUNTA',
  Peeassa = 'PEEASSA',
  Peremarket = 'PEREMARKET',
  Pko = 'PKO',
  Pok = 'POK',
  Satakunta = 'SATAKUNTA',
  Sso = 'SSO',
  SuurSavo = 'SUUR_SAVO',
  Tok = 'TOK',
  Vbo = 'VBO'
}

export type CollatedDeliverySlot = {
  __typename: 'CollatedDeliverySlot';
  date: Scalars['String'];
  deliveryTimes: Array<DeliverySlot>;
};

export type Company = {
  __typename: 'Company';
  identityCode: Maybe<Scalars['String']>;
  invoiceId: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Coordinates = {
  __typename: 'Coordinates';
  lat: Scalars['String'];
  lon: Scalars['String'];
};

export type Country = {
  __typename: 'Country';
  code: Scalars['String'];
};

export type CountryName = {
  __typename: 'CountryName';
  fi: Maybe<Scalars['String']>;
};

export type Customer = {
  __typename: 'Customer';
  address: Maybe<Scalars['String']>;
  bonusCard: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  companyName: Maybe<Scalars['String']>;
  contact: Maybe<Scalars['Boolean']>;
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  invoiceAddress: Maybe<Scalars['String']>;
  invoiceCity: Maybe<Scalars['String']>;
  invoiceCompanyName: Maybe<Scalars['String']>;
  invoiceFirstName: Maybe<Scalars['String']>;
  invoiceLastName: Maybe<Scalars['String']>;
  invoiceNumber: Maybe<Scalars['String']>;
  invoicePhone: Maybe<Scalars['String']>;
  invoicePostalCode: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  newsletter: Maybe<Scalars['Boolean']>;
  phone: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  sMembershipCardLastName: Maybe<Scalars['String']>;
  sMembershipCardPostalCode: Maybe<Scalars['String']>;
  sMembershipNumber: Maybe<Scalars['String']>;
};

export type CustomerInput = {
  address?: InputMaybe<Scalars['String']>;
  bonusCard?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  invoiceAddress?: InputMaybe<Scalars['String']>;
  invoiceCity?: InputMaybe<Scalars['String']>;
  invoiceCompanyName?: InputMaybe<Scalars['String']>;
  invoiceFirstName?: InputMaybe<Scalars['String']>;
  invoiceLastName?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  invoicePhone?: InputMaybe<Scalars['String']>;
  invoicePostalCode?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  newsletter?: InputMaybe<Scalars['Boolean']>;
  phone: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
  sMembershipCardLastName?: InputMaybe<Scalars['String']>;
  sMembershipCardPostalCode?: InputMaybe<Scalars['String']>;
  sMembershipNumber?: InputMaybe<Scalars['String']>;
};

export enum CustomerType {
  B2b = 'b2b',
  B2c = 'b2c'
}

export enum DayLabel {
  Fri = 'FRI',
  Mon = 'MON',
  Sat = 'SAT',
  Sun = 'SUN',
  Thu = 'THU',
  Tue = 'TUE',
  Wed = 'WED'
}

export type DeleteUserDataResult = {
  __typename: 'DeleteUserDataResult';
  success: Scalars['Boolean'];
};

export type DeliveryArea = {
  __typename: 'DeliveryArea';
  address: Maybe<DeliveryAreaAddress>;
  alcoholSellingAllowed: AlcoholSellingStatus;
  areaId: Scalars['String'];
  availablePackagingMaterials: Maybe<Array<AvailablePackagingMaterial>>;
  deliveryMethod: DeliveryMethod;
  deliverySlots: Maybe<Array<CollatedDeliverySlot>>;
  description: Maybe<Scalars['String']>;
  districts: Maybe<Array<DeliveryDistrict>>;
  /** @deprecated This is only to enable a feature in clients. Will be removed in near future. */
  dynamicPricing: Scalars['Boolean'];
  isFastTrack: Scalars['Boolean'];
  isRemote: Maybe<Scalars['Boolean']>;
  location: Maybe<DeliveryLocation>;
  name: Scalars['String'];
  /** @param rangeDays Duration of days to look for the next slot. Default is 14 days. Minimum is 1 and maximum 31 */
  nextAvailableDeliverySlot: Maybe<DeliverySlot>;
  postalCodes: Maybe<Array<Scalars['String']>>;
  price: Scalars['Float'];
  store: Maybe<StoreInfo>;
  storeId: Scalars['String'];
};


export type DeliveryAreaDeliverySlotsArgs = {
  endDate: InputMaybe<Scalars['String']>;
  orderId: InputMaybe<Scalars['ID']>;
  startDate: InputMaybe<Scalars['String']>;
};


export type DeliveryAreaNextAvailableDeliverySlotArgs = {
  rangeDays: InputMaybe<Scalars['Int']>;
};

export type DeliveryAreaAddress = {
  __typename: 'DeliveryAreaAddress';
  city: Scalars['String'];
  postalCode: Scalars['String'];
  street: Scalars['String'];
};

export type DeliveryAreaPin = {
  __typename: 'DeliveryAreaPin';
  areaId: Scalars['String'];
  brand: Scalars['String'];
  location: Point;
  placeOfBusinessId: Scalars['String'];
};

export type DeliveryAreaPinsResponse = {
  __typename: 'DeliveryAreaPinsResponse';
  pins: Maybe<Array<DeliveryAreaPin>>;
};

export type DeliveryAreaSearchResponse = {
  __typename: 'DeliveryAreaSearchResponse';
  areas: Maybe<Array<DeliveryArea>>;
  total: Maybe<Scalars['Int']>;
};

export type DeliveryDistrict = {
  __typename: 'DeliveryDistrict';
  city: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
};

export type DeliveryLocation = {
  __typename: 'DeliveryLocation';
  distance: Maybe<Scalars['Float']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export enum DeliveryMethod {
  HomeDelivery = 'HOME_DELIVERY',
  Pickup = 'PICKUP'
}

export type DeliverySlot = {
  __typename: 'DeliverySlot';
  alcoholSellingAllowed: AlcoholSellingStatus;
  areaId: Scalars['String'];
  availability: SlotAvailability;
  /** Format: 2021-02-07T19:00:00+02:00 */
  closingTimestamp: Maybe<Scalars['String']>;
  deliveryMethod: DeliveryMethod;
  /** Format: ISO DateTime */
  endDateTime: Scalars['String'];
  /** Estimated time in minutes */
  estimatedFastTrackTime: Maybe<Scalars['Int']>;
  isClosed: Scalars['Boolean'];
  isFastTrack: Scalars['Boolean'];
  isModifiable: Scalars['Boolean'];
  /** Slot length in minutes */
  length: Scalars['Int'];
  modificationTimestamp: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  slotId: Scalars['String'];
  /** Format: ISO DateTime */
  startDateTime: Scalars['String'];
  /** In minutes since midnight */
  startTime: Scalars['Int'];
  /** Human-readable time slot. E.g. 10:00-13:00 */
  time: Scalars['String'];
  /** @deprecated will be removed from public schema */
  validFrom: Scalars['String'];
};

export type DeliverySlotReservationResponse = {
  __typename: 'DeliverySlotReservationResponse';
  deliveryArea: DeliveryArea;
  deliverySlot: DeliverySlot;
  /** Format: 2021-02-07T19:00:00+02:00 */
  expiresAt: Scalars['String'];
  reservationId: Scalars['String'];
};

export enum DeliveryTimeStatus {
  Available = 'AVAILABLE',
  Full = 'FULL'
}

export enum DeviceType {
  Desktop = 'DESKTOP',
  Mobile = 'MOBILE'
}

export type DiscountProduct = {
  __typename: 'DiscountProduct';
  discountAmount: Scalars['Float'];
  discountType: DiscountProductType;
  ean: Scalars['String'];
  id: Scalars['String'];
  isValid: Scalars['Boolean'];
  name: Scalars['String'];
};

export enum DiscountProductType {
  FixedAmount = 'FIXED_AMOUNT',
  FixedDeliveryPrice = 'FIXED_DELIVERY_PRICE'
}

export enum Domain {
  Abc = 'ABC',
  Eprisma = 'EPRISMA',
  Herkku = 'HERKKU',
  SKaupat = 'S_KAUPAT'
}

export type EanProduct = {
  ean: Scalars['String'];
};

export type ExternalOrdersPosData = {
  __typename: 'ExternalOrdersPOSData';
  accountID: Maybe<Scalars['String']>;
  accountingStoreID: Scalars['String'];
  loyaltyTransactionTotals: Maybe<Array<ExternalOrdersPosRoyaltyTransation>>;
  ownerBenefit: Maybe<Scalars['String']>;
  registerID: Scalars['String'];
  registerTransNumber: Scalars['String'];
  shipment: Maybe<Array<ExternalOrdersPosShipment>>;
  signature: Maybe<Scalars['String']>;
  storeCode: Scalars['String'];
  storeID: Scalars['String'];
  totalAmount: Scalars['String'];
  transactionCode: Scalars['String'];
  transactionDateTime: Scalars['String'];
  transactionID: Scalars['String'];
  type: Scalars['String'];
  uniqueTransactionID: Maybe<Scalars['String']>;
  versionNumber: Scalars['String'];
  webStoreID: Scalars['String'];
};

export type ExternalOrdersPosRoyaltyTransation = {
  __typename: 'ExternalOrdersPOSRoyaltyTransation';
  loyaltyBenefitAmount: Scalars['String'];
  loyaltyCardID: Scalars['String'];
  paymentBenefitAmount: Scalars['String'];
  sequenceID: Scalars['String'];
};

export type ExternalOrdersPosShipment = {
  __typename: 'ExternalOrdersPOSShipment';
  billOfLadingNr: Maybe<Scalars['String']>;
  employeeID: Maybe<Scalars['String']>;
  infoText: Maybe<Scalars['String']>;
  orderID: Scalars['String'];
  sentTime: Maybe<Scalars['String']>;
  shipmentID: Scalars['String'];
  status: Scalars['String'];
  statusDate: Scalars['String'];
  storeID: Scalars['String'];
};

export enum FacetKey {
  BrandName = 'brandName',
  Category = 'category',
  Labels = 'labels',
  SupplierName = 'supplierName'
}

export type Facets = {
  __typename: 'Facets';
  key: Scalars['String'];
  value: Array<Scalars['String']>;
};

export type FavoriteItem = {
  __typename: 'FavoriteItem';
  count: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  ean: Scalars['String'];
  modifiedAt: Scalars['String'];
};

export type FavoritesList = {
  __typename: 'FavoritesList';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  isDefault: Scalars['Boolean'];
  items: Array<FavoriteItem>;
  modifiedAt: Scalars['String'];
  name: Scalars['String'];
  products: Maybe<Array<Product>>;
  slug: Scalars['String'];
};


export type FavoritesListProductsArgs = {
  fallbackToGlobal: InputMaybe<Scalars['Boolean']>;
  includeAgeLimitedByAlcohol: InputMaybe<Scalars['Boolean']>;
  storeId: Scalars['ID'];
};

export type FavoritesListDeleteResult = {
  __typename: 'FavoritesListDeleteResult';
  id: Scalars['String'];
};

export type FavoritesListPatchInput = {
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FavoritesLists = {
  __typename: 'FavoritesLists';
  favoritesLists: Array<FavoritesList>;
};

export type FavoritesOperationDataInput = {
  count?: InputMaybe<Scalars['String']>;
  ean?: InputMaybe<Scalars['String']>;
  listId: Scalars['String'];
};

export type FavoritesOperationInput = {
  data: FavoritesOperationDataInput;
  operation: FavoritesOperationOperationEnum;
};

export enum FavoritesOperationOperationEnum {
  Delete = 'DELETE',
  Put = 'PUT',
  SetDefaultList = 'SET_DEFAULT_LIST'
}

export type FavoritesOperationResult = {
  __typename: 'FavoritesOperationResult';
  discardedCount: Scalars['Int'];
  successfulCount: Scalars['Int'];
};

export type Filters = {
  key: FacetKey;
  value: Array<Scalars['String']>;
};

export type Hierarchy = {
  __typename: 'Hierarchy';
  count: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

export type HierarchyPathItem = {
  __typename: 'HierarchyPathItem';
  hidden: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type IStructuredFacet = {
  key: FacetKey;
};

export type LocalizableText = {
  __typename: 'LocalizableText';
  default: Scalars['String'];
  en: Maybe<Scalars['String']>;
  et: Maybe<Scalars['String']>;
  fi: Maybe<Scalars['String']>;
  sv: Maybe<Scalars['String']>;
};

export type LocalizedProductInfo = {
  __typename: 'LocalizedProductInfo';
  en: Maybe<LocalizedProductInfoFields>;
  fi: Maybe<LocalizedProductInfoFields>;
  sv: Maybe<LocalizedProductInfoFields>;
};

export type LocalizedProductInfoFields = {
  __typename: 'LocalizedProductInfoFields';
  allergens: Maybe<Array<Allergen>>;
  description: Maybe<Scalars['String']>;
  ingredientStatement: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type LocalizedText = {
  __typename: 'LocalizedText';
  en: Maybe<Scalars['String']>;
  et: Maybe<Scalars['String']>;
  fi: Maybe<Scalars['String']>;
  sv: Maybe<Scalars['String']>;
};

export type Location = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export enum MaterialType {
  CardboardBox = 'CARDBOARD_BOX',
  DepositBag = 'DEPOSIT_BAG',
  StandardPackaging = 'STANDARD_PACKAGING'
}

export type Municipality = {
  __typename: 'Municipality';
  code: Scalars['String'];
  name: Maybe<LocalizableText>;
};

export type Mutation = {
  __typename: 'Mutation';
  /** No specific errors */
  addUserNotificationSubcription: Maybe<UserNotificationSubscription>;
  /** No specific errors */
  addUserPushNotificationDevice: Maybe<PushNotificationDevice>;
  /**
   * @throws:
   * - AuthorizePaymentError [500]
   */
  authorizePayment: Maybe<AuthorizePaymentResponse>;
  /**
   * @throws:
   * - OrderNotFoundError [404]
   */
  cancelOrder: Maybe<Order>;
  createDeliverySlotReservation: DeliverySlotReservationResponse;
  /**
   * @throws:
   * - MissingSlotId [400]
   * - PostalCodeNotSupportedError [400]
   * - SlotFullError [409]
   * - SlotClosedError [409]
   * - DiscountCodeExpiredError [404]
   */
  createOrder: Maybe<Order>;
  /**
   * @throws:
   * - CreatePaymentError [500]
   * - PaymentCardNotFoundError [404]
   * - SlotClosedError [409]
   */
  createPayment: Maybe<PaymentTerminalAddress>;
  createUserFavoritesList: Maybe<FavoritesList>;
  /**
   * @throws
   * - OrderCannotBeDeletedError
   */
  deleteAllUserData: Maybe<DeleteUserDataResult>;
  /**
   * @throws
   * - DefaultListCannotBeDeletedError
   */
  deleteUserFavoritesList: Maybe<FavoritesListDeleteResult>;
  refreshDeliverySlotReservation: DeliverySlotReservationResponse;
  releaseDeliverySlotReservation: Maybe<Scalars['Void']>;
  /** No specific errors */
  removeUserNotificationSubscription: Maybe<UserNotificationSubscription>;
  /**
   * @throws:
   * - UnableToRemovePaymentCardError [500]
   */
  removeUserPaymentCard: Maybe<RemoveUserPaymentCardResponse>;
  /** No specific errors */
  removeUserPushNotificationDevice: Maybe<PushNotificationDevice>;
  /**
   * @throws:
   * - UnableToRenamePaymentCardError [500]
   */
  renameUserPaymentCard: Maybe<RenameUserPaymentCardResponse>;
  /**
   * @throws:
   * - UnableToResetPaymentCardForOrderError [500]
   * - UserIdMismatchError [403]
   * - OrderNotFoundError [404]
   */
  resetOrderPaymentCard: Maybe<ResetOrderPaymentCardResponse>;
  /**
   * @throws:
   * - UnableToSavePaymentCardError [500]
   */
  saveUserPaymentCard: Maybe<SaveUserPaymentCardResponse>;
  /**
   * @throws:
   * - BadRequestError [400]
   */
  sendProductUserEvents: Maybe<ProductUserEventResponse>;
  /**
   * @throws:
   * - UnableToSetDefaultPaymentCardError [500]
   */
  setDefaultUserPaymentCard: Maybe<SetDefaultUserPaymentCardResponse>;
  /**
   * @throws:
   * - MissingSlotId [400]
   * - PostalCodeNotSupportedError [400]
   * - SlotFullError [409]
   * - SlotClosedError [409]
   * - DiscountCodeExpiredError [404]
   */
  updateOrder: Maybe<Order>;
  /**
   * @throws
   * - MissingUpdateValuesError
   */
  updateUserFavoritesList: Maybe<FavoritesList>;
  updateUserFavoritesListItems: Maybe<FavoritesOperationResult>;
};


export type MutationAddUserNotificationSubcriptionArgs = {
  mediums: Array<UserNotificationMediumEnum>;
  type: UserNotificationSubscriptionEnum;
};


export type MutationAddUserPushNotificationDeviceArgs = {
  deviceToken: Scalars['String'];
  name: InputMaybe<Scalars['String']>;
};


export type MutationAuthorizePaymentArgs = {
  orderId: Scalars['ID'];
};


export type MutationCancelOrderArgs = {
  id: Scalars['ID'];
};


export type MutationCreateDeliverySlotReservationArgs = {
  deliverySlotId: Scalars['ID'];
};


export type MutationCreateOrderArgs = {
  order: InputMaybe<OrderInput>;
};


export type MutationCreatePaymentArgs = {
  cardId: InputMaybe<Scalars['ID']>;
  customWebstoreRedirectUrl: InputMaybe<Scalars['String']>;
  device: DeviceType;
  orderId: Scalars['ID'];
  serviceType: InputMaybe<ServiceType>;
  shouldSavePaymentCard: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserFavoritesListArgs = {
  name: Scalars['String'];
};


export type MutationDeleteAllUserDataArgs = {
  retainUserProfile: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteUserFavoritesListArgs = {
  listId: Scalars['String'];
};


export type MutationRefreshDeliverySlotReservationArgs = {
  reservationId: Scalars['ID'];
};


export type MutationReleaseDeliverySlotReservationArgs = {
  reservationId: Scalars['ID'];
};


export type MutationRemoveUserNotificationSubscriptionArgs = {
  mediums: Array<UserNotificationMediumEnum>;
  type: UserNotificationSubscriptionEnum;
};


export type MutationRemoveUserPaymentCardArgs = {
  cardId: Scalars['ID'];
};


export type MutationRemoveUserPushNotificationDeviceArgs = {
  deviceToken: Scalars['String'];
};


export type MutationRenameUserPaymentCardArgs = {
  cardId: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationResetOrderPaymentCardArgs = {
  id: Scalars['ID'];
};


export type MutationSaveUserPaymentCardArgs = {
  orderId: Scalars['ID'];
};


export type MutationSendProductUserEventsArgs = {
  eventType: ProductUserEventType;
  productIds: Array<Scalars['String']>;
  sessionId: Scalars['String'];
};


export type MutationSetDefaultUserPaymentCardArgs = {
  cardId: Scalars['ID'];
};


export type MutationUpdateOrderArgs = {
  id: InputMaybe<Scalars['String']>;
  order: InputMaybe<OrderInput>;
};


export type MutationUpdateUserFavoritesListArgs = {
  listId: Scalars['String'];
  values: FavoritesListPatchInput;
};


export type MutationUpdateUserFavoritesListItemsArgs = {
  operations: Array<FavoritesOperationInput>;
};

export type Navigation = {
  __typename: 'Navigation';
  navigation: Maybe<Array<NavigationItem>>;
};

export type NavigationItem = {
  __typename: 'NavigationItem';
  children: Maybe<Array<NavigationItem>>;
  hidden: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  itemCount: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  sequence: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type Nutrient = {
  __typename: 'Nutrient';
  kcal: Maybe<Scalars['Float']>;
  kj: Maybe<Scalars['Float']>;
  name: Maybe<Scalars['String']>;
  ri: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type NutrientClaim = {
  __typename: 'NutrientClaim';
  nutritionalClaimElement: Maybe<Scalars['String']>;
  nutritionalClaimType: Maybe<Scalars['String']>;
};

export type NutrientRaw = {
  __typename: 'NutrientRaw';
  measurementPrecisionCode: Maybe<Scalars['String']>;
  measurementUnitCode: Maybe<Scalars['String']>;
  nutrientTypeCode: Maybe<Scalars['String']>;
  quantityContained: Maybe<Scalars['Float']>;
};

export type ObjectFacet = IStructuredFacet & {
  __typename: 'ObjectFacet';
  key: FacetKey;
  objectValue: Array<ObjectFacetValue>;
};

export type ObjectFacetValue = {
  __typename: 'ObjectFacetValue';
  doc_count: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Order = {
  __typename: 'Order';
  additionalInfo: Maybe<Scalars['String']>;
  capturedPOSData: Maybe<ExternalOrdersPosData>;
  capturedTotalInCents: Maybe<Scalars['Int']>;
  cartItems: Maybe<Array<CartItem>>;
  comment: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['String']>;
  customer: Maybe<Customer>;
  deliveryDate: Scalars['String'];
  deliveryMethod: Maybe<DeliveryMethod>;
  deliverySlot: Maybe<DeliverySlot>;
  deliverySlotId: Scalars['ID'];
  deliveryTime: Scalars['String'];
  discountCode: Maybe<Scalars['String']>;
  handler: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFastTrack: Maybe<Scalars['Boolean']>;
  isModifiable: Scalars['Boolean'];
  modifiedAt: Maybe<Scalars['String']>;
  orderNumber: Maybe<Scalars['Int']>;
  orderStatus: Maybe<OrderStatus>;
  paymentId: Maybe<Scalars['String']>;
  paymentMethod: Maybe<PaymentMethod>;
  paymentStatus: Maybe<PaymentStatus>;
  pickupLocation: Maybe<Scalars['String']>;
  storeId: Scalars['ID'];
};

export type OrderBy = {
  key?: InputMaybe<SortKey>;
  order?: InputMaybe<SortOrder>;
};

export type OrderInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  cartItems?: InputMaybe<Array<CartItemInput>>;
  comment?: InputMaybe<Scalars['String']>;
  customer: CustomerInput;
  deliverySlotId: Scalars['ID'];
  discountCode?: InputMaybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  reservationId?: InputMaybe<Scalars['ID']>;
  storeId: Scalars['ID'];
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Modified = 'MODIFIED',
  New = 'NEW',
  Open = 'OPEN'
}

export type PaymentCard = {
  __typename: 'PaymentCard';
  expired: Scalars['Boolean'];
  expiryDate: Scalars['String'];
  id: Scalars['ID'];
  maskedCardNumber: Scalars['String'];
  name: Scalars['String'];
  type: PaymentCardType;
  userGeneratedName: Scalars['String'];
};

export enum PaymentCardType {
  AmericanExpress = 'AMERICAN_EXPRESS',
  Mastercard = 'MASTERCARD',
  SBusiness = 'S_BUSINESS',
  SVisa = 'S_VISA',
  Unknown = 'UNKNOWN',
  Visa = 'VISA'
}

export type PaymentCards = {
  __typename: 'PaymentCards';
  cards: Array<PaymentCard>;
  defaultPaymentCardId: Maybe<Scalars['ID']>;
};

export enum PaymentMethod {
  CardPayment = 'CARD_PAYMENT',
  Invoice = 'INVOICE',
  OnDelivery = 'ON_DELIVERY'
}

export enum PaymentStatus {
  Canceled = 'CANCELED',
  CaptureCompleted = 'CAPTURE_COMPLETED',
  CaptureFailed = 'CAPTURE_FAILED',
  CardAuthorizationFailed = 'CARD_AUTHORIZATION_FAILED',
  CardAuthorized = 'CARD_AUTHORIZED',
  Pending = 'PENDING',
  Unavailable = 'UNAVAILABLE'
}

export type PaymentTerminalAddress = {
  __typename: 'PaymentTerminalAddress';
  redirectUrl: Scalars['String'];
  transactionId: Scalars['String'];
};

export type Point = {
  __typename: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Product = {
  __typename: 'Product';
  allergens: Maybe<Array<Allergen>>;
  approxPrice: Maybe<Scalars['Boolean']>;
  availabilities: Maybe<Array<ProductAvailabilities>>;
  /** @deprecated Use salesUniteCom field */
  basicQuantityUnit: Maybe<Scalars['String']>;
  brandName: Maybe<Scalars['String']>;
  categories: Maybe<Array<Scalars['String']>>;
  category: Maybe<Scalars['String']>;
  categoryId: Maybe<Scalars['String']>;
  collectingPriority: Maybe<Scalars['Float']>;
  comparisonPrice: Maybe<Scalars['Float']>;
  comparisonUnit: Maybe<Scalars['String']>;
  consumerPackageSize: Maybe<Scalars['Float']>;
  consumerPackageUnit: Maybe<Scalars['String']>;
  countryName: Maybe<CountryName>;
  depositPrice: Maybe<Scalars['Float']>;
  description: Maybe<Scalars['String']>;
  descriptionShort: Maybe<Scalars['String']>;
  ean: Maybe<Scalars['String']>;
  frozen: Maybe<Scalars['Boolean']>;
  hierarchyPath: Maybe<Array<HierarchyPathItem>>;
  id: Scalars['ID'];
  inStore: Maybe<Scalars['Boolean']>;
  ingredientStatement: Maybe<Scalars['String']>;
  isAgeLimitedByAlcohol: Maybe<Scalars['Boolean']>;
  isGlobalFallback: Maybe<Scalars['Boolean']>;
  localized: Maybe<LocalizedProductInfo>;
  location: Maybe<ProductLocation>;
  marketingMessage: Maybe<Scalars['String']>;
  measurement: Maybe<ProductMeasurement>;
  modified: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  nutrientClaims: Maybe<Array<NutrientClaim>>;
  nutrients: Maybe<Array<Nutrient>>;
  nutrientsRaw: Maybe<Array<NutrientRaw>>;
  onSale: Maybe<Scalars['Boolean']>;
  packagingLabelCodes: Maybe<Array<Scalars['String']>>;
  packagingLabels: Maybe<Array<Scalars['String']>>;
  packagingMarkedLabelAccreditationCodes: Maybe<Array<Scalars['String']>>;
  price: Maybe<Scalars['Float']>;
  priceUnit: Maybe<Scalars['String']>;
  productType: Maybe<ProductType>;
  quantityMultiplier: Maybe<Scalars['Float']>;
  salesUniteCom: Maybe<SalesUnit>;
  slug: Maybe<Scalars['String']>;
  stock: Maybe<Scalars['Float']>;
  store: Maybe<Store>;
  storeAvailability: Maybe<Array<Product>>;
  storeId: Maybe<Scalars['Int']>;
  supplierName: Maybe<Scalars['String']>;
  taxPercentage: Maybe<Scalars['Float']>;
  tuhtiId: Maybe<Scalars['String']>;
  /** @deprecated Use measurement object instead */
  weight: Maybe<Scalars['Float']>;
  /** @deprecated Use measurement object instead */
  weightUnit: Maybe<Scalars['String']>;
};


export type ProductAvailabilitiesArgs = {
  date: InputMaybe<Scalars['String']>;
};


export type ProductStoreAvailabilityArgs = {
  onlyIfFallback: InputMaybe<Scalars['Boolean']>;
};

export type ProductAvailabilities = {
  __typename: 'ProductAvailabilities';
  date: Maybe<Scalars['String']>;
  label: Maybe<ProductAvailabilityLabel>;
  score: Maybe<Scalars['Float']>;
};

export enum ProductAvailabilityLabel {
  Available = 'AVAILABLE',
  LimitedAvailability = 'LIMITED_AVAILABILITY',
  OutOfStock = 'OUT_OF_STOCK'
}

export type ProductList = {
  __typename: 'ProductList';
  /** @deprecated Use structuredFacets */
  facets: Maybe<Array<Maybe<Facets>>>;
  from: Maybe<Scalars['Int']>;
  items: Maybe<Array<Maybe<Product>>>;
  limit: Maybe<Scalars['Int']>;
  searchProvider: Maybe<SearchProvider>;
  structuredFacets: Maybe<Array<IStructuredFacet>>;
  total: Maybe<Scalars['Int']>;
};

export type ProductLocation = {
  __typename: 'ProductLocation';
  aisle: Maybe<Scalars['String']>;
  coordinate: Maybe<Array<Scalars['Float']>>;
  floor: Maybe<Scalars['Int']>;
  module: Maybe<Scalars['String']>;
  shelf: Maybe<Scalars['String']>;
};

export type ProductMeasurement = {
  __typename: 'ProductMeasurement';
  grossWeight: Maybe<Scalars['Float']>;
  grossWeightUnit: Maybe<Scalars['String']>;
  netWeight: Maybe<Scalars['Float']>;
  netWeightUnit: Maybe<Scalars['String']>;
  pceApproxWeight: Maybe<Scalars['Float']>;
};

export enum ProductType {
  Coupon = 'COUPON',
  DeliveryProduct = 'DELIVERY_PRODUCT',
  Deposit = 'DEPOSIT',
  PackagingProduct = 'PACKAGING_PRODUCT',
  Product = 'PRODUCT',
  ServiceFee = 'SERVICE_FEE'
}

export type ProductUserEventResponse = {
  __typename: 'ProductUserEventResponse';
  success: Scalars['Boolean'];
};

export enum ProductUserEventType {
  AddToCart = 'ADD_TO_CART',
  ProductClick = 'PRODUCT_CLICK',
  Purchase = 'PURCHASE'
}

export type PushNotificationDevice = {
  __typename: 'PushNotificationDevice';
  deviceToken: Scalars['String'];
  name: Maybe<Scalars['String']>;
};

export type Query = {
  __typename: 'Query';
  /**
   * For query input, return list of autocompleted physical addresses. Addresses *do not* include
   * geolocation coordinates.
   *
   * @param query The input that should be autocompleted
   * @param countryCode Limit address lookup inside a specific country, e.g. FIN
   * @param lang Change language of data, for example Finnish addresses in Swedish language
   */
  addressAutocomplete: Maybe<Array<AddressAutocompleteResult>>;
  /**
   * For query input, return a physical address with geolocation coordinates.
   * Typically there's only one result, unless the query input is ambiguous.
   *
   * @param query the adddress input
   * @param lang Change language of data, for example Finnish addresses in Swedish language
   */
  addressGeocode: Maybe<Array<AddressGeocodeResult>>;
  authTokens: Maybe<AuthTokens>;
  bonusInfo: Maybe<BonusInfo>;
  deliveryArea: Maybe<DeliveryArea>;
  deliveryAreaPins: Maybe<DeliveryAreaPinsResponse>;
  deliveryAreas: Maybe<Array<DeliveryArea>>;
  deliverySlot: Maybe<DeliverySlot>;
  deliverySlotReservation: DeliverySlotReservationResponse;
  /** @param rangeDays Duration of days to look for the next slot. Default is 14 days. Minimum is 1 and maximum 31 */
  nextAvailableDeliverySlots: Array<DeliverySlot>;
  order: Maybe<Order>;
  /**
   * @throws:
   * - ProductNotFoundError [404]
   */
  product: Maybe<Product>;
  recipe: Maybe<Recipe>;
  searchDeliveryAreas: Maybe<DeliveryAreaSearchResponse>;
  searchStores: Maybe<SearchStoresResponse>;
  serviceSubscriptions: Array<ServiceSubscription>;
  store: Maybe<Store>;
  stores: Maybe<Array<StoreInfo>>;
  userFavoritesList: Maybe<FavoritesList>;
  userFavoritesLists: Maybe<FavoritesLists>;
  userNotificationPreferences: Maybe<UserNotificationPreferences>;
  userOrder: Maybe<UserOrderWithCartItems>;
  userOrders: Array<UserOrder>;
  userPaymentCards: Maybe<PaymentCards>;
  userProductRecommendation: Maybe<CartRecommendation>;
  userProfile: Maybe<UserProfile>;
  userProfileGuidedEntry: Scalars['String'];
};


export type QueryAddressAutocompleteArgs = {
  countryCode: Scalars['String'];
  lang: InputMaybe<Scalars['String']>;
  query: Scalars['String'];
};


export type QueryAddressGeocodeArgs = {
  lang: InputMaybe<Scalars['String']>;
  query: Scalars['String'];
};


export type QueryAuthTokensArgs = {
  refreshToken: InputMaybe<Scalars['String']>;
};


export type QueryDeliveryAreaArgs = {
  id: Scalars['ID'];
};


export type QueryDeliveryAreaPinsArgs = {
  domains: InputMaybe<Array<Domain>>;
};


export type QueryDeliveryAreasArgs = {
  brand: InputMaybe<Scalars['String']>;
  deliveryMethod: InputMaybe<DeliveryMethod>;
  onlySKaupat: InputMaybe<Scalars['Boolean']>;
  postalCode: InputMaybe<Scalars['String']>;
};


export type QueryDeliverySlotArgs = {
  id: Scalars['ID'];
};


export type QueryDeliverySlotReservationArgs = {
  reservationId: Scalars['ID'];
};


export type QueryNextAvailableDeliverySlotsArgs = {
  areaIds: Array<Scalars['String']>;
  rangeDays: InputMaybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryProductArgs = {
  fallbackToGlobal: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  includeAgeLimitedByAlcohol: InputMaybe<Scalars['Boolean']>;
  includeUnavailable: InputMaybe<Scalars['Boolean']>;
  storeId: InputMaybe<Scalars['ID']>;
};


export type QueryRecipeArgs = {
  id: Scalars['ID'];
};


export type QuerySearchDeliveryAreasArgs = {
  boundingBox: InputMaybe<BoundingBox>;
  brands: InputMaybe<Array<InputMaybe<StoreBrand>>>;
  deliveryMethod: InputMaybe<DeliveryMethod>;
  domains: InputMaybe<Array<InputMaybe<Domain>>>;
  freetext: InputMaybe<Scalars['String']>;
  location: InputMaybe<Location>;
  postalCode: InputMaybe<Scalars['String']>;
  storeId: InputMaybe<Scalars['ID']>;
};


export type QuerySearchStoresArgs = {
  _dangerousLoadAllOverrideForSitemap: InputMaybe<Scalars['Boolean']>;
  brand: InputMaybe<StoreBrand>;
  cursor: InputMaybe<Scalars['String']>;
  query: InputMaybe<Scalars['String']>;
};


export type QueryServiceSubscriptionsArgs = {
  serviceTypes: Array<ServiceSubscriptionServiceType>;
};


export type QueryStoreArgs = {
  id: Scalars['ID'];
};


export type QueryStoresArgs = {
  brand: InputMaybe<Scalars['String']>;
  onlySKaupat: InputMaybe<Scalars['Boolean']>;
};


export type QueryUserFavoritesListArgs = {
  listId: Scalars['ID'];
};


export type QueryUserOrderArgs = {
  id: Scalars['ID'];
};


export type QueryUserOrdersArgs = {
  dataSources: InputMaybe<Array<UserOrderDataSource>>;
  domain: InputMaybe<Domain>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QueryUserProductRecommendationArgs = {
  type: CartRecommendationType;
};

export type Recipe = {
  __typename: 'Recipe';
  categories: Maybe<RecipeCategories>;
  cookTime: Maybe<Scalars['Int']>;
  description: Maybe<Scalars['String']>;
  externalUrl: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Maybe<Scalars['String']>;
  ingredients: Array<RecipeIngredient>;
  instructions: Array<RecipeInstruction>;
  name: Scalars['String'];
  /** @deprecated Not supported anymore. Use yield and yieldType fields instead because this is missing the type. */
  portions: Maybe<Scalars['Int']>;
  publisher: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  yield: Scalars['Int'];
  yieldType: RecipeYieldType;
};

export type RecipeCategories = {
  __typename: 'RecipeCategories';
  contentConcept: Maybe<Array<Scalars['String']>>;
  course: Maybe<Array<Scalars['String']>>;
  cuisine: Maybe<Array<Scalars['String']>>;
  diet: Maybe<Array<Scalars['String']>>;
  foodType: Maybe<Array<Scalars['String']>>;
  ingredientCategory: Maybe<Array<Scalars['String']>>;
  meal: Maybe<Array<Scalars['String']>>;
  preparation: Maybe<Array<Scalars['String']>>;
  theme: Maybe<Array<Scalars['String']>>;
};

export type RecipeIngredient = {
  __typename: 'RecipeIngredient';
  amountType: Maybe<Scalars['String']>;
  eans: Maybe<Array<Scalars['String']>>;
  groupName: Maybe<Scalars['String']>;
  ingredientTitle: Maybe<Scalars['String']>;
  maxAmount: Maybe<Scalars['Float']>;
  minAmount: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  products: Maybe<Array<Product>>;
};


export type RecipeIngredientProductsArgs = {
  fallbackToGlobal: InputMaybe<Scalars['Boolean']>;
  storeId: Scalars['ID'];
};

export type RecipeInstruction = {
  __typename: 'RecipeInstruction';
  body: Scalars['String'];
};

export enum RecipeYieldType {
  Piece = 'PIECE',
  Portion = 'PORTION',
  Unit = 'UNIT'
}

export type RemoveUserPaymentCardResponse = {
  __typename: 'RemoveUserPaymentCardResponse';
  id: Scalars['ID'];
};

export type RenameUserPaymentCardResponse = {
  __typename: 'RenameUserPaymentCardResponse';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ResetOrderPaymentCardResponse = {
  __typename: 'ResetOrderPaymentCardResponse';
  id: Scalars['ID'];
};

export enum SalesUnit {
  Kg = 'KG',
  Kpl = 'KPL'
}

export type SaveUserPaymentCardResponse = {
  __typename: 'SaveUserPaymentCardResponse';
  id: Scalars['ID'];
};

export enum SearchProvider {
  Elasticsearch = 'elasticsearch',
  Loop54 = 'loop54'
}

export type SearchStoresResponse = {
  __typename: 'SearchStoresResponse';
  cursor: Maybe<Scalars['String']>;
  maybeHasMore: Maybe<Scalars['Boolean']>;
  stores: Array<StoreInfo>;
  totalCount: Scalars['Int'];
};

export type ServiceSubscription = {
  __typename: 'ServiceSubscription';
  /** Is the user allowed to change the current activation state */
  changeAllowed: Maybe<Scalars['Boolean']>;
  serviceName: Maybe<Scalars['String']>;
  serviceType: ServiceSubscriptionServiceType;
  /** Service activation for this customer */
  subscribed: Scalars['Boolean'];
  /** Date when this service was activated */
  subscriptionStartDate: Maybe<Scalars['String']>;
};

export enum ServiceSubscriptionServiceType {
  AbcMobile = 'ABC_MOBILE',
  AnalyticsAndProfilingBarring = 'ANALYTICS_AND_PROFILING_BARRING',
  AoPostiBarring = 'AO_POSTI_BARRING',
  BalanceTerminalLastUsed = 'BALANCE_TERMINAL_LAST_USED',
  BenefitsAccountBalance = 'BENEFITS_ACCOUNT_BALANCE',
  BenefitsAccountBalanceSnavi = 'BENEFITS_ACCOUNT_BALANCE_SNAVI',
  CommonRegisterDigili = 'COMMON_REGISTER_DIGILI',
  CommonRegisterSpankki = 'COMMON_REGISTER_SPANKKI',
  EreceiptArchive = 'ERECEIPT_ARCHIVE',
  EreceiptPaku = 'ERECEIPT_PAKU',
  MarketingMailBarring = 'MARKETING_MAIL_BARRING',
  ProductPurchaseDataCollectionBarring = 'PRODUCT_PURCHASE_DATA_COLLECTION_BARRING',
  ResearchSurveyBarring = 'RESEARCH_SURVEY_BARRING',
  SmobiiliLastUsed = 'SMOBIILI_LAST_USED',
  TelephoneMarketingBarring = 'TELEPHONE_MARKETING_BARRING',
  TelephoneRobinsonBarring = 'TELEPHONE_ROBINSON_BARRING',
  ThirdPartyTargetingBarring = 'THIRD_PARTY_TARGETING_BARRING',
  WarrantyReceiptFeature = 'WARRANTY_RECEIPT_FEATURE',
  WebAoPosti = 'WEB_AO_POSTI'
}

export enum ServiceType {
  AppHosted = 'APP_HOSTED',
  PaymentGatewayHosted = 'PAYMENT_GATEWAY_HOSTED'
}

export type SetDefaultUserPaymentCardResponse = {
  __typename: 'SetDefaultUserPaymentCardResponse';
  id: Scalars['ID'];
};

export enum SlotAvailability {
  Available = 'AVAILABLE',
  Full = 'FULL'
}

export enum SlotRecurrence {
  ModifiedWeekly = 'MODIFIED_WEEKLY',
  Once = 'ONCE',
  Weekly = 'WEEKLY'
}

export enum SortKey {
  ComparisonPrice = 'comparisonPrice',
  Name = 'name',
  Price = 'price',
  Score = 'score'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Store = {
  __typename: 'Store';
  availablePaymentMethods: Maybe<Array<PaymentMethod>>;
  brand: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  coOperative: Maybe<CoOperative>;
  contactInfo: Maybe<StoreContactInfo>;
  discountProduct: Maybe<DiscountProduct>;
  domains: Array<Domain>;
  feedback: Maybe<StoreFeedback>;
  id: Scalars['ID'];
  /** @deprecated Not supported anymore. Does not contain up-to-date information. This information is stored per pick-up points. */
  latitude: Maybe<Scalars['Float']>;
  location: Maybe<StoreLocation>;
  /** @deprecated Not supported anymore. Does not contain up-to-date information. This information is stored per pick-up points. */
  longitude: Maybe<Scalars['Float']>;
  mandatoryProducts: Maybe<Array<Product>>;
  name: Scalars['String'];
  navigation: Maybe<Array<NavigationItem>>;
  postalCode: Maybe<Scalars['String']>;
  products: Maybe<ProductList>;
  serviceProducts: Maybe<Array<Product>>;
  services: Maybe<Array<StoreService>>;
  shortName: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  street: Maybe<Scalars['String']>;
  weeklyOpeningHours: Maybe<Array<StoreWeeklyOpeningTime>>;
};


export type StoreDiscountProductArgs = {
  discountCode: InputMaybe<Scalars['String']>;
};


export type StoreMandatoryProductsArgs = {
  deliveryMethod: InputMaybe<DeliveryMethod>;
  deliverySlotId: InputMaybe<Scalars['String']>;
  orderId: InputMaybe<Scalars['String']>;
  packagingMaterialEan: InputMaybe<Scalars['String']>;
};


export type StoreProductsArgs = {
  eans: InputMaybe<Array<Scalars['String']>>;
  facets: InputMaybe<Array<FacetKey>>;
  fallbackToGlobal: InputMaybe<Scalars['Boolean']>;
  filters: InputMaybe<Array<Filters>>;
  from: InputMaybe<Scalars['Int']>;
  generatedSessionId: InputMaybe<Scalars['String']>;
  hierarchyId: InputMaybe<Scalars['String']>;
  includeAgeLimitedByAlcohol: InputMaybe<Scalars['Boolean']>;
  limit: InputMaybe<Scalars['Int']>;
  loop54DirectSearch: InputMaybe<Scalars['Boolean']>;
  order: InputMaybe<SortOrder>;
  orderBy: InputMaybe<SortKey>;
  queryString: InputMaybe<Scalars['String']>;
  searchProvider: InputMaybe<SearchProvider>;
  slug: InputMaybe<Scalars['String']>;
  structuredFacets: InputMaybe<Array<StructuredFacetInput>>;
  useRandomId: InputMaybe<Scalars['Boolean']>;
};

export type StoreAddress = {
  __typename: 'StoreAddress';
  country: Maybe<Country>;
  municipality: Municipality;
  postcode: Scalars['String'];
  postcodeName: Maybe<LocalizableText>;
  street: LocalizableText;
};

export enum StoreBrand {
  Abc = 'ABC',
  Alepa = 'ALEPA',
  Herkku = 'HERKKU',
  MestarinHerkku = 'MESTARIN_HERKKU',
  Prisma = 'PRISMA',
  Sale = 'SALE',
  SokosHerkku = 'SOKOS_HERKKU',
  SMarket = 'S_MARKET'
}

export type StoreContactInfo = {
  __typename: 'StoreContactInfo';
  email: Maybe<Scalars['String']>;
  phoneNumber: Maybe<StorePhoneNumber>;
};

export type StoreDayOpeningTime = {
  __typename: 'StoreDayOpeningTime';
  date: Scalars['String'];
  day: DayLabel;
  exceptional: Maybe<Scalars['Boolean']>;
  message: Maybe<LocalizedText>;
  mode: StoreOpeningTimeRangeLabel;
  ranges: Maybe<Array<StoreOpeningTimeRange>>;
};

export type StoreFeedback = {
  __typename: 'StoreFeedback';
  url: Maybe<LocalizableText>;
};

export type StoreInfo = {
  __typename: 'StoreInfo';
  availablePaymentMethods: Maybe<Array<PaymentMethod>>;
  brand: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  contactInfo: Maybe<StoreContactInfo>;
  domains: Array<Domain>;
  feedback: Maybe<StoreFeedback>;
  id: Scalars['ID'];
  /** @deprecated Not supported anymore. Does not contain up-to-date information. This information is stored per pick-up points. */
  latitude: Maybe<Scalars['Float']>;
  location: Maybe<StoreLocation>;
  /** @deprecated Not supported anymore. Does not contain up-to-date information. This information is stored per pick-up points. */
  longitude: Maybe<Scalars['Float']>;
  name: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  services: Maybe<Array<StoreService>>;
  shortName: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  street: Maybe<Scalars['String']>;
  weeklyOpeningHours: Maybe<Array<StoreWeeklyOpeningTime>>;
};

export type StoreLocation = {
  __typename: 'StoreLocation';
  address: Maybe<StoreAddress>;
  coordinates: Maybe<Coordinates>;
};

export type StoreOpeningTimeRange = {
  __typename: 'StoreOpeningTimeRange';
  close: Scalars['String'];
  closeOnSameDay: Maybe<Scalars['Boolean']>;
  open: Scalars['String'];
};

export enum StoreOpeningTimeRangeLabel {
  AllDay = 'ALL_DAY',
  ByReservation = 'BY_RESERVATION',
  Closed = 'CLOSED',
  Range = 'RANGE'
}

export type StorePhoneNumber = {
  __typename: 'StorePhoneNumber';
  callCharge: Maybe<LocalizableText>;
  callChargeGroup: Maybe<Scalars['String']>;
  number: Scalars['String'];
};

export type StoreService = {
  __typename: 'StoreService';
  code: Scalars['String'];
  name: Maybe<LocalizableText>;
};

export type StoreWeeklyOpeningTime = {
  __typename: 'StoreWeeklyOpeningTime';
  openingTimes: Array<StoreDayOpeningTime>;
  weekNumber: Scalars['Int'];
};

export type StringFacet = IStructuredFacet & {
  __typename: 'StringFacet';
  key: FacetKey;
  stringValue: Array<Scalars['String']>;
};

export type StructuredFacetInput = {
  key: FacetKey;
  order?: InputMaybe<SortOrder>;
};

export enum UserNotificationMediumEnum {
  PushNotification = 'PUSH_NOTIFICATION'
}

export type UserNotificationPreferences = {
  __typename: 'UserNotificationPreferences';
  marketing: UserNotificationSubscription;
  transactional: UserNotificationSubscription;
};

export type UserNotificationSubscription = {
  __typename: 'UserNotificationSubscription';
  enabled: Maybe<Scalars['Boolean']>;
  pushNotification: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export enum UserNotificationSubscriptionEnum {
  Marketing = 'MARKETING',
  Transactional = 'TRANSACTIONAL'
}

export type UserOrder = {
  __typename: 'UserOrder';
  createdAt: Scalars['String'];
  customer: Maybe<Customer>;
  dataSource: UserOrderDataSource;
  deliveryDate: Scalars['String'];
  deliveryMethod: DeliveryMethod;
  deliverySlotClosed: Maybe<Scalars['Boolean']>;
  deliverySlotClosingTimestamp: Maybe<Scalars['String']>;
  deliveryTime: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isFastTrack: Maybe<Scalars['Boolean']>;
  isModifiable: Scalars['Boolean'];
  modifiedAt: Maybe<Scalars['String']>;
  orderNumber: Scalars['String'];
  orderStatus: OrderStatus;
  paymentMethod: Maybe<PaymentMethod>;
  paymentStatus: Maybe<PaymentStatus>;
  pickupLocation: Maybe<Scalars['String']>;
  storeId: Scalars['String'];
  storeName: Maybe<Scalars['String']>;
  totalCost: Scalars['Float'];
  userId: Maybe<Scalars['String']>;
};

export type UserOrderCartItem = {
  __typename: 'UserOrderCartItem';
  additionalInfo: Maybe<Scalars['String']>;
  basicQuantityUnit: Maybe<Scalars['String']>;
  ean: Scalars['String'];
  id: Scalars['ID'];
  itemCount: Scalars['Float'];
  name: Scalars['String'];
  price: Maybe<Scalars['Float']>;
  productType: ProductType;
  replace: Maybe<Scalars['Boolean']>;
};

export enum UserOrderDataSource {
  Foodie = 'FOODIE',
  SKaupat = 'S_KAUPAT'
}

export type UserOrderWithCartItems = {
  __typename: 'UserOrderWithCartItems';
  cartItems: Array<UserOrderCartItem>;
  createdAt: Scalars['String'];
  customer: Maybe<Customer>;
  dataSource: UserOrderDataSource;
  deliveryDate: Scalars['String'];
  deliveryMethod: DeliveryMethod;
  deliverySlotClosed: Maybe<Scalars['Boolean']>;
  deliverySlotClosingTimestamp: Maybe<Scalars['String']>;
  deliveryTime: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isFastTrack: Maybe<Scalars['Boolean']>;
  isModifiable: Scalars['Boolean'];
  modifiedAt: Maybe<Scalars['String']>;
  orderNumber: Scalars['String'];
  orderStatus: OrderStatus;
  paymentMethod: Maybe<PaymentMethod>;
  paymentStatus: Maybe<PaymentStatus>;
  pickupLocation: Maybe<Scalars['String']>;
  storeId: Scalars['String'];
  storeName: Maybe<Scalars['String']>;
  totalCost: Scalars['Float'];
  userId: Maybe<Scalars['String']>;
};

export type UserProfile = {
  __typename: 'UserProfile';
  address: Maybe<Address>;
  company: Maybe<Company>;
  customerType: CustomerType;
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  phoneNumber: Maybe<Scalars['String']>;
  tags: Maybe<Array<Scalars['String']>>;
  /** @deprecated Will be removed, use sub from accessToken instead */
  userId: Scalars['String'];
};

export type RemoteStoreDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoteStoreDataQuery = (
  { __typename: 'Query' }
  & { store: Maybe<(
    { __typename: 'Store' }
    & Pick<Store, 'id' | 'name' | 'city'>
    & { products: Maybe<(
      { __typename: 'ProductList' }
      & { items: Maybe<Array<Maybe<(
        { __typename: 'Product' }
        & Pick<Product, 'id' | 'ean' | 'name' | 'price' | 'priceUnit'>
      )>>> }
    )> }
  )> }
);

export type RemoteStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type RemoteStoresQuery = (
  { __typename: 'Query' }
  & { stores: Maybe<Array<(
    { __typename: 'StoreInfo' }
    & Pick<StoreInfo, 'id' | 'name' | 'city' | 'postalCode' | 'availablePaymentMethods'>
    & { services: Maybe<Array<(
      { __typename: 'StoreService' }
      & Pick<StoreService, 'code'>
      & { name: Maybe<(
        { __typename: 'LocalizableText' }
        & Pick<LocalizableText, 'en'>
      )> }
    )>> }
  )>> }
);


export const RemoteStoreDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RemoteStoreData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"store"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ean"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceUnit"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RemoteStoreDataQuery, RemoteStoreDataQueryVariables>;
export const RemoteStoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RemoteStores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RemoteStoresQuery, RemoteStoresQueryVariables>;