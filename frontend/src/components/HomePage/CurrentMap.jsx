import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import mqtt from 'mqtt/dist/mqtt';

export class MapContainer extends React.Component {
	state = {
		lat: 38.491455,
		lng: 27.70763,
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
		const { lat, lng, altitude, speed, course } = this.state;
		const containerStyle = {
			position: 'relative',
			width: '100%',
			height: '100%',
		};
		return (
			<div style={{ width: '84vw', height: '93vh', position: 'relative' }}>
				<Map
					containerStyle={containerStyle}
					google={this.props.google}
					initialCenter={{
						lat,
						lng,
					}}
					center={{
						lat,
						lng,
					}}
					zoom={18}
				>
					<Marker
						icon={{
							path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
							fillColor: 'blue',
							fillOpacity: 0.7,
							strokeWeight: 3,
							scale: 8,
							rotation: parseFloat(course),
						}}
						position={{ lat, lng }}
					/>

					<div
						style={{
							position: 'absolute',
							backgroundColor: 'black',
							opacity: '0.7',
							padding: '10px',
							borderRadius: '15px',
							marginTop: '85vh',
						}}
					>
						<h2>{speed} km/h</h2>
						<h2>{altitude} msl</h2>
					</div>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA44GeyywkDnJl_gAQaCnxqKSeXr8T3GvI',
})(MapContainer);
