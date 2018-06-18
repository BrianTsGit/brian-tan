import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const eventNames = ['ready', 'click', 'dragend'];

class Map extends Component {
    constructor(props) {
        super(props);

        const {lat, lng} = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        };
    }

    camelize = (str) => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
    };

    componentDidMount () {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                });
            }
        }
        this.loadMap();
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    } 

    recenterMap () {
        const map = this.map;
        const curr = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(curr.lat, curr.lng);
            map.panTo(center);
        }
    }

    loadMap () {
        if (this.props && this.props.google) {
            const {google} = this.props; //same as const google = this.props.google
            const maps = google.maps;

            const mapRef = this.refs.map; //grab ref to DOM component after we have loaded
            const node = ReactDOM.findDOMNode(mapRef);

            let {zoom} = this.props;
            let {lat, lng} = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            });
            this.map = new maps.Map(node, mapConfig);

            eventNames.forEach(e => {
                this.map.addListener(e, this.handleEvent(e));
            });

            maps.event.trigger(this.map, 'ready'); //trigger the ready event manually

            this.forceUpdate(); //call this to re-render the marker components with a map value
        }
    }

    handleEvent (eventName) {
        let timeout;
        const handlerName = `on${this.camelize(eventName)}`; //template literal notation

        return (e) => {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            timeout = setTimeout(() => {
                if (this.props[handlerName]) {
                    this.props[handlerName](this.props, this.map, e);
                }
            }, 0);
        }
    }

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

    renderChildren = () => {
        this.deleteMapMarkers();

        const {children} = this.props;

        if (!children) return;

        //a built it function to map over children of component 
        const updatedChildren = React.Children.map(children, c => {
            //clone will return a copy of the element but we can add custom props to it 
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.currentLocation,
                pushMarker: this.onPushMarkerHandler
            });
        });

        return updatedChildren;

    }

    render () {
        const mapStyle = {
            width: '100%',
            height: '100%'
        };

        return (
            <div ref="map" style={mapStyle}>
                {this.renderChildren()}
            </div>
        );
    };
}

Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    centerAroundCurrentLocation: PropTypes.bool,
    onMove: PropTypes.func
};

Map.defaultProps = {
    zoom: 12,
    initialCenter: {
        lat: 40.7675,
        lng: -73.8331
    },
    centerAroundCurrentLocation: false,
    onMove: function () {}
};

export default Map;