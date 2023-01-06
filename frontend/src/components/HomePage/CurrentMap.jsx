import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react';
import mqtt from 'mqtt';

export class MapContainer extends React.Component {
	componentDidMount() {
		var client = mqtt.connect('ws://167.172.162.68:3000');
		client.subscribe('LED');
		client.on('connect', function () {
			console.log('connected!');
		});
		client.on('message', function (topic, message) {
			console.log(topic, ' : ', message.toString());
			switch (topic) {
				case 'LOCATION':
					//updateMap(message);
					break;
				default:
					break;
			}
		});
	}

	render() {
		return (
			<div style={{ width: '100%', height: '800px' }}>
				<Map
					google={this.props.google}
					initialCenter={{
						lat: 47.444,
						lng: -122.176,
					}}
					zoom={12}
				>
					<Marker>
						icon=
						{{
							path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
							fillColor: 'red',
							fillOpacity: 0.9,
							strokeWeight: 6,
							scale: 8,
							rotation: 0,
						}}
						, position={{ lat: 47.444, lng: -122.176 }}
					</Marker>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA44GeyywkDnJl_gAQaCnxqKSeXr8T3GvI',
})(MapContainer);
