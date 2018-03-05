
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './containers/Home';
import Header from './components/Header/Header';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';
import Compose from './containers/Compose';
import ViewPost from './containers/ViewPost';
import EditProfile from './containers/EditProfile';

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>      
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/profile/:username' component={Profile} />
              <Route exact path='/compose/' component={Compose} />
              <Route exact path='/edit/:posturl' component={Compose} />
              <Route exact path='/post/:posturl' component={ViewPost} />
              <Route exact path='/edit-profile/:username' component={EditProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
