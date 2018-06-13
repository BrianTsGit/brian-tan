import React, { Component } from 'react';

import GoogleMap from '../../hoc/GoogleMap/GoogleMap';
import classes from './MapContainer.scss';
import Map from './Map/Map';

class MapContainer extends Component {

    render () {
        if (!this.props.loaded) {
            return <div>Loading...</div>;
        }
        return (
            <div className={classes.Map}>
                <Map google={this.props.google} />
            </div>
        );
    }
}

export default GoogleMap({ apiKey: 'AIzaSyDj8-XjYSBinK929WNoHHq9EYu1SAWWLjM' })(MapContainer)