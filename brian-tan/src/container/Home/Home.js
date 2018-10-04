import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Home.scss'
import SocialMediaContacts from '../../component/SocialMediaContacts/SocialMediaContacts';
// import digaaiVideo from '../../assets/videos/digaaiVideo.mp4';
// import foodJournalVideo from '../../assets/videos/foodJournalVideo.mp4';
// import inqueensVideo from '../../assets/videos/inqueensVideo.mp4';

class Home extends Component {
    constructor (props) {
        super(props);

        this.digaaiVidRef = null;
        this.setDigaaiVidRef = element => {
            this.digaaiVidRef = element;
        };

        this.foodJournalVidRef = null;
        this.setFoodJournalVidRef = element => {
            this.foodJournalVidRef = element;
        };

        this.gqMagVidRef = null;
        this.setGqMagVidRef = element => {
            this.gqMagVidRef = element;
        };

        this.priceLineVidRef = null;
        this.setPriceLineVidRef = element => {
            this.priceLineVidRef = element;
        };

        this.activateVideo = this.activateVideo.bind(this);
        this.deactivateVideo = this.deactivateVideo.bind(this);
    }

    state = {
        videosConfig: {
            digaaiVid: {
                isActive: false
            },
            foodJournalVid: {
                isActive: false
            },
            gqMagVid: {
                isActive: false
            },
            priceLineVid: {
                isActive: false
            }
        }
    }

    activateVideo(ref, vidName) {
        let updatedVideosConfig = {...this.state.videosConfig};
        updatedVideosConfig[vidName].isActive = true;

        this.setState({
            videosConfig: updatedVideosConfig
        });

        ref.play();
    }

    deactivateVideo(ref, vidName) {
        let updatedVideosConfig = {...this.state.videosConfig};
        updatedVideosConfig[vidName].isActive = false;

        this.setState({
            videosConfig: updatedVideosConfig
        });

        ref.pause();
    }

    render () {
        let digaaiVideoElement = (
            <div className={classes.ProjectVideo}>
                <video className={this.state.videosConfig.digaaiVid.isActive ? classes.ActiveVideo : null} ref={this.setDigaaiVidRef} loop muted>
                    <source src="https://s3.amazonaws.com/briantan/digaaiVideo.mp4" type="video/mp4" />
                </video>
            </div>
        );

        let foodJournalVideoElement = (
            <div className={classes.ProjectVideo}>
                <video className={this.state.videosConfig.foodJournalVid.isActive ? classes.ActiveVideo : null} ref={this.setFoodJournalVidRef} loop muted>
                    <source src="https://s3.amazonaws.com/briantan/foodJournalVideo.mp4" type="video/mp4" />
                </video>
            </div>
        );

        let gqMagVideoElement = (
            <div className={classes.ProjectVideo}>
                <video className={this.state.videosConfig.gqMagVid.isActive ? classes.ActiveVideo : null} ref={this.setGqMagVidRef} loop muted>
                    <source src="https://s3.amazonaws.com/briantan/gqVideo.mp4" type="video/mp4" />
                </video>
            </div>
        );

        let priceLineVideoElement = (
            <div className={classes.ProjectVideo}>
                <video className={this.state.videosConfig.priceLineVid.isActive ? classes.ActiveVideo : null} ref={this.setPriceLineVidRef} loop muted>
                    <source src="https://s3.amazonaws.com/briantan/pricelineVideo.mp4" type="video/mp4" />
                </video>
            </div>
        );

        return (
            <div className={classes.Home}>
                <div className={classes.VideoLayer}>
                    {digaaiVideoElement}
                    {foodJournalVideoElement}
                    {gqMagVideoElement}
                    {priceLineVideoElement}
                </div>
                <div className={classes.DetailLayer}>
                    <div className={classes.HomeHeader}>
                        <h1 className={classes.HeaderDrop}>BRIAN TAN</h1>
                        <span className={classes.Appear}>Software Developer</span>
                        <div className={classes.Appear}>
                            <SocialMediaContacts />
                        </div>
                    </div>
                    <div className={classes.ProjectContainer + ' ' + classes.Appear}>
                        <h3>Projects</h3>
                        <ul className={classes.ProjectList}>
                            <li>
                                <a 
                                    href="https://digaai.herokuapp.com/" 
                                    target="_blank"
                                    onMouseEnter={() => this.activateVideo(this.digaaiVidRef, 'digaaiVid')}
                                    onMouseLeave={() => this.deactivateVideo(this.digaaiVidRef, 'digaaiVid')}>
                                    digaai
                                </a>
                            </li>
                            <li>
                                <NavLink 
                                    to="/food-journal"
                                    onMouseEnter={() => this.activateVideo(this.foodJournalVidRef, 'foodJournalVid')} 
                                    onMouseLeave={() => this.deactivateVideo(this.foodJournalVidRef, 'foodJournalVid')}>
                                    food journal
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/gq-magazine"
                                    onMouseEnter={() => this.activateVideo(this.gqMagVidRef, 'gqMagVid')} 
                                    onMouseLeave={() => this.deactivateVideo(this.gqMagVidRef, 'gqMagVid')}>
                                    GQ Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/price-line-cover-letter"
                                    onMouseEnter={() => this.activateVideo(this.priceLineVidRef, 'priceLineVid')} 
                                    onMouseLeave={() => this.deactivateVideo(this.priceLineVidRef, 'priceLineVid')}>
                                    Priceline CL
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    };
}

export default Home;