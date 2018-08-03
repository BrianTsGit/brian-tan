import React from 'react';
import PropTypes from 'prop-types';

import classes from './LookBookItem.scss'
import { lookBookItemType } from '../../../../types/index';

const lookBookItem = (props) => {

    return (
        <div className={classes.LookBookItem}>
            <div className={classes.ContentItem}>
                <a href={props.lookBookItem.url} className={classes.ContentImageLink}>
                    <div className={classes.ContentImage}>
                        <img src={props.lookBookItem.image_url} alt="Look Book Image" />
                    </div>
                </a>
                <div className={classes.ContentDescription}>
                    <span>{props.lookBookItem.description}</span>
                    <div className={classes.ContentPhotos}>
                        <span><i className="far fa-clone" />{props.lookBookItem.photo_count} PHOTOS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

lookBookItem.propTypes = {
    lookBookItem: lookBookItemType
};

export default lookBookItem;