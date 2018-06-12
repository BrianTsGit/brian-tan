import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
//import classes from './Television.scss';
import Aux from '../../hoc/Aux/Aux';
import imageUrls from '../../assets/imageUrls';
import Placeholder from '../../component/UI/Placeholder/Placeholder';

class Television extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.HeroBanner}>
                    <div className={sharedClasses.Title}>
                        <h1>TV Guide.</h1>
                        <p>What I'm watching these days.</p>
                    </div>
                    <img src={imageUrls.televisionBanner} alt="HomeBanner" />
                </div>
                <Placeholder />
            </Aux>
        );
    }
}

export default Television;