import { Sequelize } from "sequelize";

const db = new Sequelize("darsun_invitation", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

export default db;
