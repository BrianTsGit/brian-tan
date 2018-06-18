import React, { Component } from 'react';
import { connect } from 'react-redux';

import MapContainer from '../../MapContainer/MapContainer';

class FoodMap extends Component {
    render () {
        let foodMap = <div>Loading...</div>;

        if (this.props.hitList) {
            foodMap = <MapContainer locations={this.props.hitList} />  
        }

        return (
            <div>
                {foodMap}
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