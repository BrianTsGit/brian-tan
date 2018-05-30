import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.scss';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.link}>
                {props.sectionName}
            </NavLink>
        </li>
    );
};

export default navigationItem;