const { defineConfig } = require('cypress');

module.exports = defineConfig({
    allowCypressEnv: true,

    env: {
        testUserCredentials_1: {
            username: 'test_user@gmail.com',
            password: 'TestUser1'
        },
        testUserCredentials_2: {
            username: 'test_user@gmail.com',
            password: 'TestUser1'
        },
    },

    expose: {
        authCredentials: {
            username: 'guest',
            password: 'welcome2qauto',
        },
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
