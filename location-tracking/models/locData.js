'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class locData extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	locData.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				autoIncrement: false,
			},
			flat: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			flon: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			alt: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			spd: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			crs: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			deviceId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'locData',
		}
	);

	locData.associate = (models) => {};
	return locData;
};
