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
                category: 'Really Long Category',
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
                    <div className={classes.HeadlineFeed}>
                        <div className={classes.FeedHeader}>
                            <span className={classes.Date}>
                                JULY 27, 2018
                            </span>
                        </div>
                        <div className={[classes.FeedItem, classes.FeedHero].join(' ')}>
                            <div className={[classes.FeedHeadline, classes.HeroHeadline].join(' ')}>
                                <h2>The Star Wars: Episode XI Cast is Full of Big Surprises</h2>
                                <span>Welcome back, Lando and... Luke?</span>
                                <div className={classes.Timestamp}>
                                    <span><i className="fas fa-align-left" /> 2 HOURS AGO</span>
                                </div>
                            </div>
                            <div className={[classes.FeedImage, classes.HeroImage].join(' ')}>
                                <img src="https://media.gq.com/photos/5b5b8a2d0c61df5a7d2e2ed4/1:1/w_120/starwars-episode-iX-cast-announcement-gq.jpg" alt="Hero Image" />
                            </div>
                        </div>
                        <div className={classes.FeedItem}>
                            <div className={classes.FeedImage}>
                                <img src="https://media.gq.com/photos/5b5b7cac821b2c6074eaeb9d/1:1/w_80/Stop-Oily-Skin-GQ-July-2018-072718-3x2.jpg" alt="Feed Item Image" />
                            </div>
                            <div className={classes.FeedHeadline}>
                                <h2>How to Fix Greasy Skin So Your Face Doesn't Shine in Photos</h2>
                                <span>It's actually not as hard as you think</span>
                                <div className={classes.Timestamp}>
                                    <span><i className="fas fa-align-left" /> 2 HOURS AGO</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.FeedItem}>
                            <div className={classes.FeedImage}>
                                <img src="https://media.gq.com/photos/5b5b7cac821b2c6074eaeb9d/1:1/w_80/Stop-Oily-Skin-GQ-July-2018-072718-3x2.jpg" alt="Feed Item Image" />
                            </div>
                            <div className={classes.FeedHeadline}>
                                <h2>How to Fix Greasy Skin So Your Face Doesn't Shine in Photos</h2>
                                <span>It's actually not as hard as you think</span>
                                <div className={classes.Timestamp}>
                                    <span><i className="fas fa-align-left" /> 2 HOURS AGO</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.FeedItem}>
                            <div className={classes.FeedImage}>
                                <img src="https://media.gq.com/photos/5b5b7cac821b2c6074eaeb9d/1:1/w_80/Stop-Oily-Skin-GQ-July-2018-072718-3x2.jpg" alt="Feed Item Image" />
                            </div>
                            <div className={classes.FeedHeadline}>
                                <h2>How to Fix Greasy Skin So Your Face Doesn't Shine in Photos</h2>
                                <span>It's actually not as hard as you think</span>
                                <div className={classes.Timestamp}>
                                    <span><i className="fas fa-align-left" /> 2 HOURS AGO</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.FeedFooter}>
                            <span>View More Posts<i className="fas fa-arrow-right" /></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FashionMagazine;