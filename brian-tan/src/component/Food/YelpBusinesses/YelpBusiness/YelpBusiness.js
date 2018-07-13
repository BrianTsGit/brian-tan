import React from 'react';
import PropTypes from 'prop-types';

import classes from './YelpBusiness.scss';
import { yelpBusinessType } from '../../../../types/index';

const yelpBusiness = (props) => {
    return (
        <div className={classes.YelpBusiness}>
            <a href={props.item.url} target="_blank">
                <div className={classes.BusinessImage}>
                    <div className={classes.ImageOverlay}></div>
                    <span>
                        {props.item.name}
                        <br />
                        {props.item.price}
                    </span>
                    <img src={props.item.image_url} alt="FoodImage" />
                </div>
            </a>
            <div className={classes.BusinessDesc}>
                <ul>
                    <li>{props.item.location.address1 + ', ' + props.item.location.city}</li>
                    <li>{props.item.rating} stars w/ {props.item.review_count} reviews</li>
                </ul>
            </div>
            <div className={[classes.ActionButton, classes[props.clickType]].join(' ')} 
                onClick={props.clicked}>
                {props.clickType === 'Save' ? <i className="far fa-bookmark"></i> : <i className="far fa-trash-alt"></i>}
            </div>
        </div>
    );
}

yelpBusiness.propTypes = {
    item: yelpBusinessType.isRequired,
    clickType: PropTypes.string,
    clicked: PropTypes.func
};

export default yelpBusiness;