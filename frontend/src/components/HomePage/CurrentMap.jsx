import React, { Component }  from 'react';
import { GoogleApiWrapper } from 'google-maps-react';//Map
import { DirectionsRenderer, GoogleMap, withGoogleMap, Marker  } from 'react-google-maps';

import mqtt from 'mqtt/dist/mqtt';
const google = window.google;


const DirectionsGoogleMap = withGoogleMap((props) => (
	<GoogleMap defaultZoom={18} defaultCenter={props.center}>
		<Marker
      position={props.latlng}
	  icon={{
		path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
		fillColor: "blue",
    	fillOpacity: 0.6,
    	strokeWeight: 2,
    	scale: 6,
		rotation: parseFloat(props.course),
	  }}
	  
    />
		{props.directions && (
			<DirectionsRenderer
				directions={props.directions}
				options={{
					suppressMarkers: true,
					markerOptions: {
                  icon:
                    'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                	}
				}}

			/>
			
		)}
		{props.markers}
	</GoogleMap>
));


export class MapContainer extends React.Component {
constructor(props) {
		super(props);
		this.state = {
			addresses: [

			],
			directions: null,
			prevAddresses: null,
		};
	}

	state = {
		lat: -34.397,
		lng: 150.644,
		altitude: 0,
		speed: 0,
		course: 0,
	};

	updateMap(message) {
		var [lat, lng, altitude, speed, course] = message.toString().split(',');

		this.setState({
			lat,
			lng,
			altitude,
			speed,
			course,
		});
	}

		componentDidMount() {
		var client = mqtt.connect('ws://167.172.162.68:5000');

		client.subscribe('LOCATION');

		client.on('connect', function () {
			console.log('connected!');
		});

		client.on('message', (topic, message) => {
			console.log(topic, ' : ', message.toString());
			switch (topic) {
				case 'LOCATION':
					this.updateMap(message);
					break;
			}
		});
	}



	render() {
		//const { lat, lng, altitude, speed, course } = this.state;
		const lat = 38.639005;
		const lng = 27.375113;
		const speed = 28;
		const altitude = 136;
		const course = 60;

		return (
			<div>
				<DirectionsGoogleMap
					containerElement={<div style={{ width: '84vw', height: '92vh' }} />}
					mapElement={<div style={{ width: '100%', height: '100%' }} />}
					center={new google.maps.LatLng(lat, lng)}
					directions={this.state.directions}
					latlng={new google.maps.LatLng(lat, lng)}
					course={course}
				/>
				<div id='info'>
 					<h2>{speed} km/h</h2>
 					<h2>{altitude} msl</h2>
 				</div>
			</div>
		);
	}
}




export default GoogleApiWrapper({
	apiKey: 'AIzaSyA44GeyywkDnJl_gAQaCnxqKSeXr8T3GvI',
})(MapContainer);






// const DirectionsGoogleMap = withGoogleMap((props) => (
// 	<GoogleMap defaultZoom={10} defaultCenter={props.center}>
// 		{props.directions && (
// 			<DirectionsRenderer
// 				directions={props.directions}
// 				options={{
// 					suppressMarkers: true,
// 				}}
// 			/>
// 		)}
// 		{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
// 		{props.markers}
// 	</GoogleMap>
// ));

// export class MapContainer extends React.Component {
// 	state = {
// 		lat: -34.397,
// 		lng: 150.644,
// 		altitude: 0,
// 		speed: 0,
// 		course: 0,
// 	};

// 	updateMap(message) {
// 		var [lat, lng, altitude, speed, course] = message.toString().split(',');

// 		this.setState({
// 			lat,
// 			lng,
// 			altitude,
// 			speed,
// 			course,
// 		});
// 	}

// 	componentDidMount() {
// 		var client = mqtt.connect('ws://167.172.162.68:5000');

// 		client.subscribe('LOCATION');

// 		client.on('connect', function () {
// 			console.log('connected!');
// 		});

// 		client.on('message', (topic, message) => {
// 			console.log(topic, ' : ', message.toString());
// 			switch (topic) {
// 				case 'LOCATION':
// 					this.updateMap(message);
// 					break;
// 			}
// 		});
// 	}

// 	render() {
// 		const { lat, lng, altitude, speed, course } = this.state;
// 		const containerStyle = {
// 			position: 'relative',
// 			width: '100%',
// 			height: '100%',
// 		};
// 		return (
// 			<div style={{ width: '100%', height: '100%' }}>

// 				<DirectionsGoogleMap
// 					containerElement={<div style={{ width: '84vw', height: '92vh' }} />}
// 					mapElement={<div style={{ width: '100%', height: '100%' }} />}
// 					center={new google.maps.LatLng(lat, lng)}
// 					directions={this.state.directions}
					
// 					//markers={{ lat: -34.397, lng: 150.644 }}
// 				/>
				

// 				{/* <Map
// 					containerStyle={containerStyle}
// 					google={this.props.google}
// 					initialCenter={{
// 						lat,
// 						lng,
// 					}}
// 					center={{
// 						lat,
// 						lng,
// 					}}
// 					zoom={18}
// 				>
// 					<Marker
// 						icon={{
// 							path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
// 							fillColor: 'red',
// 							fillOpacity: 0.9,
// 							strokeWeight: 6,
// 							scale: 8,
// 							rotation: parseFloat(course),
// 						}}
// 						position={{ lat, lng }}
// 					/>
// 				</Map> */}

// 				<div id='info'>
// 					<h2>{speed} km/h</h2>
// 					<h2>{altitude} msl</h2>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default GoogleApiWrapper({
// 	apiKey: 'AIzaSyA44GeyywkDnJl_gAQaCnxqKSeXr8T3GvI',
// })(MapContainer);
