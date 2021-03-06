import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './Priceline.scss'
import Aux from '../../../hoc/Aux/Aux';
import SearchBar from '../../../component/Priceline/SearchBar/SearchBar';
import DetailedSearchBar from '../../../component/Priceline/DetailedSearchBar/DetailedSearchBar';
import DevDetails from '../../../component/Priceline/DevDetails/DevDetails';
import MapContainer from '../../MapContainer/MapContainer';

class Priceline extends Component {

    state = {
        date: 'DATE HERE',
        location: {
            coordinates: {
                longitude: -73.7801,
                latitude: 40.7335
            },
            center: {
                lng: -73.7781,
                lat: 40.6413
            }
        },
        hireReasons: [
            {
                title: 'EXPERIENCED WEB DEVELOPER',
                description: 'Skilled with Javascript and ES6 features as well as AngularJS and React/Redux frameworks. Has many previous experiences building RESTful APIs in Node and .NET frameworks.',
                iconClassName: 'fas fa-desktop'
            },
            {
                title: 'GREAT EYE FOR DETAIL',
                description: 'Builds responsive designs that adapt to all device sizes with close attention to mockups.',
                iconClassName: 'fas fa-eye'
            },
            {
                title: 'TEAM PLAYER',
                description: 'Always ready to talk through a solution with others and does not hesitate to reach out for help.',
                iconClassName: 'fas fa-handshake'
            },
        ]
    }

    componentDidMount () {
        let currentDate = new Date();
        currentDate = currentDate.toString().substring(0, 10);

        this.setState({
            date: currentDate
        });
    }

    render () {
        return(
            <div className={classes.AppBody}>
                <SearchBar term="Brian Tan" filter={this.state.date} />
                <DetailedSearchBar term="Brian Tan" filter={this.state.date} />
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
                                    <i className="fas fa-level-up-alt" /><span>TOP VIEWED DEVELOPER</span>
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
                            <NavLink to="/">
                                <button className={classes.ActionButton}><span>Contact</span></button>
                            </NavLink>
                        </div>
                    </div>
                    <div className={classes.Divider}></div>
                    <div className={classes.DevImages}>
                        <div className={classes.MainImage}>
                            <img src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="main" />
                        </div>
                        <div className={classes.AccessoryImages}>
                            <div className={classes.LocationBox}>
                                <span>Your hire is in: <strong>Queens NY</strong></span>
                            </div>
                            <div className={classes.MapBox}>
                                <MapContainer locations={[this.state.location]} initialCenter={this.state.location.center}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.LongDivider}><div className={classes.Fill}></div></div>
                    <DevDetails hireReasons={this.state.hireReasons} />
                    <div className={classes.Divider}></div>
                    <div className={classes.LongDivider}><div className={classes.Fill}></div></div>
                    <div className={classes.ScoreReviews}>
                        <div className={classes.ScoreBubble}>9.5</div>
                        <div className={classes.Description}>Team Member Score &amp; Reviews</div>
                    </div>
                    <div className={classes.Divider}></div>
                    <div className={classes.Note}>
                        <span> 
                            * Page is mobile responsive. Code can be found&nbsp;
                            <a href="https://github.com/BrianTsGit/brian-tan/tree/master/brian-tan" target="_blank">
                                here
                            </a>
                            .
                        </span>
                    </div>
                </div>
            </div>
        );
    };
}

export default Priceline;