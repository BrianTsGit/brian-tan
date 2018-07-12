import React from 'react';
import PropTypes from 'prop-types';

import classes from './RoundThumbnailSlide.scss';
import RoundThumbnail from '../RoundThumbnail/RoundThumbnail';

const roundThumbnailSlide = (props) => {
    let thumbnails = null;

    if (props.items.length) {
        thumbnails = props.items.map(item => {
            return (
                <div key={item._id + '_wrapper'} className={classes.ThumbnailWrapper}>
                    <RoundThumbnail 
                        key={item._id}
                        image_url={item.image_url} 
                        text={item.text}
                        category={item.category} />
                </div>
            );
        });
    }

    return (        
        <div className={classes.RoundThumbnailSlide}>
            <div className={classes.ThumbnailContainer}>
                {thumbnails}
            </div>
        </div>
    );
}

roundThumbnailSlide.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        image_url: PropTypes.string,
        text: PropTypes.string,
        category: PropTypes.string
    }))
};

export default roundThumbnailSlide;