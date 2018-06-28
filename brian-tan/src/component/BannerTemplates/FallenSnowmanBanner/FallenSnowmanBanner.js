import React from 'react';

import classes from './FallenSnowmanBanner.scss';

const fallenSnowmanBanner = (props) => {
    return (
        <div className={classes.FallenSnowmanBanner}>
            <div className={classes.ImageContainer}>
                <div className={classes.BannerImage}>
                    <img src={props.icons.icon1} alt="BannerImage" />
                </div>
                <div className={[classes.BannerImage, classes.ImageMedium].join(' ')}>
                    <img src={props.icons.icon2} alt="BannerImage" />
                </div>
                <div className={[classes.BannerImage, classes.ImageSmall].join(' ')}>
                    <img src={props.icons.icon3} alt="BannerImage" />
                </div>
                <div className={[classes.BannerImage, classes.ImageSmaller].join(' ')}>
                    <img src={props.icons.icon4} alt="BannerImage" />
                </div>
                <div className={[classes.BannerImage, classes.ImageSmallest].join(' ')}>
                    <img src={props.icons.icon5} alt="BannerImage" />
                </div>
            </div>
            <div className={classes.BannerTitle}>
                <span>{props.header}</span>
            </div>
        </div>
    );
}

export default fallenSnowmanBanner; 