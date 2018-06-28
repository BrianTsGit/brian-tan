import React from 'react';

import classes from './RoundThumbnailSlide.scss';
import RoundThumbnail from '../RoundThumbnail/RoundThumbnail';

const roundThumbnailSlide = (props) => {
    let thumbnails = null;

    if (props.items.length) {
        thumbnails = props.items.map(item => {
            return (
                <RoundThumbnail 
                    key={item._id}
                    image={item.image_url} 
                    text={item.text} />
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

export default roundThumbnailSlide;