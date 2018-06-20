import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
//import classes from './Home.scss';
import { bannerImages } from '../../assets/imageUrls';
import Aux from '../../hoc/Aux/Aux';
import Placeholder from '../../component/UI/Placeholder/Placeholder';

class Home extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.HeroBanner}>
                    <div className={sharedClasses.Title}>
                        <h1>Brian Tan</h1>
                        <p>Personal site of Brian Tan</p>
                    </div>
                    <img src={bannerImages.homeBanner} alt="HomeBanner" />
                </div>
                <Placeholder />
            </Aux>
        );
    }
}

export default Home;