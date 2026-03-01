import type { PricingModel, VerificationStatus } from '../enums';

export type ProviderProfile = {
  id: string;
  userId: string;
  categories: string[];
  pricingModel: PricingModel;
  priceAmount: number;
  serviceRadiusKm: number;
  verificationStatus: VerificationStatus;
  avgRating: number;
  reviewCount: number;
  lat: number;
  lng: number;
  locationText: string;
};

export type ProviderSearchItem = ProviderProfile & {
  distanceKm: number;
};
