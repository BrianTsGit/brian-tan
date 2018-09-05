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
                <span onClick={props.showConcepts}>PROJECTS</span>
            </li>
            {/* <NavigationItem sectionName="About" link="/about" clicked={props.clicked} /> */}
        </ul>
    );
};

export default navigationItems;