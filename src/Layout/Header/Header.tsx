import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './style.module.css';

import { BackButton, MapIcon } from 'components';

const Header: React.FC = () => {
  const { restaurantId } = useParams();

  return (
    <header className={styles.header}>
      <BackButton css={{ visibility: restaurantId ? 'visible' : 'hidden' }} />
      <h2 className={styles.title}>Lunch Tyme</h2>
      <MapIcon />
    </header>
  );
};

export default Header;
