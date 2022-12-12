import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen.js';
import FruitsVegetables from './components/FruitsVegetables.js';
import BakedProducts from './components/BakedProducts.js';
import DairyEggs from './components/DairyEggs';
import MeatPoultry from './components/MeatPoultry.js';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import LayoutRoute from './LayoutRoute';
import GuestLayoutRoute from './GuestLayoutRoute';
import PrivateLayoutRoute from './PrivateLayoutRoute';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <LayoutRoute path='/' exact={true} component={HomeScreen}/>
          <LayoutRoute path='/components/fruitsVeg' exact={true} component={FruitsVegetables}/>
          <LayoutRoute path='/components/bakedProducts' exact={true} component={BakedProducts}/>
          <LayoutRoute path='/components/dairyEggs' exact={true} component={DairyEggs}/>
          <LayoutRoute path='/components/meatPoultry' exact={true} component={MeatPoultry}/>
          <GuestLayoutRoute path="/register" exact={true} component={RegistrationScreen} />
          <GuestLayoutRoute path="/login" exact={true} component={LoginScreen} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
