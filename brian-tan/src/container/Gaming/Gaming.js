import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
//import classes from './Gaming.scss';
import Aux from '../../hoc/Aux/Aux';
import imageUrls from '../../assets/imageUrls';
import Placeholder from '../../component/UI/Placeholder/Placeholder';

class Gaming extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.HeroBanner}>
                    <div className={sharedClasses.Title}>
                        <h1>Gaming.</h1>
                        <p>Most likely very little Nintendo here.</p>
                    </div>
                    <img src={imageUrls.gamingBanner} alt="HomeBanner" />
                </div>
                <Placeholder />
            </Aux>
        );
    }
}

export default Gaming;