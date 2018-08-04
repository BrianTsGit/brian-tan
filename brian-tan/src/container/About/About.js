import React, { Component } from 'react';

import classes from './About.scss';
import initials from '../../assets/images/initials.png';

class About extends Component {
    state = {
        showLearnMore: false
    };

    onToggleLearnMoreHandler = () => {
        this.setState(prevState => {
            return {
                showLearnMore: !prevState.showLearnMore
            }
        });
    };

    render () {
        let buttonText = "Click here to learn more.";
        let learnMoreDescription = null;

        if (this.state.showLearnMore) {
            buttonText = "Show less.";
            learnMoreDescription = (
                <p className={classes.LearnMoreDescription}>
                    This site is currently hosted on Heroku and built using the MERN stack (MongoDB / Express / React / Node JS)
                    <br />
                    <br />
                    Drawings done by Amy Li.
                </p>
            );
        }

        return (
            <div className={classes.About}>
                <div className={classes.AboutImage}>
                    <img src={initials} alt="AboutImage" />
                </div>
                <div className={classes.AboutDescription}>
                    <p>
                    My name is Brian and I’m a full stack developer from Queens, NY. When I get 
                    bored and curious enough I create things like sites that use antiquated 
                    fonts. I want to use this site as a playground for learning new skills and recreating
                    designs I admire. Some of my long-term goals include being Chopped Champion, traveling, 
                    getting a six-pack, and becoming a resident of Flavortown.
                    </p>
                </div>
                <div className={classes.LearnMoreButton}>
                    <span 
                        className={classes.ButtonText}
                        onClick={this.onToggleLearnMoreHandler}>
                        {buttonText}</span>
                </div>
                {learnMoreDescription}
            </div>
        );
    } 
}

export default About;