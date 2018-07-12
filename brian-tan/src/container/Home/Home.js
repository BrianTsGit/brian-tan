import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
import classes from './Home.scss';
import { bannerImages } from '../../assets/imageUrls';
import Aux from '../../hoc/Aux/Aux';
import YelpSearch from '../Food/YelpSearch/YelpSearch';
import YelpBusinessGrid from '../Food/YelpBusinessGrid/YelpBusinessGrid';
import SavedRestaurantsMap from '../Food/FoodMap/FoodMap';
import TopRestaurants from '../Food/TopRestaurants/TopRestaurants';

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
                <div className={classes.HitListSection}>
                    <div className={classes.HitListTitle}>
                        <span>Restaurant Bookmarks</span>
                    </div>
                    <YelpSearch />
                    <YelpBusinessGrid />
                </div>
                <SavedRestaurantsMap />
                <TopRestaurants />
            </Aux>
        );
    }
}

export default Home;