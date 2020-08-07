import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.css';

const BackButton: React.FC<{ css: React.CSSProperties }> = ({ css }) => {
  const history = useHistory();
  const handleBackButton = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div
      className={styles.backButton}
      style={css}
      onClick={handleBackButton}
    ></div>
  );
};

export default BackButton;
