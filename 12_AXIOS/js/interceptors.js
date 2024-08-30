// Requisição
postsFetch.interceptors.request.use(
    function (config) {
        console.log("Antes dea requisição...");
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Resposta
postsFetch.interceptors.response.use(
    function (response) {
        console.log("Antes dea resposta...");
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);