import React from 'react';
import PropTypes from 'prop-types';

import classes from './DevDetails.scss'
import IconList from '../../IconList/IconList';
import RatingBar from '../../RatingBar/RatingBar';

const devDetails = (props) => {

    return (
        <div className={classes.DevDetails}>
            <div className={[classes.DevDetailsSection, classes.Reasons].join(' ')}>
                <h3>3 Reasons to Hire</h3>
                <IconList listItems={props.hireReasons} />
            </div>
            <div className={[classes.DevDetailsSection, classes.About].join(' ')}>
                <h3>About this Developer</h3>
                <p>
                    Ideally located in the suburbs of New York City, Brian Tan is a skilled developer that promises to bring productivity and creativity to all
                    types of team dynamics and industries of business.
                    Brian comes fully equipped with over 2 years of software development experience with expertise spanning the entire web stack.
                    He has worked in a variety of different teams and worn many different hats as a consultant for four different companies.
                    With Brian, responsive frontend designs and lean backend services are all inclusive. Brian even has extensive
                    experience creating and managing relational and non-relational databases. Book fast! He has been known to go fast.
                </p>
            </div>
            <div className={[classes.DevDetailsSection, classes.Rating].join(' ')}>
                <div className={classes.ScoreRating}>
                    <div className={classes.ScoreBubble}>9.5</div>
                    <div className={classes.Text}><span>Employer Rating</span></div>
                </div>
                <RatingBar criteria="Overall Score" rating={9.5} large />
                <div className={classes.RatingNote}>
                    <span>Score breakdown (based on 9 reviews)</span>
                </div>
                <RatingBar criteria="PROFESSIONALISM" rating={9.7}  />
                <RatingBar criteria="EXPERTISE" rating={9.2}  />
                <RatingBar criteria="COOPERATION" rating={9.7}  />
                <div className={classes.RatingNote}>
                    <span>All ratings are most likely verified</span>
                </div>
            </div>
        </div>
    );
}

export default devDetails;