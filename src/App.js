import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen.js';
import FruitsVegetables from './components/FruitsVegetables.js';
import BakedProducts from './components/BakedProducts.js';
import DairyEggs from './components/DairyEggs';
import MeatPoultry from './components/MeatPoultry';
import Beverages from './components/Beverages';
import Stationary from './components/Stationary';
import HealthBeauty from './components/HealthBeauty';
import Snacks from './components/Snacks';
import Cleaning from './components/CleaningSet';
import Legumes from './components/Legumes';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import LayoutRoute from './LayoutRoute';
import GuestLayoutRoute from './GuestLayoutRoute';
import PrivateLayoutRoute from './PrivateLayoutRoute';
import ProfileScreen from './ProfileScreen';
import Products from './Products';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <LayoutRoute path='/' exact={true} component={HomeScreen}/>
          <LayoutRoute path='/fruitsVeg' exact={true} component={FruitsVegetables}/>
          <LayoutRoute path='/bakedProducts' exact={true} component={BakedProducts}/>
          <LayoutRoute path='/dairyEggs' exact={true} component={DairyEggs}/>
          <LayoutRoute path='/meatPoultry' exact={true} component={MeatPoultry}/>
          <LayoutRoute path='/beverages' exact={true} component={Beverages}/>
          <LayoutRoute path='/stationary' exact={true} component={Stationary}/>
          <LayoutRoute path='/health' exact={true} component={HealthBeauty}/>
          <LayoutRoute path='/cleaningSet' exact={true} component={Cleaning}/>
          <LayoutRoute path='/legumes' exact={true} component={Legumes}/>
          <LayoutRoute path='/snacks' exact={true} component={Snacks}/>
          <LayoutRoute path='/products' exact={true} component={Products}/>
          <PrivateLayoutRoute path="/profile" exact={true} component={ProfileScreen} />
          <GuestLayoutRoute path="/register" exact={true} component={RegistrationScreen} />
          <GuestLayoutRoute path="/login" exact={true} component={LoginScreen} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
