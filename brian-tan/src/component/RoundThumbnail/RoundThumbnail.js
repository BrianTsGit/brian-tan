import React from 'react';

import classes from './RoundThumbnail.scss';

const roundThumbnail = (props) => {

    return (
        <div className={classes.RoundThumbnail}>
            <div className={classes.ThumbnailImage}>
                <img src={props.image} alt="ThumbnailImg" />
            </div>
            <div className={classes.ThumbnailDesc}>
                <span>{props.text}</span>
            </div>
        </div>
    );
}

export default roundThumbnail;