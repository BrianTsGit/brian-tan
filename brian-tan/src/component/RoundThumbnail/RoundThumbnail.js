import React from 'react';
import PropTypes from 'prop-types';

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
                <img src={props.image_url} alt="ThumbnailImg" />
            </div>
            <div className={descClasses}>
                <span>{props.text}</span>
            </div>
        </div>
    );
}

roundThumbnail.propTypes = {
    image_url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string
};

export default roundThumbnail;