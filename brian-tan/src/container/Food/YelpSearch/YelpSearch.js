import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './YelpSearch.scss';
import * as actions from '../../../store/actions/index';
import YelpResults from '../../../component/Food/YelpResults/YelpResults';
import yelpLogo from '../../../assets/images/yelpLogo.png';


class YelpSearch extends Component {
    state = {
        yelpSearchForm: {
            term: '',
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
        this.props.searchYelp(this.state.yelpSearchForm.term, this.state.yelpSearchForm.location);
    }

    render () {
        const searchImgClass = this.props.loadingSearch ? 'fa fa-spinner' : 'fas fa-search';

        return (
            <div className={classes.YelpSearch}>
                <div className={classes.YelpLogo}>
                    <img src={yelpLogo} alt="YelpLogo" />
                </div>
                <form className={classes.YelpForm} onSubmit={this.onSearchSubmitHandler}>
                    <div className={classes.Input}>
                        <div className={classes.Label}>
                            <span>Find</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="bbq, ribs..." 
                            value={this.state.yelpSearchForm.term} 
                            onChange={(event) => this.onChangeInputHandler(event, 'term')} />
                    </div> 
                    <div className={classes.Divider}>
                        <span>|</span>
                    </div>
                    <div className={classes.Input}>
                        <div className={classes.Label}>
                            <span>Near</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Queens, NY" 
                            value={this.state.yelpSearchForm.location} 
                            onChange={(event) => this.onChangeInputHandler(event, 'location')} />
                    </div>
                    <button disabled={this.props.loadingSearch}><i className={searchImgClass}></i></button>
                </form>
                <YelpResults 
                        items={this.props.businesses} 
                        loading={this.props.loadingSearch}
                        clickAction="Save"
                        placeholder="Search businesses to add to your list." />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        businesses: state.businesses,
        loadingSearch: state.loadingSearch
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchYelp: (term, loc) => dispatch(actions.searchYelp(term, loc))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(YelpSearch); 