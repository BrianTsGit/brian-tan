import React, { Component } from 'react';

import classes from './FashionMagazine.scss';
import FashionHeroBanner from '../../component/FashionMagazine/FashionHeroBanner/FashionHeroBanner';
import FeatureItems from '../../component/FashionMagazine/FeatureItems/FeatureItems';

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
        ]
    }

    render () {
        return (
            <div className={classes.FashionMagazine}>
                <div className={classes.LeftRailing}>
                    <FashionHeroBanner banner={this.state.banner} />
                    <FeatureItems items={this.state.featureItems} />
                    <div>
                        <div className={classes.TitleCard}></div>
                        <div className={classes.TitleCard}></div>
                        <div className={classes.TitleCard}></div>
                        <div className={classes.TitleCard}></div>
                        <div className={classes.TitleCard}></div>
                    </div>
                </div>
                <div className={classes.RightRailing}>

                </div>
            </div>
        );
    }
}

export default FashionMagazine;