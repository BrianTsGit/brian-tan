import React from 'react';
import PropTypes from 'prop-types';

import classes from './FeatureItems.scss'
import { featureItemType } from '../../../types/index';
import FeatureItem from './FeatureItem/FeatureItem';

const featureItems = (props) => {

    let featureItems = null;

    if (props.items && props.items.length > 0) {
        featureItems = props.items.map(item => {
            return <FeatureItem key={item._id} item={item} />
        });
    }

    return (
        <div className={classes.FeatureItems}>
            {featureItems}
        </div>
    );
}

featureItems.propTypes = {
    items: PropTypes.arrayOf(featureItemType).isRequired
};

export default featureItems;