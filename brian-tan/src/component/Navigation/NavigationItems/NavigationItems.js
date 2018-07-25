import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let navigationItemsClasses = classes.NavigationItems;

    if (props.sideDrawer) {
        navigationItemsClasses = [classes.NavigationItems, classes.SideDrawer].join(' ');
    }

    return (
        <ul className={navigationItemsClasses}>
            <li className={classes.NavigationControl}>
                <span onClick={props.showConcepts}>Concepts</span>
            </li>
            <NavigationItem sectionName="About" link="/about" clicked={props.clicked} />
            {/* 
            <NavigationItem sectionName="Home" link="/" clicked={props.clicked} />
            <NavigationItem sectionName="Food" link="/food" />
            <NavigationItem sectionName="Television" link="/television" />
            <NavigationItem sectionName="Gaming" link="/gaming" />
            <NavigationItem sectionName="Misc." link="/misc" /> 
            */}
        </ul>
    );
};

export default navigationItems;