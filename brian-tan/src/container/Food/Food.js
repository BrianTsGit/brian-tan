import React, { Component } from 'react';

import sharedClasses from '../../index.scss';
import classes from './Food.scss';
import Aux from '../../hoc/Aux/Aux';
import homeBanner from '../../assets/images/bakery.jpg';
import YelpSearch from './YelpSearch/YelpSearch';
import RestaurantHitList from './RestaurantHitList/RestaurantHitList';

class Food extends Component {
    render () {
        return (
            <Aux>
                <div className={sharedClasses.HeroBanner}>
                    <div className={sharedClasses.Title}>
                        <h1>Foodventures</h1>
                        <p>Look what I'm turning into poop!</p>
                    </div>
                    <img src={homeBanner} alt="HomeBanner" />
                </div>
                <div className={classes.YelpContainer}> 
                    <h2>Restaurant Hit List 🔫</h2>
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