import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
import classes from './Television.scss';
import Aux from '../../hoc/Aux/Aux';
import homeBanner from '../../assets/images/actionFigures.jpg';

class Television extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.HeroBanner}>
                    <div className={sharedClasses.Title}>
                        <h1>Just a Televisionary</h1>
                        <p>What I'm watching these days.</p>
                    </div>
                    <img src={homeBanner} alt="HomeBanner" />
                </div>
            </Aux>
        );
    }
}

export default Television;