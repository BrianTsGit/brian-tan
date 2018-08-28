import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './App.scss';
import Layout from './hoc/Layout/Layout';
import FoodJournal from './container/Food/Food';
import About from './container/About/About';
import FashionMagazine from './container/FashionMagazine/FashionMagazine';
import PersonalSite from './container/PersonalSite/PersonalSite';
import Priceline from './container/CoverLetter/Priceline/Priceline';

class App extends Component {

  render() {
    let innerBodyClasses = classes.InnerBody;

    if (this.props.showConceptGrid) {
      innerBodyClasses = [classes.InnerBody, classes.ShowConceptGrid].join(' ');
    }

    return (
      <div className={innerBodyClasses}>
        <Layout>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/gq-magazine" component={FashionMagazine}></Route>
            <Route path="/food-journal" component={FoodJournal}></Route>
            <Route path="/price-line-cover-letter" component={Priceline}></Route>
            <Route path="/" component={PersonalSite}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showConceptGrid: state.ui.showConceptGrid
  }
};

export default withRouter(connect(mapStateToProps)(App));
