import React from 'react';

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

export default toolbar;