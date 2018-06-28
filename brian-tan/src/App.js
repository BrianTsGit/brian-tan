import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Layout from './hoc/Layout/Layout';
import Home from './container/Home/Home';
import Television from './container/Television/Television';
import Gaming from './container/Gaming/Gaming';
import Food from './container/Food/Food';
import Misc from './container/Misc/Misc';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/television" component={Television}></Route>
          <Route path="/gaming" component={Gaming}></Route>
          <Route path="/food" component={Food}></Route>
          <Route path="/misc" component={Misc}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;
