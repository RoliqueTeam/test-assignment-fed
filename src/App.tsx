import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Main from './Layout/Main';

import { Restaurants } from './Restaurant/Restaurants';
import { Restaurant } from './Restaurant/Restaurant';

const App: React.FC = () => {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/" exact>
          <Main>
            <Restaurants />
          </Main>
        </Route>
        <Route path="/:restaurantId" exact>
          <Main>
            <Restaurant />
          </Main>
        </Route>
      </AnimatedSwitch>
    </Router>
  );
};

export default App;
