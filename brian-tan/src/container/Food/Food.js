import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
import classes from './Food.scss';
import Aux from '../../hoc/Aux/Aux';
import imageUrls from '../../assets/imageUrls';
import YelpSearch from './YelpSearch/YelpSearch';
import RestaurantHitList from './RestaurantHitList/RestaurantHitList';

class Food extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.HeroBanner}>
                    <div className={sharedClasses.Title}>
                        <h1>Foodventures.</h1>
                        <p>Think the "No Reservations" Bourdain.</p>
                    </div>
                    <img src={imageUrls.foodBanner} alt="HomeBanner" />
                </div>
                <div className={classes.YelpContainer}> 
                    <h2>Restaurant Hit List <span role="img" aria-label="image">🔫</span></h2>
                    <div className={classes.YelpItems}>
                        <YelpSearch />
                        <div className={classes.Divider}>------</div>
                        <RestaurantHitList />
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Food;