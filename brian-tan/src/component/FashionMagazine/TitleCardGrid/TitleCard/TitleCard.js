import React from 'react';
import PropTypes from 'prop-types';

import classes from './TitleCard.scss'
import { titleCardType } from '../../../../types/index';

const titleCard = (props) => {

    let titleCardClasses = [classes.TitleCard, classes.Large].join(' ');

    if (props.small) {
        titleCardClasses = [classes.TitleCard, classes.Small].join(' ');
    }

    return (
        <div className={titleCardClasses}>
            <a href={props.titleCard.url} className={classes.CardImageLink}>
                <div className={classes.CardImage}>
                    <img src={props.titleCard.image_url} alt="Title Card Image" />
                </div>
                <div className={classes.CardCategory}>
                    <span>{props.titleCard.category}</span>
                </div>
            </a>
            <div className={classes.CardDescription}>
                <div className={classes.CardCategory}>
                    <span>{props.titleCard.category}</span>
                </div>
                <div className={classes.CardHeadline}>
                    <a href={props.titleCard.url}>
                        <h2>{props.titleCard.headline}</h2>
                    </a>
                </div>
                <div className={classes.StoryCredit}>
                    <span><i className="fas fa-align-left"/>BY {props.titleCard.creator.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
}

titleCard.propTypes = {
    titleCard: titleCardType
};

export default titleCard;