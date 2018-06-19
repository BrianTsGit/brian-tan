import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
import classes from './Food.scss';
import Aux from '../../hoc/Aux/Aux';
import imageUrls from '../../assets/imageUrls';
import YelpSearch from './YelpSearch/YelpSearch';
import YelpSearchResults from './YelpSearchResults/YelpSearchResults';
import RestaurantHitList from './RestaurantHitList/RestaurantHitList';
import YelpBusinessGrid from './YelpBusinessGrid/YelpBusinessGrid';
import Map from './FoodMap/FoodMap';

class Food extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.HeroBanner}>
                    <div className={sharedClasses.Title}>
                        <h1>Foodventures.</h1>
                        <p>The Food Part of the Website.</p>
                    </div>
                    <img src={imageUrls.foodBanner} alt="HomeBanner" />
                </div>

                <div className={classes.HitListSection}>
                    {/* <h3 className={classes.HitListTitle}>Restaurant Bookmarks</h3> */}
                    <div className={classes.SearchSection}>
                        <YelpSearch />
                    </div>
                    <YelpBusinessGrid />

                    {/* <div className={classes.YelpItems}>
                        <YelpSearchResults />
                        <RestaurantHitList />
                    </div> */}
                </div>

                <Map />
            </Aux>
        );
    }
}

export default Food;