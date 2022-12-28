const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./db');
const serve = require('./serve');

app.use(cors());
app.use(express.json());
app.use(serve);

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Server running on ${process.env.SERVER_PORT}`);
});
