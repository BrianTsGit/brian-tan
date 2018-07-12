import React from 'react';

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
                        image={item.image_url} 
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

// Expects an array of an object that contains: 
// {
//     ._id: String,
//     image_url: String,
//     text: String,
//     category: String (Optional)
// }

export default roundThumbnailSlide;