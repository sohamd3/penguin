import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';
import SinglePost from './containers/SinglePost';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
