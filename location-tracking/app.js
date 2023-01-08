var mosca = require('mosca');
const express = require('express');
const app = express();
require('./db');
const locData = require('./models').locData;

// var ascoltatore = {
// 	type: 'redis',
// 	redis: require('redis'),
// 	db: 12,
// 	port: 6379,
// 	return_buffers: true, // to handle binary payloads
// 	host: 'localhost',
// };

var moscaSettings = {
	port: 1883,

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
server.on('published', async function (packet, client) {
	//console.log('Published', packet.topic, packet.payload);

	[flat, flon, alt, spd, crs] = packet.payload.toString().split(',');

	try {
		var locData = new locData();

		data = await locData.create({ flat, flon, alt, spd, crs });
	} catch (error) {
		console.log(error);
	}
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
