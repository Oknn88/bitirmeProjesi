"use strict";
const { Model } = require("sequelize");
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
      throw Error("Alanlar bos gecilemez");
    }

    if (!validator.isEmail(email)) {
      throw Error("Email kurallara uygun degil");
    }

    if (!validator.isStrongPassword(password)) {
      throw Error("Parola yeterince guclu degil");
    }

    const kontrolKullanici = await User.findOne({
      where: { email },
    });

    if (kontrolKullanici) {
      throw Error("Email zaten kullaniliyor");
    }

    const user = await User.create({ email, password });

    return user;
  };
  User.prototype.login = async (email, password) => {
    console.log(email, password);
    if (!email || !password) {
      throw Error("Alanlar bos gecilemez");
    }

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw Error("Email bulunamadi");
    }

    const parolaKontrol = bcrypt.compareSync(password, user.password);

    if (!parolaKontrol) {
      throw Error("Hatali parola girdiniz");
    }

    return user;
  };

  // User.associate = (models) => {
  // 	User.hasMany(models.Note, {
  // 		onDelete: 'cascade',
  // 		onUpdate: 'cascade',
  // 	});
  // };
  return User;
};
