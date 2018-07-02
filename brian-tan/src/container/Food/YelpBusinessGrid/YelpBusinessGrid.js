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

    render () {
        let tabSection = !this.state.savedTabOpen ? 
            (
                <div className={classes.TabSection}>
                    <YelpBusinesses 
                            items={this.props.businesses} 
                            loading={this.props.loadingSearch}
                            clickAction="Save"
                            placeholder="Search businesses to add to your list." />
                </div>
            ) :
            (
                <div className={classes.TabSection}>
                    <YelpBusinesses 
                        items={this.props.hitList}
                        loading={this.props.loadingHitList} 
                        clickAction="Remove"
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
                                clickAction="Save"
                                showHeader
                                headerText="SEARCHED"
                                placeholder="Search businesses to add to your list." />
                    </div>
                    <div className={classes.ItemSection}>
                        <YelpBusinesses 
                            items={this.props.hitList}
                            loading={this.props.loadingHitList} 
                            showHeader
                            headerText="SAVED"
                            clickAction="Remove"
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
        getHitList: () => dispatch(actions.getHitList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(YelpBusinessGrid);