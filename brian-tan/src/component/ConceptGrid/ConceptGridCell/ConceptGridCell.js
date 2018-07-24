import React from 'react';
import PropTypes from 'prop-types';

import classes from './ConceptGridCell.scss';

const conceptGridCell = (props) => {

    return (
        <a href={props.concept.url}>
            <div 
                className={classes.ConceptCell}
                onMouseEnter={props.mouseEnter}
                onMouseLeave={props.mouseLeave}>
                    <span>{props.concept.text}</span>  
            </div>
        </a>
    );
}

export default conceptGridCell;