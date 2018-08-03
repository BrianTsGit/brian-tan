import React from 'react';
import PropTypes from 'prop-types';

import classes from './RecommendationItem.scss'
import { recommendationItemType } from '../../../../types/index';

const recommendationItem = (props) => {

    let itemClasses = classes.RecommendationItem;

    if (props.recommendation.isActive) {
        itemClasses = [classes.RecommendationItem, classes.ActiveItem].join(' ');
    }

    return (
        <div className={itemClasses}>
            {/* <picture>
                <source srcSet={} />
                <source srcSet={} />
                <img alt="Recommendation Item Image" />
            </picture> */}
            <img src={props.recommendation.image_url} alt="Recommendation Item Image" />
            <div className={classes.ItemText}>
                <h2>Your New Favorite Shop.</h2>
                <span>Show me {props.recommendation.category}<i className="far fa-arrow-alt-circle-right"></i></span>
            </div>
        </div>

    );
}

recommendationItem.propTypes = {
    recommendation: recommendationItemType
};

export default recommendationItem;