import { Sequelize } from "sequelize";

// const db = new Sequelize("darsun_undangan", "root", "", {
// 	host: "localhost",
// 	dialect: "mysql",
// });

const db = new Sequelize({
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE,
	port: process.env.DB_PORT,
	host: process.env.DB_HOST,
	dialect: "mysql",
});
export default db;
