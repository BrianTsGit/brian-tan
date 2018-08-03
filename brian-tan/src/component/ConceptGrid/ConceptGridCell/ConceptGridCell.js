import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './ConceptGridCell.scss';

const conceptGridCell = (props) => {

    return (
        <div className={classes.ConceptCell}>
            <NavLink to={props.concept.route}>
                <div 
                    className={classes.ConceptCellContent}
                    onClick={props.clicked}
                    onMouseEnter={props.mouseEnter}
                    onMouseLeave={props.mouseLeave}>
                        <img src={props.concept.logo} alt="Logo Image" /> 
                </div>
            </NavLink>
        </div>
    );
}

export default conceptGridCell;