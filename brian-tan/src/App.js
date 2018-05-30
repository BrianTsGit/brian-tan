import React, { Component } from 'react';

import './App.scss';
import Layout from './hoc/Layout/Layout';
import Home from './container/Home/Home';

class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default App;
