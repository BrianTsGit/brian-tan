import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './App.scss';
import Layout from './hoc/Layout/Layout';
import Home from './container/Home/Home';
import Television from './container/Television/Television';
import Gaming from './container/Gaming/Gaming';
import Food from './container/Food/Food';
import Misc from './container/Misc/Misc';
import About from './container/About/About';

class App extends Component {

  render() {
    let innerBodyClasses = classes.InnerBody;

    if (this.props.showConceptsGrid) {
      innerBodyClasses = [classes.InnerBody, classes.ShowConceptGrid].join(' ');
    }

    return (
      <div className={innerBodyClasses}>
        <Layout>
          <Switch>
            <Route path="/television" component={Television}></Route>
            <Route path="/gaming" component={Gaming}></Route>
            <Route path="/food" component={Food}></Route>
            <Route path="/misc" component={Misc}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showConceptsGrid: state.ui.showConceptsGrid
  }
};

export default withRouter(connect(mapStateToProps)(App));
