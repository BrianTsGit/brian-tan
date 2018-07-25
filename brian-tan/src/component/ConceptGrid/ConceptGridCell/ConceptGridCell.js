import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './ConceptGridCell.scss';

const conceptGridCell = (props) => {

    return (
        <NavLink to={props.concept.route}>
            <div 
                className={classes.ConceptCell}
                onClick={props.clicked}
                onMouseEnter={props.mouseEnter}
                onMouseLeave={props.mouseLeave}>
                    <span>{props.concept.text}</span>  
            </div>
        </NavLink>
    );
}

export default conceptGridCell;