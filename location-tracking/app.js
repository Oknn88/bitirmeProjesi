var mosca = require('mosca');
const express = require('express');
const app = express();
const cors = require('cors');
require('./db');
const locData = require('./models').locData;
const Sequelize = require('sequelize');
const moment = require('moment');
const Op = Sequelize.Op;

app.use(
	cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

app.use(express.json());

var moscaSettings = {
	port: 1883,

	http: {
		port: 5000,
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

	[flat, flon, alt, spd, crs, id] = packet.payload.toString().split(',');
	console.log(flat, flon);

	try {
		data = await locData.create({ flat: flat, flon: flon, alt: alt, spd: spd, crs: crs, deviceId: id });
	} catch (error) {
		console.log(error);
	}
});

// fired when the mqtt server is ready
function setup() {
	console.log('Mosca server is up and running');
}

app.get('/', async function (req, res) {
	const { from, to } = req.query;

	const startDate = from.split('T')[0] + '"';
	const endDate = to.split('T')[0] + '"';

	const locs = await locData.findAll({
		where: {
			createdAt: {
				[Op.between]: [startDate, endDate],
			},
		},
		order: [['createdAt', 'ASC']],
	});

	res.status(200).json({ locs });
});
app.listen(5001);
