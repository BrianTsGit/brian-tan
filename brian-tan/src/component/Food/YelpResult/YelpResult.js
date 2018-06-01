import React from 'react';

import classes from './YelpResult.scss';

const yelpResult = (props) => {
    return (
        <div className={classes.YelpResult}>
            <div className={classes.RestaurantImg}>
                <img src={props.img} alt="FoodImage" />
            </div>
            <div className={classes.RestaurantDesc}>
                <div className={classes.GeneralInfo}>
                    <ul>
                        <li>{props.index}. <a href={props.url} target="_blank">{props.name}</a></li>
                        <li>{props.rating} stars / {props.reviewCount} reviews</li>
                        <li>{props.price} {props.categories}</li>
                    </ul>
                </div>
                <div className={classes.Address}>
                    <ul>
                        <li>City</li>
                        <li>{props.address}</li>
                    </ul>
                </div>
                <div className={classes.Review}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas dictum ex odio, eget sodales felis dignissim id. 
                        Vivamus lacinia scelerisque lacinia...
                    </p>
                </div>
            </div>
            <div className={classes.AddButton} onClick={props.saveRestaurant}>+</div>
        </div>
    );
}

export default yelpResult;