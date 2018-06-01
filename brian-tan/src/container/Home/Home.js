import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
import classes from './Home.scss';
import homeBanner from '../../assets/images/heroBanner.jpg';
import Aux from '../../hoc/Aux/Aux';

class Home extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.HeroBanner}>
                    <div className={sharedClasses.Title}>
                        <h1>Mr. Brian Tan</h1>
                        <p>I have some not so important things to say.</p>
                    </div>
                    <img src={homeBanner} alt="HomeBanner" />
                </div>
            </Aux>
        );
    }
}

export default Home;