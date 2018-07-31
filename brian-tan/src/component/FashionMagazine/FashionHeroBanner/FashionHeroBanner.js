import React from 'react';
import PropTypes from 'prop-types';

import classes from './FashionHeroBanner.scss'

const fashionHeroBanner = (props) => {

    let imageUrl = 'url(' + props.banner.image_url + ')';

    return (
        <div className={classes.FashionHeroBanner}>
            <a href={props.banner.url}>
                <div className={classes.BannerOverlay} />
            </a>
            <div 
                className={classes.HeroImage}
                style={{
                    backgroundImage: imageUrl
                }}>
                {/* utilize <picture> element later for different view port sizes */}
            </div>
            <div className={classes.HeroText}>
                <div className={classes.HeroTextTitle}>{props.banner.title}</div>
                <h1>
                    <a href={props.banner.url}>{props.banner.headline}</a>
                </h1>
            </div>
        </div>
    );
}

fashionHeroBanner.propTypes = {
    banner: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
};

export default fashionHeroBanner;