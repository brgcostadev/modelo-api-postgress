const instanciaAxios = require("../services/serviceName");

const getController = async (req, res) => {
	try {
		return res.json("get");
	} catch (error) {
		console.log(error.message);
	}
};

const postController = async (req, res) => {
	try {
		return res.json("get");
	} catch (error) {
		console.log(error.message);
	}
};

const putController = async (req, res) => {
	try {
		return res.json("get");
	} catch (error) {
		console.log(error.message);
	}
};

const deleteController = async (req, res) => {
	try {
		return res.json("get");
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = {
	deleteController,
	getController,
	postController,
	putController,
};
