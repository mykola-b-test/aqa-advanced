const { defineConfig } = require('cypress');

module.exports = defineConfig({
    allowCypressEnv: false,

    expose: {
        authCredentials: {
            username: 'guest',
            password: 'welcome2qauto',
        },
    },

    reporter: 'cypress-mochawesome-reporter',


    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            const testEnv = config.env.qauto2 ? 'qauto2' : 'qauto';
            const configValue = require(`./configs/config.${testEnv}.json`);
            config.env = { ...config.env,...configValue.env };
            config = { ...config, ...configValue };
            return config;
        },
    },
});
