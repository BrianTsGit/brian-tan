import React, { Component } from 'react';

import classes from './FashionMagazine.scss';
import { fashionMagazineData } from '../../assets/data';
import FashionHeroBanner from '../../component/FashionMagazine/FashionHeroBanner/FashionHeroBanner';
import FeatureItems from '../../component/FashionMagazine/FeatureItems/FeatureItems';
import TitleCardGrid from '../../component/FashionMagazine/TitleCardGrid/TitleCardGrid';
import HeadlineFeed from '../../component/FashionMagazine/HeadlineFeed/HeadlineFeed';
import SectionPreviewGrid from '../../component/FashionMagazine/SectionPreviewGrid/SectionPreviewGrid';
import RecommendationEntry from './RecommendationEntry/RecommendationEntry';
import LookBook from '../../component/FashionMagazine/LookBook/LookBook';
import BestOfFeature from '../../component/FashionMagazine/BestOfFeature/BestOfFeature';

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
                <SectionPreviewGrid 
                    sectionPreview={this.state.sectionPreview1.sectionPreview} 
                    titleCards={this.state.sectionPreview1.titleCards} />
                <RecommendationEntry recommendations={this.state.recommendations} />
                <SectionPreviewGrid
                    sectionPreview={this.state.sectionPreview2.sectionPreview}
                    titleCards={this.state.sectionPreview2.titleCards} />
                <BestOfFeature 
                    hero_image={this.state.bestOfContent.hero_image}
                    hero_url={this.state.bestOfContent.hero_url}
                    bestOfCards={this.state.bestOfContent.bestOfStories} />
                <SectionPreviewGrid
                    sectionPreview={this.state.sectionPreview3.sectionPreview}
                    titleCards={this.state.sectionPreview3.titleCards} />
                <LookBook headerTitle="Celebrity Look Books" lookBookItems={this.state.lookBookItems} />
            </div>
        );
    }
}

export default FashionMagazine;