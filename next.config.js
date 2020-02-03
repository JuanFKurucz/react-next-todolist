const production = {
    API_URL: "https://jsonplaceholder.typicode.com/"
};

const development = {
    API_URL: "https://jsonplaceholder.typicode.com/"
};

const config = process.env.REACT_APP_STAGE === 'production' ? production : development;

module.exports = {
    publicRuntimeConfig: {
        ...config
    }
}