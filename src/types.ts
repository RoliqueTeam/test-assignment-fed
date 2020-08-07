import { RestaurantsState } from './Restaurant/Restaurants/types';

export type Restaurants = {
  restaurants: Restaurant[];
};

export type Restaurant = {
  name: string;
  backgroundImageURL: string;
  category: string;
  contact: Contact | null;
  location: Location;
};

export type RestaurantNormalized = Restaurant & { id: string };

export type Contact = {
  phone: string;
  formattedPhone: string;
  twitter?: string;
  facebook?: string;
  facebookUsername?: string;
  facebookName?: string;
};

export type Location = {
  address: string;
  crossStreet?: string;
  lat: number;
  lng: number;
  postalCode?: string;
  cc: Cc;
  city: City;
  state: State;
  country: Country;
  formattedAddress: string[];
};

export enum Cc {
  Us = 'US',
}

export enum City {
  Addison = 'Addison',
  Dallas = 'Dallas',
}

export enum Country {
  UnitedStates = 'United States',
}

export enum State {
  Tx = 'TX',
}

export type RootState = {
  restaurants: RestaurantsState;
};
