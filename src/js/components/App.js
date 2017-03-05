import React from 'react';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  browserHistory
} from 'react-router';
import Header from './container/Header';
import Shop from './presentational/Shop';
import Item from './container/Item';
import Cart from './container/Cart';
import NoMatch from './presentational/NoMatch';

const App = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Header}>
      <IndexRoute component={Shop} />
      <Route path='item/:id' component={Item} />
      <Route path='cart' component={Cart} />
      <Route path='*' component={NoMatch} />
    </Route>
  </Router>
);

export default App;
