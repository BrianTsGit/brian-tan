import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Toolbar.scss';
import * as actions from '../../store/actions/index';
import initials from '../../assets/images/initials_white.png';
import Aux from '../../hoc/Aux/Aux';
import NavigationItems from '../../component/Navigation/NavigationItems/NavigationItems';
import SideDrawerToggle from '../../component/Navigation/SideDrawer/SideDrawerToggle/SideDrawerToggle';
import ConceptGrid from '../ConceptGrid/ConceptGrid';

class Toolbar extends Component {

    render () {
        let conceptsGridClasses = [classes.ConceptsGrid, classes.GridClosed].join(' ');

        if (this.props.showConceptsGrid) {
            conceptsGridClasses = [classes.ConceptsGrid, classes.GridOpened].join(' ');
        }

        return (
            <Aux>
            <div className={classes.Toolbar}>
                <div className={classes.Title}>
                    <NavLink to="/">
                        <img src={initials} alt="Initials"/>
                    </NavLink>
                </div>
                <nav className={classes.PullRight}>
                    <NavigationItems showConcepts={this.props.openConceptGrid} />
                </nav>
                {/* <nav 
                    className={[classes.PullRight, classes.MobileNav, classes.MobileComponent].join(' ')}
                    onClick={this.props.toggleSideDrawer}>
                    <SideDrawerToggle />
                </nav> */}
            </div>
            <ConceptGrid showConceptGrid={this.props.showConceptGrid} />
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        showConceptGrid: state.ui.showConceptGrid
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openConceptGrid: () => dispatch(actions.openConceptGrid())
    };
};

Toolbar.propTypes = {
    toggleSideDrawer: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);