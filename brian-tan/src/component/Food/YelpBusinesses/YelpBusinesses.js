import React from 'react';
import PropTypes from 'prop-types';

import classes from './YelpBusinesses.scss';
import { yelpBusinessType } from '../../../types/index';
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
                    item={item}
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

yelpBusinesses.propTypes = {
    showHeader: PropTypes.bool,
    loading: PropTypes.bool,
    items: PropTypes.arrayOf(yelpBusinessType).isRequired,
    clickType: PropTypes.string,
    clickAction: PropTypes.func,
};

export default yelpBusinesses;