import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Creds/Login';
import Register from './components/Creds/Register';
import Profile from './components/Profile/Profile';
import SinglePost from './components/SinglePost/SinglePost';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>      
          <div className="container">
              <Switch>
                  <Route exact path='/'/>
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/Register' component={Register} />
                  <Route exact path='/Profile' component={Profile} />
                  <Route exact path='/Post' component={SinglePost} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
