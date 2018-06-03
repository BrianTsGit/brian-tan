import React from 'react';

import classes from './HitListItem.scss';

const hitListItem = (props) => {
    return (
        <div className={classes.HitListItem}>
            <a href={props.url} target="_blank">
                <img src={props.img} alt="RestaurantImg" />
            </a>     
        </div>
    );
}

export default hitListItem;