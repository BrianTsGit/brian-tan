import React, { Component } from 'react';

import classes from './FashionMagazine.scss';
import { fashionMagazineData } from '../../assets/data';
import FashionHeroBanner from '../../component/FashionMagazine/FashionHeroBanner/FashionHeroBanner';
import FeatureItems from '../../component/FashionMagazine/FeatureItems/FeatureItems';
import TitleCardGrid from '../../component/FashionMagazine/TitleCardGrid/TitleCardGrid';
import HeadlineFeed from '../../component/FashionMagazine/HeadlineFeed/HeadlineFeed';

class FashionMagazine extends Component {
    state = fashionMagazineData;

    render () {
        return (
            <div className={classes.FashionMagazine}>
                <div className={classes.LeftRailing}>
                    <FashionHeroBanner banner={this.state.banner} />
                    <FeatureItems items={this.state.featureItems} />
                    <TitleCardGrid titleCards={this.state.titleCards} />
                </div>
                <div className={classes.RightRailing}>
                    <HeadlineFeed feedItems={this.state.headlineFeedItems} />
                </div>
            </div>
        );
    }
}

export default FashionMagazine;