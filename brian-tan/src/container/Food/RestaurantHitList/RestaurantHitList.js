import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RestaurantHitList.scss';
import * as actions from '../../../store/actions/index';
import YelpResult from '../../../component/Food/YelpResult/YelpResult';

class RestaurantHitList extends Component {
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
        console.log('[onSearchSubmitHandler]', this.state.searchTerm);
        this.props.searchYelp(this.state.searchTerm);
    }

    render () {
        let listItems = null;

        if (this.props.restaurants.length) {
            console.log('in here!');
            listItems = this.props.restaurants.map((res, index) => {
                return (
                    <YelpResult 
                        key={res.id}
                        index={index + 1}
                        name={res.name}
                        img={res.image_url}
                        url={res.url}
                        rating={res.rating}
                        address={res.location.address1} />
                );
            });
        }

        return (
            <div className={classes.RestaurantHitList}>
                <h1>Restaurant Hit List</h1>
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
                    <button><i class="fas fa-search"></i></button>
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
        restaurants: state.restaurants
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchYelp: (searchTerm) => dispatch(actions.searchYelp(searchTerm))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantHitList);