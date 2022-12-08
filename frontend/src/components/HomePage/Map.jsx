import React, { Component } from 'react';
import { DirectionsRenderer, GoogleMap, withGoogleMap } from 'react-google-maps';
const google = window.google;

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
	constructor(props) {
		super(props);
		this.state = {
			addresses: [
				{
					latitude: 38.639005,
					longitude: 27.375113,
				},
				{
					latitude: 38.637109,
					longitude: 27.379345,
				},
				{
					latitude: 38.635408,
					longitude: 27.380465,
				},
				{
					latitude: 38.625199,
					longitude: 27.374366,
				},
				{
					latitude: 38.623692,
					longitude: 27.377727,
				},
			],
			directions: null,
			prevAddresses: null,
		};
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

export default Map;
