import React from 'react';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  browserHistory
} from 'react-router';
import LocationHeader from './LocationHeader';
import Shop from './Shop';
import Item from './Item';
import Cart from './Cart';

const App = () => (
  <Router history={browserHistory}>
    <Route path='/' component={LocationHeader}>
      <IndexRoute component={Shop} />
      <Route path='item/:id' component={Item} />
      <Route path='cart' component={Cart} />
    </Route>
  </Router>
);

export default App;
