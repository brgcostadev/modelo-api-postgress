const axios = require("axios");

const instanciaAxios = axios.create({
	baseUrl: "informUrlApiExterna",
	params: {
		api_key: "chaveParaAcessarAPI",
	},
});

module.exports = {
	instanciaAxios,
};
