import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;
const User = db.define(
	"users",
	{
		name: DataTypes.STRING,
		comments: DataTypes.TEXT,
	},
	{
		freezeTableName: true,
	}
);

export default User;

(async () => {
	await db.sync();
})();
