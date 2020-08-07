import { RestaurantNormalized } from '../../types';

export type RestaurantsState = {
  data: RestaurantNormalized[];
  loading: boolean;
  error: object | null;
};

export enum RESTAURANTS_ACTIONS {
  LOAD_RESTAURANTS = 'LOAD_RESTAURANTS',
  LOAD_RESTAURANTS_SUCCEED = 'LOAD_RESTAURANTS_SUCCEED',
  LOAD_RESTAURANTS_FAILED = 'LOAD_RESTAURANTS_FAILED',
}

export type LoadRestaurantsAction = {
  type: RESTAURANTS_ACTIONS.LOAD_RESTAURANTS;
  payload?: any;
};

export type LoadRestaurantsSucceedAction = {
  type: RESTAURANTS_ACTIONS.LOAD_RESTAURANTS_SUCCEED;
  payload: any;
};

export type LoadRestaurantsFailedAction = {
  type: RESTAURANTS_ACTIONS.LOAD_RESTAURANTS_FAILED;
  payload: any;
};

export type RestaurantsActionsTypes =
  | LoadRestaurantsAction
  | LoadRestaurantsSucceedAction
  | LoadRestaurantsFailedAction;
