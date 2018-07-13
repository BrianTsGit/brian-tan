import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';

const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <nav className={classes.DesktopComponent}>
                <NavigationItems />
            </nav>
            <div 
                className={classes.MobileComponent}
                onClick={props.toggleSideDrawer}>
                <SideDrawerToggle />
            </div>
        </div>
    );
};

toolbar.propTypes = {
    toggleSideDrawer: PropTypes.func.isRequired
};

export default toolbar;