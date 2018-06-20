import React from 'react';

import classes from './FallenSnowmanBanner.scss';
import { foodBannerImages } from '../../../assets/imageUrls';

const fallenSnowmanBanner = (props) => {
    return (
        <div className={classes.FallenSnowmanBanner}>
            <div className={classes.ImageContainer}>
                <div className={classes.BannerImage}>
                    <img src={props.icons.icon1} />
                </div>
                <div className={[classes.BannerImage, classes.ImageMedium].join(' ')}>
                    <img src={props.icons.icon2} />
                </div>
                <div className={[classes.BannerImage, classes.ImageSmall].join(' ')}>
                    <img src={props.icons.icon3} />
                </div>
                <div className={[classes.BannerImage, classes.ImageSmaller].join(' ')}>
                    <img src={props.icons.icon4} />
                </div>
                <div className={[classes.BannerImage, classes.ImageSmallest].join(' ')}>
                    <img src={props.icons.icon5} />
                </div>
            </div>
            <div className={classes.BannerTitle}>
                <span>{props.header}</span>
            </div>
        </div>
    );
}

export default fallenSnowmanBanner; 