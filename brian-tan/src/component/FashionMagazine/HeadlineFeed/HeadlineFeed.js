import React from 'react';
import PropTypes from 'prop-types';

import classes from './HeadlineFeed.scss'
import { headlineFeedItemType } from '../../../types/index';
import HeadlineFeedItem from './HeadlineFeedItem/HeadlineFeedItem';

const headlineFeed = (props) => {

    let feedItems = null;

    if (props.feedItems && props.feedItems.length > 0) {
        feedItems = props.feedItems.map((item, index) => {
            if (index === 0)
                return <HeadlineFeedItem key={item._id} feedItem={item} isHero />;
            else
                return <HeadlineFeedItem key={item._id} feedItem={item} />
        })
    }

    return (
        <div className={classes.HeadlineFeed}>
            <div className={classes.FeedHeader}>
                <span className={classes.Date}>
                    JULY 27, 2018
                </span>
            </div>
            {feedItems}
            <div className={classes.FeedFooter}>
                <a href="/ga-magazine">
                    <span>View More Posts<i className="fas fa-arrow-right" /></span>
                </a>
            </div>
        </div>
    );
}

headlineFeed.propTypes = {
    feedItems: PropTypes.arrayOf(headlineFeedItemType)
};

export default headlineFeed;