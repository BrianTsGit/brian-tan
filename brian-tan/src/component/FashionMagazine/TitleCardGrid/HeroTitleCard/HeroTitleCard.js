import React from 'react';
import PropTypes from 'prop-types';

import classes from './HeroTitleCard.scss'
import { titleCardType } from '../../../../types/index';

const heroTitleCard = (props) => {

    let imageUrl = 'url(' + props.heroTitleCard.image_url + ')';

    return (
        <div className={classes.HeroTitleCard}>
            <a className={classes.HeroImageLink} href={props.heroTitleCard.url}>
                <div className={classes.HeroImage}>
                    <img src={props.heroTitleCard.image_url} alt="Hero Image" />
                    <div className={classes.TitleCardCategory}>
                        <span>{props.heroTitleCard.category}</span>
                    </div>
                    <div className={classes.HeroImageText}>
                        <div className={classes.HeroImageCategory}>
                            <span>{props.heroTitleCard.category}</span>
                        </div>
                        <h1>{props.heroTitleCard.headline}</h1>
                    </div>
                </div>
            </a>
            <div className={classes.HeroHeadline}>
                <a href={props.heroTitleCard.url}>
                    <h2>{props.heroTitleCard.headline}</h2>
                </a>
            </div>
        </div>
    );
}

heroTitleCard.propTypes = {
    heroTitleCard: titleCardType
};

export default heroTitleCard;