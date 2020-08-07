import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Header from './Header/Header';

const Main: React.FC<RouteComponentProps> = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default withRouter(Main);
