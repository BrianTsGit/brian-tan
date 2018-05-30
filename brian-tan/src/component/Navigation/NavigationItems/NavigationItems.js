import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem sectionName="Food" />
            <NavigationItem sectionName="Television" />
            <NavigationItem sectionName="Games" />
            <NavigationItem sectionName="Misc." />
        </ul>
    );
};

export default navigationItems;