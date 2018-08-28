import React from 'react';
import PropTypes from 'prop-types';

import classes from './IconList.scss'
import IconListItem from './IconListItem/IconListItem';

const iconList = (props) => {
    
    let iconListItems = null;

    if (props.listItems.length > 0) {
        iconListItems = props.listItems.map(item => {
            return <IconListItem key={item.title} item={item} />
        });
    }

    return (
        <div className={classes.IconList}>
            {iconListItems}
        </div>

    );
}

iconList.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        iconClassName: PropTypes.string
    }))
};

export default iconList;