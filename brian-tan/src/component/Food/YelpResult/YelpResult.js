import React from 'react';

import classes from './YelpResult.scss';

const yelpResult = (props) => {
    return (
        <div className={classes.YelpResult}>
            <div className={classes.RestaurantImg}>
                <img src={props.img} />
            </div>
            <div className={classes.RestaurantDesc}>
                <div className={classes.GeneralInfo}>
                    <ul>
                        <li>{props.index}. <a href={props.url}>{props.name}</a></li>
                        <li>{props.rating} stars</li>
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
                        Vivamus lacinia scelerisque lacinia. Nulla posuere, mi at 
                        luctus tempus, metus turpis consequat neque, et vestibulum ipsum neque quis diam.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default yelpResult;