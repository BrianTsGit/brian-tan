import React from 'react';

import classes from './NavigationItem.scss';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>{props.sectionName}</li>
    );
};

export default navigationItem;