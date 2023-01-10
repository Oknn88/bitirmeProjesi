import React, { Component } from 'react';
import { DirectionsRenderer, GoogleMap, withGoogleMap } from 'react-google-maps';
import { GoogleApiWrapper } from 'google-maps-react';
const google = window.google;

const DirectionsGoogleMap = withGoogleMap((props) => (
	<GoogleMap defaultZoom={10} defaultCenter={props.center}>
		{props.directions && (
			<DirectionsRenderer
				directions={props.directions}
				options={{
					suppressMarkers: false,
					markerOptions: {
						icon: 'https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png',
					},
				}}
			/>
		)}
		{props.markers}
	</GoogleMap>
));

class Map extends Component {
	constructor(props) {
		super(props);

		this.state = {
			addresses: [],
			directions: null,
			prevAddresses: null,
		};

		const split = Math.ceil(props.data.length / 23);
		const fixedLocs = [];
		console.log(split);
		fixedLocs.push(props.data[0]);
		for (let index = split; index < props.data.length; index = index + split) {
			fixedLocs.push(props.data[index]);
		}
		fixedLocs.push(props.data[props.data.length - 1]);

		console.log(fixedLocs);
		fixedLocs.forEach((element) => {
			this.state.addresses.push(element);
		});
	}

	componentDidMount() {
		this.getDirections(this.state.addresses);
	}

	getDirections(addresses) {
		const DirectionsService = new google.maps.DirectionsService();
		const waypoints = [];
		addresses.forEach((element, index) => {
			if (index > 0 && index < addresses.length - 1) {
				waypoints.push({
					location: new google.maps.LatLng(Number(element.latitude), Number(element.longitude)),
				});
			}
		});
		const len = this.state.addresses.length;
		DirectionsService.route(
			{
				origin: new google.maps.LatLng(Number(addresses[0].latitude), Number(addresses[0].longitude)),
				destination: new google.maps.LatLng(
					Number(addresses[len - 1].latitude),
					Number(addresses[len - 1].longitude)
				),
				travelMode: google.maps.TravelMode.DRIVING,
				waypoints: waypoints,
			},
			(result, status) => {
				if (status === google.maps.DirectionsStatus.OK) {
					this.setState({
						directions: result,
					});
				} else {
					this.setState({
						directions: null,
					});
				}
			}
		);
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

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA44GeyywkDnJl_gAQaCnxqKSeXr8T3GvI',
})(Map);
