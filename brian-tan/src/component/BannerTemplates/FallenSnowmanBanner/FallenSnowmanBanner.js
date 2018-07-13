import React from 'react';
import PropTypes from 'prop-types';

import classes from './FallenSnowmanBanner.scss';

//This Banner Component takes in an object with 5 image sources and displays them
//as circles with decreasing sizes 

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

fallenSnowmanBanner.propTypes = {
    header: PropTypes.string,
    icons: PropTypes.shape({
        icon1: PropTypes.string,
        icon2: PropTypes.string,
        icon3: PropTypes.string,
        icon4: PropTypes.string,
        icon5: PropTypes.string
    })
}

export default fallenSnowmanBanner; 