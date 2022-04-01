const express = require("express");
const {
	getController,
	postController,
	putController,
	deleteController,
} = require("./controllers/controllerName");

const routes = express();

routes.get("/", getController);
routes.post("/", postController);
routes.put("/", putController);
routes.delete("/", deleteController);

module.exports = {
	routes,
};
