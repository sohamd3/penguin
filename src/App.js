
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter, Link} from 'react-router-dom';

import Home from './containers/Home';
import Header from './components/Header/Header';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';
import Compose from './containers/Compose';
import SinglePost from './containers/SinglePost';

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>      
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/Profile/:username' component={Profile} />
              <Route exact path='/compose/' component={Compose} />
              <Route exact path='/edit/:posturl' component={Compose} />
              {/* <Route exact path='/Post' component={ViewPost} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
