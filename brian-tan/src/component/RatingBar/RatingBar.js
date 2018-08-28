import React from 'react';
import PropTypes from 'prop-types';

import classes from './RatingBar.scss'

const ratingBar = (props) => {
    let processRating = (rating) => {
        if (rating > 10) return '100%';
        if (rating <= 0) return '0%';

        let percentage = (props.rating * 10).toPrecision(2);
        console.log(percentage);
        return percentage.toString() + '%';
    }

    let barFillStyle = {
        width: processRating(props.rating)
    };

    let ratingBarClasses = classes.RatingBar;

    if (props.large)
        ratingBarClasses += ' ' + classes.Large;

    return (
        <div className={ratingBarClasses}>
            <div className={classes.Description}>
                <div className={classes.Criteria}>
                    <span>{props.criteria}</span>
                </div>
                <div className={classes.Rating}>
                    <span>{props.rating}</span>
                </div>
            </div>
            <div className={classes.Bar}>
                <div className={classes.BarFill} style={barFillStyle}></div>
            </div>
        </div>

    );
}

ratingBar.propTypes = {
    criteria: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    large: PropTypes.bool
};

export default ratingBar;