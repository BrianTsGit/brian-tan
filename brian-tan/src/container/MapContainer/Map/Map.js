import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {
    componentDidMount () {
        this.loadMap();
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    } 

    loadMap () {
        if (this.props && this.props.google) {
            const {google} = this.props; //same as const google = this.props.google
            const maps = google.maps;

            const mapRef = this.refs.map; //grab ref to DOM component after we have loaded
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 12;
            let lat = 40.7675;
            let lng = -73.8331;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            });
            this.map = new maps.Map(node, mapConfig);
            console.log(this.map);
        }
    }

    render () {
        const mapStyle = {
            width: '100%',
            height: '100%'
        };

        return (
            <div ref="map" style={mapStyle}>
                Loading map...
            </div>
        );
    };
}

export default Map;