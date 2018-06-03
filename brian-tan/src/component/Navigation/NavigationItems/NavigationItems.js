import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem sectionName="Home" link="/" />
            <NavigationItem sectionName="Food" link="/food" />
            <NavigationItem sectionName="Television" link="/television" />
            <NavigationItem sectionName="Gaming" link="/gaming" />
            <NavigationItem sectionName="Misc." link="/" />
        </ul>
    );
};

export default navigationItems;