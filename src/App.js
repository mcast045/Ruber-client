import React, { Component } from 'react';
import './App.css'
import { Switch, Route } from 'react-router-dom';

import RidesPage from './components/rides-page';
import UsersPage from './components/users-page';
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={UsersPage} />
          <Route path='/rides' component={RidesPage} />
          <Route path='/users' component={UsersPage} />
        </Switch>
      </div>
    );
  }
}

export default App;