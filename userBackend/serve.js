const express = require('express');
const app = express();
const routers = require('./routes');
const authVerification = require('./middlewares/auth');

app.use('/user', routers.userRoutes);

app.use((req, res, next) => {
	res.send('404 NOT FOUND');
});

module.exports = app;
