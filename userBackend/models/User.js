"use strict";
const { Model, where } = require("sequelize");
const bcrypt = require("bcrypt");
const validator = require("validator");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emailVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate(async (user) => {
    console.log(user);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

  User.prototype.signUp = async function (email, password) {
    if (!email || !password) {
      throw Error("Please Fill All Fields ");
    }

    if (!validator.isEmail(email)) {
      throw Error("Email is Not Valid");
    }

    if (!validator.isStrongPassword(password)) {
      throw Error("Password is Not Strong");
    }

    const kontrolKullanici = await User.findOne({
      where: { email },
    });

    if (kontrolKullanici) {
      throw Error("Email is Already Taken");
    }

    const user = await User.create({ email, password });
    return user;
  };

  User.prototype.login = async (email, password) => {
    if (!email || !password) {
      throw Error("Please Fill All Fields ");
    }

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw Error("Email Not Found");
    }

    const parolaKontrol = bcrypt.compareSync(password, user.password);

    if (!parolaKontrol) {
      throw Error("Wrong Password ");
    }
    return user;
  };

  User.prototype.changeEmail = async (lastEmail, email, confirmEmail) => {
    if (!email || !confirmEmail) {
      throw Error("Please Fill All Fields ");
    }

    const user = await User.findOne({
      where: {
        email: lastEmail,
      },
    });
    if (user) {
      user.update({ email: email });
    }
  };

  return User;
};
