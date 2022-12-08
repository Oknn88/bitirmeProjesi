const User = require("../models").User;
const jwt = require("jsonwebtoken");

function createToken(id) {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "3d" });
}
module.exports = {
  userLogin: async (req, res) => {
    const { email, password } = req.body;
    try {
      var user = new User();
      user = await user.login(email, password);

      if (user) {
        const token = createToken(user.id);

        res.status(200).json({ email, token });
      }
    } catch (error) {
      res.status(400).json({ hata: error.message });
    }
  },

  userSignup: async (req, res) => {
    const { email, password } = req.body;

    try {
      var user = new User();

      user = await user.signUp(email, password);

      if (user) {
        const token = createToken(user.id);

        res.status(200).json({ email, token });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ hata: error.message });
    }
  },
  changeEmail: async (req, res) => {
    const { lastEmail, email, confirmEmail } = req.body;
    try {
      var user = new User();
      user = await user.changeEmail(lastEmail, email, confirmEmail);

      if (user) {
        const token = createToken(user.id);

        res.status(200).json({ email, token });
      }
    } catch (error) {
      res.status(400).json({ hata: error.message });
    }
  },

  changePassword: async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    try {
      var user = new User();
      user = await user.changePassword(email, password, confirmPassword);
      if (user) {
        res.status(200);
      }
    } catch (error) {
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
