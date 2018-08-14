import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
import classes from './Food.scss';
import Aux from '../../hoc/Aux/Aux';
import { foodBannerImages } from '../../assets/imageUrls';
import YelpSearch from './YelpSearch/YelpSearch';
import YelpBusinessGrid from './YelpBusinessGrid/YelpBusinessGrid';
import Map from './FoodMap/FoodMap';
import FallenSnowmanBanner from '../../component/BannerTemplates/FallenSnowmanBanner/FallenSnowmanBanner';
import TopRestaurants from './TopRestaurants/TopRestaurants';

class Food extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.Banner}>
                    <FallenSnowmanBanner 
                        icons={foodBannerImages}
                        header="The Food Journal." />
                </div>
                <div className={classes.HitListSection}>
                    <div className={classes.HitListTitle}>
                        <span>Restaurant Bookmarks</span>
                    </div>
                    <YelpSearch />
                    <YelpBusinessGrid />
                </div>
                <Map />
                <TopRestaurants />
            </Aux>
        );
    }
}

export default Food;