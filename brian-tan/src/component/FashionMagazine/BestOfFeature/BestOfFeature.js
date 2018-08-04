import React from 'react';
import PropTypes from 'prop-types';

import classes from './BestOfFeature.scss'
import { titleCardType } from '../../../types/index';
import BestOfCard from './BestOfCard/BestOfCard';
 
const bestOfFeature = (props) => {

    let bestOfCards = null;

    if (props.bestOfCards.length > 0) {
        bestOfCards = props.bestOfCards.map(card => {
            return <BestOfCard key={card._id} bestOfCard={card} />
        });
    }

    return (
        <div className={classes.BestOfFeature}>
            <a href={props.hero_url} className={classes.BestOfHeroImageLink}>
                <div className={classes.BestOfHeroImage}>
                    <img src={props.hero_image} alt="Hero Image"/>
                    <div className={classes.BestOfHeroText}>
                        <h2>Best of</h2>
                        <span>View More <i className="far fa-arrow-alt-circle-right" /></span>
                    </div>
                </div>
            </a>
            <div className={classes.FeatureStories}>
                {bestOfCards}
            </div>
        </div>

    );
}

bestOfFeature.propTypes = {
    hero_image: PropTypes.string.isRequired,
    hero_url: PropTypes.string.isRequired,
    bestOfCards: PropTypes.arrayOf(titleCardType).isRequired
};

export default bestOfFeature;