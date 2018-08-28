import React from 'react';
import PropTypes from 'prop-types';

import classes from './IconListItem.scss'

const iconListItem = (props) => {

    props.item.iconClassName = props.item.iconClassName || 'fas fa-star';

    return (
        <div className={classes.IconListItem}>
            <div className={classes.Icon}>
                <i className={props.item.iconClassName} />
            </div>
            <div className={classes.ListText}>
                <h5>{props.item.title}</h5>
                <span>{props.item.description}</span>
            </div>
        </div>
    );
}

iconListItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        iconClassName: PropTypes.string
    })
};

export default iconListItem;