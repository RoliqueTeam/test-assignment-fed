import React from 'react';

import styles from './styles.module.css';
import { Restaurant } from '../../../types';

type Props = {
  data: Restaurant;
  handleNavigation: () => void;
};

const RestaurantItem: React.FC<Props> = ({ data, handleNavigation }) => {
  return (
    <div
      onClick={handleNavigation}
      className={styles.restaurantItem}
      style={{ backgroundImage: `url(${data.backgroundImageURL})` }}
    >
      <h3 className={styles.name}>{data.name}</h3>
      <p className={styles.category}>{data.category}</p>
    </div>
  );
};

export default RestaurantItem;
