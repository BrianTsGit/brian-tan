import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './YelpSearch.scss';
import * as actions from '../../../store/actions/index';
import YelpResults from '../../../component/Food/YelpResults/YelpResults';
import yelpLogo from '../../../assets/images/yelpLogo.png';


class YelpSearch extends Component {
    state = {
        yelpSearchForm: {
            term: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            location: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        placeholderMessage: 'Search businesses to add to your list.'
    };

    checkValidity = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        } else {
            isValid = true;
        }

        return isValid;
    }

    onChangeInputHandler = (event, identifier) => {
        const updatedForm = {...this.state.yelpSearchForm};
        const updatedFormElement = {...updatedForm[identifier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[identifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentier in updatedForm) {
            formIsValid = updatedForm[inputIdentier].valid && formIsValid;
        }

        this.setState({ yelpSearchForm: updatedForm, formIsValid: formIsValid });
    }

    onSearchSubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.formIsValid) {
            this.props.searchYelp(this.state.yelpSearchForm.term.value, this.state.yelpSearchForm.location.value);
        } else {
            this.setState({ placeholderMessage: 'Please enter a valid search term and location.'})
        }
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
                            value={this.state.yelpSearchForm.term.value} 
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
                            value={this.state.yelpSearchForm.location.value} 
                            onChange={(event) => this.onChangeInputHandler(event, 'location')} />
                    </div>
                    <button disabled={this.props.loadingSearch}><i className={searchImgClass}></i></button>
                </form>
                <YelpResults 
                        items={this.props.businesses} 
                        loading={this.props.loadingSearch}
                        clickAction="Save"
                        placeholder={this.state.placeholderMessage} />
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