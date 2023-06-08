import { Sequelize } from "sequelize";

// const db = new Sequelize("darsun_undangan", "root", "", {
// 	host: "localhost",
// 	dialect: "mysql",
// });

const db = new Sequelize({
	username: process.env.MYSQLUSERNAME,
	password: process.env.MYSQLPASSWORD,
	database: process.env.MYSQLDATABASE,
	port: process.env.MYSQLPORT,
	host: process.env.MYSQLHOST,
	dialect: "mysql",
});
export default db;
