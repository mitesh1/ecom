import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-up/sign-in-and-up.component';
import Header from './components/header/header.component.jsx';



function App() {
  return (
    <div>
      <Header></Header>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/SignIn' component={SignInAndSignUpPage} />
      </switch>
    </div>
  );
}

export default App;
