const { Pool } = require("pg");

const pool = new Pool({
	user: "postgres",
	password: "123",
	host: "localhost",
	database: "nameDatabase",
	port: 5432,
});

const query = (text, params) => {
	return pool.query(text, params);
};
