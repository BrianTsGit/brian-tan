import React from 'react';
import PropTypes from 'prop-types';

import classes from './BestOfCard.scss'
import { titleCardType } from '../../../../types/index';

const bestOfCard = (props) => {

    return (
        <div className={classes.BestOfCard}>
            <a href={props.bestOfCard.url} className={classes.BestOfCardImageLink}>
                <div className={classes.BestOfCardImage}>
                    <img src={props.bestOfCard.image_url} alt="Best Of Card Image" />
                </div>
            </a>
            <div className={classes.BestOfCardDescription}>
                <span>{props.bestOfCard.category}</span>
                <a href={props.bestOfCard.url}>
                    <h2>{props.bestOfCard.headline}</h2>
                </a>
                <div className={classes.StoryCreator}>
                    <span><i className="fas fa-align-left" /> BY {props.bestOfCard.creator}</span>
                </div>
            </div>
        </div>
    );
}

bestOfCard.propTypes = {
    bestOfCard: titleCardType
};

export default bestOfCard;