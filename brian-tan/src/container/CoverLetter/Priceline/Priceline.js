import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Priceline.scss'
import Aux from '../../../hoc/Aux/Aux';
import IconList from '../../../component/IconList/IconList';
import RatingBar from '../../../component/RatingBar/RatingBar';

class Priceline extends Component {

    state = {
        date: 'DATE HERE',
        hireReasons: [
            {
                title: 'AWESOME TEAM MEMBER',
                description: 'Team mates give him an exceptional rating of 9.6 / 10',
                iconClassName: 'fas fa-trophy'
            },
            {
                title: 'ASKER OF QUESTIONS',
                description: 'Team mates give him an exceptional rating of 9.6 / 10',
                iconClassName: 'fas fa-trophy'
            },
            {
                title: 'ETERNAL STUDENT',
                description: 'He is constantly learning and absorbing best practices.'
            },
        ]
    }

    componentDidMount () {
        let currentDate = new Date();
        currentDate = currentDate.toString();

        this.setState({
            date: currentDate
        });
    }

    render () {
        return(
            <div className={classes.AppBody}>
                <div className={classes.SmallSearchBar}>
                        <div className={classes.SearchContent}>
                            <div className={classes.Icon}>
                                <i className="fas fa-search" />
                            </div>
                            <div className={classes.SearchMaterial}>
                                <h6>Brian Tan</h6>
                                <span>{this.state.date}</span>
                            </div>
                        </div>
                </div>
                <div className={classes.PricelineContainer}> 
                    <div className={classes.GeneralInformation}>
                        <div className={classes.Details}>
                            <h2>Brian Tan</h2>
                            <div className={classes.VisualDetails}>
                                <div className={classes.StarRating}>
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <div className={classes.HireStatus}>
                                    <span>TOP VIEWED DEVELOPER</span>
                                </div>
                            </div>
                            <h4>Fresh Meadows, Queens NY</h4>
                            <div className={classes.ViewerInfo}>
                                <div className={classes.ViewerIcon}>
                                    <i className="fas fa-users" />
                                </div>
                                <div className={classes.ViewDescription}>
                                    <span>57 other recruiters are looking at this developer</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.CallToAction}>
                            <button>CONTACT</button>
                        </div>
                    </div>
                    <div className={classes.Divider}></div>
                    <div className={classes.DevImages}>
                        <div className={classes.MainImage}>
                            <img src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="main" />
                        </div>
                        <div className={classes.AccessoryImages}>
                            <div className={classes.LocationBox}></div>
                            <div className={classes.MapBox}></div>
                        </div>
                    </div>
                    <div className={classes.DevDetails}>
                        <div className={[classes.DevDetailsSection, classes.Reasons].join(' ')}>
                            <h3>3 Reasons to Hire</h3>
                            <IconList listItems={this.state.hireReasons} />
                        </div>
                        <div className={[classes.DevDetailsSection, classes.About].join(' ')}>
                            <h3>About this Developer</h3>
                            <p>
                                Stop at Daiwa Roynet Hotel Ginza to discover the wonders of Tokyo. 
                                Both business travelers and tourists can enjoy the hotel's facilities and services. 
                                All the necessary facilities, including free Wi-Fi in all rooms, convenience store, laundromat, 24-hour front desk, facilities for disabled guests, are at hand. 
                                Designed for comfort, selected guestrooms offer television LCD/plasma screen, air purifier, complimentary instant coffee, complimentary tea, humidifier to ensure a restful night. 
                                The hotel offers various recreational opportunities. 
                                Daiwa Roynet Hotel Ginza combines warm hospitality with a lovely ambiance to make your stay in Tokyo unforgettable.
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
                    <div className={classes.Divider}></div>
                    <div className={classes.ScoreReviews}>
                        <div className={classes.ScoreBubble}>9.5</div>
                        <div className={classes.Description}>Team Member Score &amp; Reviews</div>
                    </div>
                    <div className={classes.Divider}></div>
                </div>
            </div>
        );
    };
}

export default Priceline;