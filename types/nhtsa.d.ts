export type NhtsaResponse<T> = {
  /** A count of the items returned in the Results array. */
  Count: number
  /** A message describing the Results array. */
  Message: string
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string
  /** The search results returned by the NHSTA API request. */
  Results: T[]
}

export type DecodeVinValuesResults = {
  /** Flat file format, single object containing values of type string */
  ABS: string
  ActiveSafetySysNote: string
  AdaptiveCruiseControl: string
  AdaptiveDrivingBeam: string
  AdaptiveHeadlights: string
  AdditionalErrorText: string
  AirBagLocCurtain: string
  AirBagLocFront: string
  AirBagLocKnee: string
  AirBagLocSeatCushion: string
  AirBagLocSide: string
  AutoReverseSystem: string
  AutomaticPedestrianAlertingSound: string
  AxleConfiguration: string
  Axles: string
  BasePrice: string
  BatteryA: string
  BatteryA_to: string
  BatteryCells: string
  BatteryInfo: string
  BatteryKWh: string
  BatteryKWh_to: string
  BatteryModules: string
  BatteryPacks: string
  BatteryType: string
  BatteryV: string
  BatteryV_to: string
  BedLengthIN: string
  BedType: string
  BlindSpotMon: string
  BodyCabType: string
  BodyClass: string
  BrakeSystemDesc: string
  BrakeSystemType: string
  BusFloorConfigType: string
  BusLength: string
  BusType: string
  CAN_AACN: string
  CIB: string
  CashForClunkers: string
  ChargerLevel: string
  ChargerPowerKW: string
  CoolingType: string
  CurbWeightLB: string
  CustomMotorcycleType: string
  DaytimeRunningLight: string
  DestinationMarket: string
  DisplacementCC: string
  DisplacementCI: string
  DisplacementL: string
  Doors: string
  DriveType: string
  DriverAssist: string
  DynamicBrakeSupport: string
  EDR: string
  ESC: string
  EVDriveUnit: string
  ElectrificationLevel: string
  EngineConfiguration: string
  EngineCycles: string
  EngineCylinders: string
  EngineHP: string
  EngineHP_to: string
  EngineKW: string
  EngineManufacturer: string
  EngineModel: string
  EntertainmentSystem: string
  ErrorCode: string
  ErrorText: string
  ForwardCollisionWarning: string
  FuelInjectionType: string
  FuelTypePrimary: string
  FuelTypeSecondary: string
  GCWR: string
  GCWR_to: string
  GVWR: string
  GVWR_to: string
  KeylessIgnition: string
  LaneDepartureWarning: string
  LaneKeepSystem: string
  LowerBeamHeadlampLightSource: string
  Make: string
  Manufacturer: string
  ManufacturerId: string
  Model: string
  ModelYear: string
  MotorcycleChassisType: string
  MotorcycleSuspensionType: string
  NCSABodyType: string
  NCSAMake: string
  NCSAMapExcApprovedBy: string
  NCSAMapExcApprovedOn: string
  NCSAMappingException: string
  NCSAModel: string
  NCSANote: string
  Note: string
  OtherBusInfo: string
  OtherEngineInfo: string
  OtherMotorcycleInfo: string
  OtherRestraintSystemInfo: string
  OtherTrailerInfo: string
  ParkAssist: string
  PedestrianAutomaticEmergencyBraking: string
  PlantCity: string
  PlantCompanyName: string
  PlantCountry: string
  PlantState: string
  PossibleValues: string
  Pretensioner: string
  RearCrossTrafficAlert: string
  RearVisibilitySystem: string
  SAEAutomationLevel: string
  SAEAutomationLevel_to: string
  SeatBeltsAll: string
  SeatRows: string
  Seats: string
  SemiautomaticHeadlampBeamSwitching: string
  Series: string
  Series2: string
  SteeringLocation: string
  SuggestedVIN: string
  TPMS: string
  TopSpeedMPH: string
  TrackWidth: string
  TractionControl: string
  TrailerBodyType: string
  TrailerLength: string
  TrailerType: string
  TransmissionSpeeds: string
  TransmissionStyle: string
  Trim: string
  Trim2: string
  Turbo: string
  VIN: string
  ValveTrainDesign: string
  VehicleType: string
  WheelBaseLong: string
  WheelBaseShort: string
  WheelBaseType: string
  WheelSizeFront: string
  WheelSizeRear: string
  Wheels: string
  Windows: string
}

export type DecodeVinValuesResponse = NhtsaResponse<DecodeVinValuesResults>

export type GetModelsForMakeYearResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
/**
 * Type representing the complete response returned by the GetModelsForMakeYear API Action.
 */
export type GetModelsForMakeYearResponse =
  NhtsaResponse<GetModelsForMakeYearResults>
