import React from 'react';
import PropType from 'prop-types';

import classes from './FeatureItem.scss'
import { featureItemType } from '../../../../types/index';

const featureItem = (props) => {

    return (
        <div className={classes.FeatureItem}>
            <div className={classes.FeatureImage}>
                <a href={props.item.url}>
                    <img src={props.item.image_url} alt="Feature Item Image"/>
                </a>
            </div>
            <div className={classes.FeatureText}>
                <a href={props.item.url}>
                    <span>{props.item.text}</span>
                </a>
            </div>
        </div>
    );
}

featureItem.propTypes = {
    item: featureItemType
};

export default featureItem;