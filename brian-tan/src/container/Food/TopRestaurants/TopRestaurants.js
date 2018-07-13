import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './TopRestaurants.scss';
import * as actions from '../../../store/actions/index';
import Loader from '../../../component/UI/Loader/Loader';
import RoundThumbnailCarousel from '../../RoundThumbnailCarousel/RoundThumbnailCarousel';

export class TopRestaurants extends Component {

    componentDidMount () {
        //we probably need a better way to test this condition
        if (!this.props.topRestaurants.length) {
            this.props.getTopRestaurants();
        }
    }

    componentDidUpdate (prevProps, prevState) {

    }

    render () {
        let carousel = (
            <div className={classes.Message}>
                <span>There is nothing here. I should really get out more.</span>
            </div>
        );

        if (this.props.loadingTopRestaurants) {
            carousel = (
                <div className={classes.LoaderArea}>
                    <Loader />
                </div>
            );
        } else if (this.props.topRestaurants && this.props.topRestaurants.length) {
            const restaurantThumbnails = this.props.topRestaurants.map(res => {
                return {
                    ...res,
                    text: res.name
                };
            });

            carousel = <RoundThumbnailCarousel slideItems={restaurantThumbnails} />;
        }
        
        return (
            <div className={classes.TopRestaurants}>
                <div className={classes.TopRestaurantsTitle}>
                    <span>Favorites Eats of 2018</span>
                </div>
                {carousel}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadingTopRestaurants: state.food.loadingTopRestaurants,
        topRestaurants: state.food.topRestaurants
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTopRestaurants: () => dispatch(actions.getTopRestaurants())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRestaurants); 