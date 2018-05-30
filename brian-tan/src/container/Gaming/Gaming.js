import React, { Component } from 'react';

import classes from './Gaming.scss';
import Aux from '../../hoc/Aux/Aux';
import homeBanner from '../../assets/images/actionFigures.jpg';

class Gaming extends Component {
    render () {
        return (
            <Aux>
                <div className={classes.HeroBanner}>
                    <div className={classes.Title}>
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