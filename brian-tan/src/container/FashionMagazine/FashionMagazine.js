import React, { Component } from 'react';

import classes from './FashionMagazine.scss';
import FashionHeroBanner from '../../component/FashionMagazine/FashionHeroBanner/FashionHeroBanner';
import FeatureItems from '../../component/FashionMagazine/FeatureItems/FeatureItems';
import TitleCardGrid from '../../component/FashionMagazine/TitleCardGrid/TitleCardGrid';

class FashionMagazine extends Component {
    state = {
        banner: {
            image_url: 'https://images.pexels.com/photos/875722/pexels-photo-875722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Editor\'s Pick',
            headline: 'Tips on How You Can Pull Off Denim Year Round.',
            url: 'https://www.gq.com/?us_site=y'
        },
        featureItems: [
            {
                _id: 'item1',
                image_url: 'https://media.gq.com/photos/5b5632b82a69b6291675b11d/1:1/w_80/comic-con-style-2018-lede.jpg',
                text: 'The Best and Wildest Menswear Fits from San Diego Comic-Con 2018',
                url: 'https://www.gq.com/gallery/san-diego-comic-con-2018-style'
            },
            {
                _id: 'item2',
                image_url: 'https://media.gq.com/photos/5b5632b82a69b6291675b11d/1:1/w_80/comic-con-style-2018-lede.jpg',
                text: 'The Best and Wildest Menswear Fits from San Diego Comic-Con 2018',
                url: 'https://www.gq.com/gallery/san-diego-comic-con-2018-style'
            }
        ],
        titleCards: [
            {
                _id: 'titleCard1',
                url: 'https://www.gq.com/story/underrated-exercises-according-to-personal-trainers',
                image_url: 'https://media.gq.com/photos/5b5a2662aa6bf94608b2597c/3:4/w_240/Underrated-Exercises-GQ-2018-072618.jpg',
                category: 'Fitness',
                headline: 'The Gym\'s 3 Most Underrated Exercises, According to Personal Trainers',
                creator: 'CLAY SKIPPER'
            },
            {
                _id: 'titleCard2',
                url: 'https://www.gq.com/story/underrated-exercises-according-to-personal-trainers',
                image_url: 'https://media.gq.com/photos/5b5a2662aa6bf94608b2597c/3:4/w_240/Underrated-Exercises-GQ-2018-072618.jpg',
                category: 'Fitness',
                headline: 'The Gym\'s 3 Most Underrated Exercises, According to Personal Trainers',
                creator: 'CLAY SKIPPER'
            },
            {
                _id: 'titleCard3',
                url: 'https://www.gq.com/story/underrated-exercises-according-to-personal-trainers',
                image_url: 'https://media.gq.com/photos/5b5a2662aa6bf94608b2597c/3:4/w_240/Underrated-Exercises-GQ-2018-072618.jpg',
                category: 'Fitness',
                headline: 'The Gym\'s 3 Most Underrated Exercises, According to Personal Trainers',
                creator: 'CLAY SKIPPER'
            },
            {
                _id: 'titleCard4',
                url: 'https://www.gq.com/story/underrated-exercises-according-to-personal-trainers',
                image_url: 'https://media.gq.com/photos/5b5a2662aa6bf94608b2597c/3:4/w_240/Underrated-Exercises-GQ-2018-072618.jpg',
                category: 'Fitness',
                headline: 'The Gym\'s 3 Most Underrated Exercises, According to Personal Trainers',
                creator: 'CLAY SKIPPER'
            }
        ]
    }

    render () {
        return (
            <div className={classes.FashionMagazine}>
                <div className={classes.LeftRailing}>
                    <FashionHeroBanner banner={this.state.banner} />
                    <FeatureItems items={this.state.featureItems} />
                    <TitleCardGrid titleCards={this.state.titleCards} />
                </div>
                <div className={classes.RightRailing}>

                </div>
            </div>
        );
    }
}

export default FashionMagazine;