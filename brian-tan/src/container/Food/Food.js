import React, { Component } from 'react';

import classes from './Food.scss';
import Aux from '../../hoc/Aux/Aux';
import homeBanner from '../../assets/images/bakery.jpg';
import RestaurantHitList from './RestaurantHitList/RestaurantHitList';

class Food extends Component {
    render () {
        return (
            <Aux>
                <div className={classes.HeroBanner}>
                    <div className={classes.Title}>
                        <h1>Foodventures</h1>
                        <p>Look what I'm turning into poop!</p>
                    </div>
                    <img src={homeBanner} alt="HomeBanner" />
                </div>
                <RestaurantHitList />
            </Aux>
        );
    }
}

export default Food;