import { Sequelize } from "sequelize";

const db = new Sequelize("darsun_invitation", "admin", "DarsunNov17", {
	host: "localhost",
	dialect: "mysql",
});

export default db;
