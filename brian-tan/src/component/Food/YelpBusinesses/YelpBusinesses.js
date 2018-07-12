import React from 'react';

import classes from './YelpBusinesses.scss';
import YelpBusiness from './YelpBusiness/YelpBusiness';
import * as actions from '../../../store/actions/index';
import Aux from '../../../hoc/Aux/Aux';
import Loader from '../../../component/UI/Loader/Loader';

const yelpBusinesses = (props) => {
    let yelpResults = <p>{props.placeholder}</p>;
    
    if (props.loading) {
        yelpResults = (
            <div className={classes.LoaderArea}>
                <Loader />
            </div>
        );
    } else if (props.items && props.items.length) {
        yelpResults = props.items.map((item, index) => {
            return (
                <YelpBusiness 
                    key={item.yelp_id}
                    index={index + 1}
                    name={item.name}
                    img={item.image_url}
                    url={item.url}
                    reviewCount={item.review_count}
                    rating={item.rating}
                    price={item.price}
                    categories={item.categories}
                    city={item.location.city}
                    address={item.location.address1}
                    clickType={props.clickType}
                    clicked={() => props.clickAction(item)} />
            )
        });
    }

    let header = null;

    if (props.showHeader) {
        header = (
            <div className={classes.Header}>
                {props.headerText}
            </div>
        );
    }
    
    return (
        <div className={classes.YelpBusinesses}>
            {header}
            <div className={classes.YelpItems}>
                {yelpResults}
            </div>
        </div>
    );
}

export default yelpBusinesses;