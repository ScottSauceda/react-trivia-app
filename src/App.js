import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

import store from './store';

import Home from './components/layout/Home';

import Register from './components/layout/Register';

import Login from './components/layout/Login';

import Trivia from './components/layout/Trivia';

import Categories from './components/layout/Categories';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div className="App">

            <Route path="/" exact component= {Home} />

            <Route path="/register" exact component= {Register} />

            <Route path="/login" exact component= {Login} />

            <Route path="/trivia" exact component= {Trivia} />

            <Route path="/categories" exact component= {Categories} />

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
