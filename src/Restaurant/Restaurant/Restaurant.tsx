import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import styles from './style.module.css';
import { RootState } from 'types';

import RestaurantMap from './RestaurantMap';

const Restaurant: React.FC = () => {
  const { restaurantId } = useParams();
  const history = useHistory();
  const data = useSelector((state: RootState) =>
    state.restaurants.data.find((r) => r.id === restaurantId)
  );

  if (!data) {
    history.push('/');
  }

  return (
    <div>
      <div className="restaurant--map">
        {data?.location.lng && data?.location.lat && (
          <RestaurantMap
            restaurantLocation={{
              lng: data?.location.lng,
              lat: data?.location.lat,
            }}
          />
        )}
      </div>
      <div className={styles.restaurantInfo}>
        <p className={styles.name}>{data?.name}</p>
        <p className={styles.category}>{data?.category}</p>
      </div>
      <div className={styles.detailsContainer}>
        <p className={styles.detail}>
          {data?.location.formattedAddress[0]} <br />{' '}
          {data?.location.formattedAddress[1]}
        </p>
        {data?.contact?.phone && (
          <p className={styles.detail}>{data?.contact?.formattedPhone}</p>
        )}
        {data?.contact?.twitter && (
          <p className={styles.detail}>@{data?.contact?.twitter}</p>
        )}
      </div>
    </div>
  );
};

export default Restaurant;
