var mosca = require('mosca');
const express = require('express');
const app = express();
const redis = require('redis');

// var ascoltatore = {
// 	type: 'redis',
// 	redis: require('redis'),
// 	db: 12,
// 	port: 6379,
// 	return_buffers: true, // to handle binary payloads
// 	host: 'localhost',
// };

var pubsubsettings = {
	//using ascoltatore
	type: 'mongo',
	url: 'mongodb://localhost:27017/mqtt',
	pubsubCollection: 'ascoltatori',
	mongo: {},
};

var moscaSettings = {
	port: 1883,
	backend: pubsubsettings,
	persistence: {
		factory: mosca.persistence.Mongo,
	},
	http: {
		port: 5002,
	},
};

var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

server.on('clientConnected', function (client) {
	console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function (packet, client) {
	//console.log('Published', packet.topic, packet.payload);

	[flat, flon, alt, spd, crs, year, month, day, hour, minute, second] = packet.payload.toString().split(',');
	console.log(
		flat +
			'-' +
			flon +
			'-' +
			alt +
			'-' +
			spd +
			'-' +
			crs +
			'-' +
			year +
			'-' +
			month +
			'-' +
			day +
			'-' +
			hour +
			'-' +
			minute +
			'-' +
			second
	);
});

// fired when the mqtt server is ready
function setup() {
	console.log('Mosca server is up and running');
}

app.get('/', async function (req, res) {
	// const client = redis.createClient({
	// 	socket: {
	// 		host: '167.172.162.68',
	// 		port: 6379,
	// 	},
	// 	password: 'Ugur12345.',
	// });
	// await client.connect();
	// const keys = await client.sendCommand(['keys', '*']);
	// const allData = [];
	// keys.forEach(async (element) => {
	// 	//const data = await client.sendCommand(['get', 'key']);
	// 	allData.push(await client.sendCommand(['GET', `'${element}'`]));
	// });
	// // res.send(keys);
});
app.listen(5001);
