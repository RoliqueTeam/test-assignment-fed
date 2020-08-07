import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRestaurants } from './actions';

import styles from './styles.module.css';

import RestaurantItem from './RestaurantItem/RestaurantItem';
import { RootState } from 'types';

const Restaurants: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.restaurants
  );

  useEffect(() => {
    if (!data?.length) dispatch(fetchRestaurants());
  }, [data, dispatch]);

  const handleRestaurantNavigation = useCallback(
    (restaurantId) => {
      history.push(`/${restaurantId}`);
    },
    [history]
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Something went wrong...</h3>;
  }

  return (
    <div className={styles.restaurantsContainer}>
      {data.map((restaurant) => (
        <RestaurantItem
          data={restaurant}
          key={restaurant.id}
          handleNavigation={() => handleRestaurantNavigation(restaurant.id)}
        />
      ))}
    </div>
  );
};

export default Restaurants;
