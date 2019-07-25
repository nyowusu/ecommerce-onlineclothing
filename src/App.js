import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

function NoMatch() {
  return (
    <div>
      <h1>Error 404 Page not found</h1>
    </div>
  );
}

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  );
}

export default App;
