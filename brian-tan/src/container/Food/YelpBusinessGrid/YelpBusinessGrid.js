import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import classes from './YelpBusinessGrid.scss';
import YelpBusinesses from '../../../component/Food/YelpBusinesses/YelpBusinesses';

class YelpBusinessGrid extends Component {
    state = {
        savedTabOpen: true
    }

    componentDidMount () {
        if (!this.props.hitList.length)
            this.props.getHitList();
    }

    onTabChangeHandler = (savedTab) => {
        this.setState({ savedTabOpen: savedTab });
    }

    onSaveRestaurantHandler = (res) => {
        const formattedRestaurant = {
            yelp_id: res.yelp_id,
            name: res.name,
            image_url: res.image_url,
            url: res.url,
            price: res.price,
            rating: res.rating,
            review_count: res.review_count,
            location: res.location,
            categories: res.categories,
            coordinates: res.coordinates
        };

        this.props.saveRestaurant(formattedRestaurant);
    }

    onRemoveRestaurantHandler = (res) => {
        this.props.deleteRestaurant(res.yelp_id);
    }

    render () {
        let tabSection = !this.state.savedTabOpen ? 
            (
                <div className={classes.TabSection}>
                    <YelpBusinesses 
                            items={this.props.businesses} 
                            loading={this.props.loadingSearch}
                            clickType="Save"
                            clickAction={this.onSaveRestaurantHandler}
                            placeholder="Search businesses to add to my list." />
                </div>
            ) :
            (
                <div className={classes.TabSection}>
                    <YelpBusinesses 
                        items={this.props.hitList}
                        loading={this.props.loadingHitList} 
                        clickType="Remove"
                        clickAction={this.onRemoveRestaurantHandler}
                        placeholder="There are no items yet." />
                </div>
            );

        let searchedButtonClasses = classes.TabButton;
        let savedButtonClasses = classes.TabButton;

        if (this.state.savedTabOpen) {
            savedButtonClasses = [classes.TabButton, classes.Active].join(' ');
        } else {
            searchedButtonClasses = [classes.TabButton, classes.Active].join(' ');
        }

        return (
            <div className={classes.YelpBusinessGrid}>
                <div className={classes.YelpItemTabs}>
                    <div className={classes.Tabs}>
                        <div 
                            className={searchedButtonClasses}
                            onClick={() => this.onTabChangeHandler(false)}>
                            <span>SEARCHED</span>
                        </div>
                        <div 
                            className={savedButtonClasses}
                            onClick={() => this.onTabChangeHandler(true)}>
                            <span>SAVED</span>
                        </div>
                    </div>
                    {tabSection}
                </div>

                <div className={classes.YelpItems}>
                    <div className={classes.ItemSection}>
                        <YelpBusinesses 
                                items={this.props.businesses} 
                                loading={this.props.loadingSearch}
                                clickType="Save"
                                clickAction={this.onSaveRestaurantHandler}
                                showHeader
                                headerText="SEARCHED"
                                placeholder="Search businesses to add to my list." />
                    </div>
                    <div className={classes.ItemSection}>
                        <YelpBusinesses 
                            items={this.props.hitList}
                            loading={this.props.loadingHitList} 
                            showHeader
                            headerText="SAVED"
                            clickType="Remove"
                            clickAction={this.onRemoveRestaurantHandler}
                            placeholder="There are no items yet." />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        businesses: state.food.businesses,
        loadingSearch: state.food.loadingSearch,
        hitList: state.food.hitList,
        loadingHitList: state.food.loadingHitList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHitList: () => dispatch(actions.getHitList()),
        saveRestaurant: restaurant => dispatch(actions.saveBusiness(restaurant)),
        deleteRestaurant: id => dispatch(actions.deleteBusiness(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(YelpBusinessGrid);