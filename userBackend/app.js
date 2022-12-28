const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./db');
const serve = require('./serve');

app.use(
	cors({
		origin: [
			'http://167.172.162.68',
			'http://167.172.162.68:3001',
			'http://167.172.162.68:4000',
			'http://localhost:3001',
		],
	})
);
app.use(express.json());
app.use(serve);

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Server running on ${process.env.SERVER_PORT}`);
});
