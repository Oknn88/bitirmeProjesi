const jwt = require('jsonwebtoken');
const User = require('../models').User;

module.exports = {
	verify: async (req, res, next) => {
		const { authorization } = req.headers;

		if (!authorization) {
			return res.status(401).json({ hata: "Yetkilendirme token'i gerekli" });
		}

		const token = authorization.split(' ')[1];

		try {
			const { id } = jwt.verify(token, process.env.SECRET_KEY);

			User.findByPk(id)
				.then((result) => {
					req.kullanici = result.id;
					next();
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
			res.status(401).json({ hata: 'İstek yetkili değil' });
		}
	},
};
