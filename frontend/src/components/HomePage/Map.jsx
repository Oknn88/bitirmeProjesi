import React, { Component } from 'react';
import { DirectionsRenderer, GoogleMap, withGoogleMap } from 'react-google-maps';
const google = window.google;
const mqtt = require('mqtt');

const DirectionsGoogleMap = withGoogleMap((props) => (
	<GoogleMap defaultZoom={10} defaultCenter={props.center}>
		{props.directions && (
			<DirectionsRenderer
				directions={props.directions}
				options={{
					suppressMarkers: true,
				}}
			/>
		)}
		{props.markers}
	</GoogleMap>
));

class Map extends Component {
	componentDidMount() {
		this.getDirections(this.state.addresses);
	}

	render() {
		const center = {
			latitude: 33.833582,
			longitude: -84.64946,
		};

		return (
			<div>
				<DirectionsGoogleMap
					containerElement={<div style={{ width: '84vw', height: '92vh' }} />}
					mapElement={<div style={{ width: '100%', height: '100%' }} />}
					center={new google.maps.LatLng(center.latitude, center.longitude)}
					directions={this.state.directions}
				/>
			</div>
		);
	}
}

export default Map;
