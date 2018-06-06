import React from 'react';
import { connect } from 'react-redux';

import classes from './YelpResults.scss';
import YelpResult from './YelpResult/YelpResult';
import * as actions from '../../../store/actions/index';

const yelpResults = (props) => {

    const onSaveRestaurantHandler = (res) => {
        const formattedRestaurant = {
            yelp_id: res.yelp_id,
            name: res.name,
            image_url: res.image_url,
            url: res.url,
            price: res.price,
            rating: res.rating,
            review_count: res.review_count,
            location: res.location,
            categories: res.categories
        };

        props.saveRestaurant(formattedRestaurant);
    }

    const onRemoveRestaurantHandler = (res) => {
        props.deleteRestaurant(res.yelp_id);
    }

    const onClickHandler = (res) => {
        switch (props.clickAction) {
            case 'Save':
                return onSaveRestaurantHandler(res);
            case 'Remove':
                return onRemoveRestaurantHandler(res);
            default:
                return null;
        }
    }

    let yelpResults = <p>{props.placeholder}</p>;
    if (props.loading) {
        yelpResults = (
            <div className={classes.Loader}>
                <i className="fa fa-spinner"></i>
            </div>
        );
    } else if (props.items && props.items.length) {
        yelpResults = props.items.map((item, index) => {
            return (
                <YelpResult 
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
                    clickAction={props.clickAction}
                    clicked={() => onClickHandler(item)} />
            )
        });
    }
    
    return (
        <div className={classes.YelpResults}>
            {yelpResults}
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        saveRestaurant: restaurant => dispatch(actions.saveBusiness(restaurant)),
        deleteRestaurant: id => dispatch(actions.deleteBusiness(id))
    };
}

export default connect(null, mapDispatchToProps)(yelpResults);