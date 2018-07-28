import React from 'react';
import PropTypes from 'prop-types';

import classes from './HeadlineFeedItem.scss'
import { headlineFeedItemType } from '../../../../types/index';

const headlineFeedItem = (props) => {

    let feedItemClasses = classes.FeedItem;
    let headlineClasses = classes.FeedHeadline;
    let feedImageClasses = classes.FeedImage;

    if (props.isHero) {
        feedItemClasses = [classes.FeedItem, classes.FeedHero].join(' ');
        headlineClasses = [classes.FeedHeadline, classes.HeroHeadline].join(' ');
        feedImageClasses = [classes.FeedImage, classes.HeroImage].join(' ');
    }

    return (
    <div className={feedItemClasses}>
        <div className={headlineClasses}>
            <a href={props.feedItem.url}>
                <h2>{props.feedItem.headline}</h2>
            </a>
            <span>{props.feedItem.description}</span>
            <div className={classes.Timestamp}>
                <span><i className="fas fa-align-left" /> {props.feedItem.time_published} HOURS AGO</span>
            </div>
        </div>
        <div className={feedImageClasses}>
            <a href={props.feedItem.url}>
                <img src={props.feedItem.image_url} alt="Hero Image" />
            </a>
        </div>
    </div>

    );
}

headlineFeedItem.propTypes = {
    feedItem: headlineFeedItemType
};

export default headlineFeedItem;