import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RestaurantHitList.scss';
import * as actions from '../../../store/actions/index';
import axios from '../../../axios/axios-server';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import YelpResults from '../../../component/Food/YelpResults/YelpResults';
import YelpBusinesses from '../../../component/Food/YelpBusinesses/YelpBusinesses';

class RestaurantHitList extends Component {

    componentDidMount () {
        this.props.getHitList();
    }

    render () {
        return (
            <div className={classes.RestaurantHitList}>
                <YelpBusinesses 
                    items={this.props.hitList}
                    loading={this.props.loadingHitList} 
                    showHeader
                    headerText="SAVED"
                    clickAction="Remove"
                    placeholder="There are no items yet." />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        hitList: state.hitList,
        loadingHitList: state.loadingHitList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHitList: () => dispatch(actions.getHitList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(RestaurantHitList, axios));