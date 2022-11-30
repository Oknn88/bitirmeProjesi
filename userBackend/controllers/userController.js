const User = require('../models').User;
const jwt = require('jsonwebtoken');

function createToken(id) {
	return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '3d' });
}
module.exports = {
	userLogin: async (req, res) => {
		const { email, password } = req.body;

		console.log('asdasda');
		try {
			var user = new User();
			user = await user.login(email, password);

			const token = createToken(user.id);

			res.status(200).json({ email, token });
		} catch (error) {
			console.log(error);
			res.status(400).json({ hata: error.message });
		}
	},

	userSignup: async (req, res) => {
		const { email, password } = req.body;

		try {
			var user = new User();

			user = await user.signUp(email, password);

			const token = createToken(user.id);

			res.status(200).json({ email, token });
		} catch (error) {
			console.log(error);
			res.status(400).json({ hata: error.message });
		}
	},

	listAllUser: async (req, res) => {
		try {
			const { offset, limit } = req.query;

			const users = await User.findAll({
				offset: offset,
				limit: limit,
			});

			res.send(users);
		} catch (error) {
			console.log(err);
		}
	},
};
