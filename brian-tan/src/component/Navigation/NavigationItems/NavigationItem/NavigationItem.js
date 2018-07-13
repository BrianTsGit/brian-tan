import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.scss';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem} onClick={props.clicked}>
            <NavLink to={props.link}>
                {props.sectionName}
            </NavLink>
        </li>
    );
};

navigationItem.propTypes = {
    sectionName: PropTypes.string,
    link: PropTypes.string
};

export default navigationItem;