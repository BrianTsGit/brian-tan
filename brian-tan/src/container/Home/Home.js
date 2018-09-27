import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Home.scss'
import digaaiVideo from '../../assets/videos/digaaiVideo.mp4';
import foodJournalVideo from '../../assets/videos/foodJournalVideo.mp4';

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
                    <source src={digaaiVideo} type="video/mp4" />
                </video>
            </div>
        );

        let foodJournalVideoElement = (
            <div className={classes.ProjectVideo}>
                <video className={this.state.videosConfig.foodJournalVid.isActive ? classes.ActiveVideo : null} ref={this.setFoodJournalVidRef} loop muted>
                    <source src={foodJournalVideo} type="video/mp4" />
                </video>
            </div>
        );

        return (
            <div className={classes.Home}>
                <div className={classes.VideoLayer}>
                    {digaaiVideoElement}
                    {foodJournalVideoElement}
                </div>
                <div className={classes.DetailLayer}>
                    <div className={classes.HomeHeader}>
                        <h1>BRIAN TAN</h1>
                        <span>Software Developer</span>
                    </div>
                    <div className={classes.ProjectContainer}>
                        <h3>Projects</h3>
                        <ul className={classes.ProjectList}>
                            <li>
                                <span onMouseEnter={() => this.activateVideo(this.digaaiVidRef, 'digaaiVid')}
                                    onMouseLeave={() => this.deactivateVideo(this.digaaiVidRef, 'digaaiVid')}>
                                    digaai
                                </span>
                            </li>
                            <li>
                                <span onMouseEnter={() => this.activateVideo(this.foodJournalVidRef, 'foodJournalVid')} 
                                    onMouseLeave={() => this.deactivateVideo(this.foodJournalVidRef, 'foodJournalVid')}>
                                    food journal
                                </span>
                            </li>
                            <li><span>inqueens</span></li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    };
}

export default Home;