import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './nav_bar';
import MainPage from './main_page';

export default (props) => (
  <div className='app-container'>



    <NavBar/>
    <Switch>
      <Route exact path='/' component={MainPage}/>

    </Switch>



  </div>
);
