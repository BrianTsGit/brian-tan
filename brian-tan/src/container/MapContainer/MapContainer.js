import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoogleMap from '../../hoc/GoogleMap/GoogleMap';
import classes from './MapContainer.scss';
import Map from './Map/Map';
import Marker from './Marker/Marker';
import InfoWindow from './InfoWindow/InfoWindow';
import Loader from '../../component/UI/Loader/Loader';

class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    onPushMarkerHandler = (marker) => {
        if (!this.markers) {
            this.markers = [];
        }
        this.markers.push(marker);
    }
    
    deleteMapMarkers = () => {
        if (this.markers) {
            for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
            this.markers = [];
        }
    }

    onMarkerClickHandler = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClickHandler = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    onInfoWindowClose = () => {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
    }

    render () {
        if (!this.props.loaded) {
            return <Loader />;
        }

        let markersComponents = null;

        if (this.props.locations) {
            this.deleteMapMarkers();
            markersComponents = this.props.locations.map((item, index) => {
                const pos = { lat: item.coordinates.latitude, lng: item.coordinates.longitude };
                return (
                    <Marker 
                        key={item.name} 
                        name={item.name}
                        address={item.address}
                        img={item.img}
                        desc={item.desc}
                        additionalDesc={item.additionalDesc}
                        position={pos}
                        onClick={this.onMarkerClickHandler}
                        pushMarker= {this.onPushMarkerHandler} />
                )
            });
        }

        return (
            <div className={classes.Map}>
                <Map
                    google={this.props.google}
                    onClick={this.onMapClickHandler} >
                    {markersComponents}
                    <InfoWindow 
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onInfoWindowClose} >
                        <div className={classes.InfoWindow}>
                            <div className={classes.WindowImage}>
                                <img src={this.state.selectedPlace.img} alt="Image"/>
                            </div>
                            <div className={classes.WindowDesc}>
                                <ul>
                                    <li><strong>{this.state.selectedPlace.name}</strong></li>
                                    <li>{this.state.selectedPlace.address}</li>
                                    <li>{this.state.selectedPlace.desc}</li>
                                    <li>{this.state.selectedPlace.additionalDesc}</li>
                                </ul>
                            </div> 
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

MapContainer.propTypes = {
    locations: PropTypes.arrayOf(PropTypes.object)
};

export default(GoogleMap({ apiKey: process.env.REACT_APP_GOOGLE_API_KEY })(MapContainer))