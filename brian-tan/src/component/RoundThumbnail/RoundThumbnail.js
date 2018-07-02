import React from 'react';

import classes from './RoundThumbnail.scss';

const roundThumbnail = (props) => {
    let descClasses = classes.ThumbnailDesc;

    if (props.category) {
        descClasses = [
            classes.ThumbnailDesc, 
            props.category.charAt(0).toUpperCase() + props.category.slice(1)
        ].join(' ');
    }

    return (
        <div className={classes.RoundThumbnail}>
            <div className={classes.ThumbnailImage}>
                <img src={props.image} alt="ThumbnailImg" />
            </div>
            <div className={descClasses}>
                <span>{props.text}</span>
            </div>
        </div>
    );
}

export default roundThumbnail;