import React from 'react';

import classes from './YelpBusiness.scss';

const yelpBusiness = (props) => {
    return (
        <div className={classes.YelpBusiness}>
            <a href={props.url} target="_blank">
                <div className={classes.BusinessImage}>
                    <div className={classes.ImageOverlay}></div>
                    <span>
                        {props.name}
                        <br />
                        {props.price}
                    </span>
                    <img src={props.img} alt="FoodImage" />
                </div>
            </a>
            <div className={classes.BusinessDesc}>
                <ul>
                    <li>{props.address + ', ' + props.city}</li>
                    <li>{props.rating} stars w/ {props.reviewCount} reviews</li>
                </ul>
            </div>
            <div className={[classes.ActionButton, classes[props.clickType]].join(' ')} 
                onClick={props.clicked}>
                {props.clickType === 'Save' ? <i className="far fa-bookmark"></i> : <i className="far fa-trash-alt"></i>}
            </div>
        </div>
    );
}

export default yelpBusiness;