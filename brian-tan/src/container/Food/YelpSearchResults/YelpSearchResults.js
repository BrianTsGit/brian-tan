import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './YelpSearchResults.scss';
import YelpBusinesses from '../../../component/Food/YelpBusinesses/YelpBusinesses';

class YelpSearchResults extends Component {
    state = {
        placeholderMessage: 'Search businesses to add to your list'
    };

    render () {
        return (
            <div className={classes.YelpSearchResults}>
                <YelpBusinesses 
                        items={this.props.businesses} 
                        loading={this.props.loadingSearch}
                        clickAction="Save"
                        showHeader
                        headerText="SEARCH"
                        placeholder={this.state.placeholderMessage} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        businesses: state.food.businesses,
        loadingSearch: state.food.loadingSearch
    };
};

export default connect(mapStateToProps, null)(YelpSearchResults);
