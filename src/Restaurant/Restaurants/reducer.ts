import { RestaurantsState } from './types';
import { RESTAURANTS_ACTIONS, RestaurantsActionsTypes } from './types';

const initialState: RestaurantsState = {
  data: [],
  error: null,
  loading: true,
};

const restaurantsReducer = (
  state = initialState,
  action: RestaurantsActionsTypes
): RestaurantsState => {
  switch (action.type) {
    case RESTAURANTS_ACTIONS.LOAD_RESTAURANTS:
      return {
        data: [],
        error: null,
        loading: true,
      };
    case RESTAURANTS_ACTIONS.LOAD_RESTAURANTS_SUCCEED:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case RESTAURANTS_ACTIONS.LOAD_RESTAURANTS_FAILED:
      return {
        data: [],
        error: action.payload,
        loading: false,
      };
    default:
      return initialState;
  }
};

export default restaurantsReducer;
