import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { RestaurantsActionsTypes, RESTAURANTS_ACTIONS } from './types';
import { Restaurant, RestaurantNormalized, RootState } from '../../types';
import { Action } from 'redux';

export const loadRestaurants = (): RestaurantsActionsTypes => ({
  type: RESTAURANTS_ACTIONS.LOAD_RESTAURANTS,
});

export const loadRestaurantsSucceed = (
  data: RestaurantNormalized[]
): RestaurantsActionsTypes => ({
  type: RESTAURANTS_ACTIONS.LOAD_RESTAURANTS_SUCCEED,
  payload: data,
});

export const loadRestaurantsFailed = (error: any): RestaurantsActionsTypes => ({
  type: RESTAURANTS_ACTIONS.LOAD_RESTAURANTS_FAILED,
  payload: error,
});

export const fetchRestaurants = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    const {
      data: { restaurants },
    }: { data: { restaurants: Restaurant[] } } = await axios.get(
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'
    );

    const data = restaurants.map((r) => ({ ...r, id: uuidv4() }));

    dispatch(loadRestaurantsSucceed(data));
  } catch (error) {
    console.error('Error during restaurants loading: ', error);
    dispatch(loadRestaurantsFailed(error));
  }
};
