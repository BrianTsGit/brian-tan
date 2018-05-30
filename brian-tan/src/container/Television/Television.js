import React, { Component } from 'react';

import classes from './Television.scss';
import Aux from '../../hoc/Aux/Aux';
import homeBanner from '../../assets/images/actionFigures.jpg';

class Television extends Component {
    render () {
        return (
            <Aux>
                <div className={classes.HeroBanner}>
                    <div className={classes.Title}>
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