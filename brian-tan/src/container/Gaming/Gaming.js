import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
import classes from './Gaming.scss';
import Aux from '../../hoc/Aux/Aux';
import homeBanner from '../../assets/images/actionFigures.jpg';

class Gaming extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.HeroBanner}>
                    <div className={sharedClasses.Title}>
                        <h1>Gaming</h1>
                        <p>Damn gaming is different when you get older.</p>
                    </div>
                    <img src={homeBanner} alt="HomeBanner" />
                </div>
            </Aux>
        );
    }
}

export default Gaming;