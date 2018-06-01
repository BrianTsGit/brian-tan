import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './YelpSearch.scss';
import * as actions from '../../../store/actions/index';
import YelpResult from '../../../component/Food/YelpResult/YelpResult';
import yelpLogo from '../../../assets/images/yelpLogo.png';


class YelpSearch extends Component {
    state = {
        yelpSearchForm: {
            searchTerm: '',
            location: ''
        }
    };

    onChangeInputHandler = (event, identifier) => {
        const updatedForm = {...this.state.yelpSearchForm};
        updatedForm[identifier] = event.target.value;

        this.setState({yelpSearchForm: updatedForm});
    }

    onSearchSubmitHandler = (event) => {
        event.preventDefault();
        this.props.searchYelp(this.state.searchTerm);
    }

    onSaveRestaurantHandler = (res) => {
        const formattedRestaurant = {
            id: res.id,
            name: res.name,
            image_url: res.image_url,
            url: res.url,
            price: res.price,
            rating: res.rating,
            review_count: res.review_count,
            address: res.location.display_address,
            categories: res.categories
        };

        this.props.saveRestaurant(formattedRestaurant);
    }

    render () {
        const searchImgClass = this.props.loadingSearch ? 'fa fa-spinner' : 'fas fa-search';
        let listItems = <p>Search restaurants to add to your hit list.</p>;
        if (this.props.restaurants.length) {
            listItems = this.props.restaurants.map((res, index) => {
                return (
                    <YelpResult 
                        key={res.id}
                        index={index + 1}
                        name={res.name}
                        img={res.image_url}
                        url={res.url}
                        reviewCount={res.review_count}
                        rating={res.rating}
                        price={res.price}
                        categories={res.categories}
                        address={res.location.address1}
                        saveRestaurant={() => this.onSaveRestaurantHandler(res)} />
                );
            });
        }

        return (
            <div className={classes.YelpSearch}>
                <div className={classes.YelpLogo}>
                    <img src={yelpLogo} alt="YelpLogo" />
                </div>
                <form className={classes.YelpForm} onSubmit={this.onSearchSubmitHandler}>
                    <input 
                        type="text" 
                        placeholder="Find" 
                        value={this.state.yelpSearchForm.searchTerm} 
                        onChange={(event) => this.onChangeInputHandler(event, 'searchTerm')} />
                    <input 
                        type="text" 
                        placeholder="Near" 
                        value={this.state.yelpSearchForm.location} 
                        onChange={(event) => this.onChangeInputHandler(event, 'location')} />
                    <button disabled={this.props.loadingSearch}><i className={searchImgClass}></i></button>
                </form>
                <div className={classes.SearchResults}>
                    {listItems}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        loadingSearch: state.loadingSearch
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchYelp: (searchTerm) => dispatch(actions.searchYelp(searchTerm)),
        saveRestaurant: (restaurant) => dispatch(actions.saveRestaurant(restaurant))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(YelpSearch); 