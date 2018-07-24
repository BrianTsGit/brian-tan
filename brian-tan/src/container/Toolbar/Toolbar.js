import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Toolbar.scss';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Aux/Aux';
import NavigationItems from '../../component/Navigation/NavigationItems/NavigationItems';
import SideDrawerToggle from '../../component/Navigation/SideDrawer/SideDrawerToggle/SideDrawerToggle';
import ConceptGrid from '../../component/ConceptGrid/ConceptGrid';

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
                        <span>Tan Out Of Tan</span>
                    </NavLink>
                </div>
                <nav className={[classes.PullRight, classes.DesktopComponent].join(' ')}>
                    <NavigationItems showConcepts={this.props.openConceptsGrid} />
                </nav>
                <nav 
                    className={[classes.PullRight, classes.MobileNav, classes.MobileComponent].join(' ')}
                    onClick={this.props.toggleSideDrawer}>
                    <SideDrawerToggle />
                </nav>
            </div>
            <ConceptGrid 
                showConceptsGrid={this.props.showConceptsGrid} 
                closeConceptsGrid={this.props.closeConceptsGrid} />
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        showConceptsGrid: state.ui.showConceptsGrid
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openConceptsGrid: () => dispatch(actions.openConceptsGrid()),
        closeConceptsGrid: () => dispatch(actions.closeConceptsGrid())
    };
};

Toolbar.propTypes = {
    toggleSideDrawer: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);