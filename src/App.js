import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import LayoutRoute from './LayoutRoute';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <LayoutRoute path='/' exact={true} component={HomeScreen}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
