import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './FoodMap.scss';
import MapContainer from '../../MapContainer/MapContainer';

class FoodMap extends Component {
    render () {
        let foodMap = <div>Loading...</div>;

        if (this.props.hitList) {
            foodMap = <MapContainer 
                locations={this.props.hitList} />  
        }

        return (
            <div className={classes.FoodMap}>
                <div className={classes.MapHeader}>
                    <span>MAP OF SAVED FOOD DESTINATIONS</span>
                </div>
                <div className={classes.Map}>{foodMap}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        hitList: state.hitList
    };
};

export default connect(mapStateToProps, null)(FoodMap);