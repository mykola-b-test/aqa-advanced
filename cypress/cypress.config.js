const { defineConfig } = require('cypress');

module.exports = defineConfig({
    allowCypressEnv: true,
    env: {
        TEST_VAR_1: 'test value 1 in config',
        test_mail: 'test_user@gmail.com',
        test_password: 'TestUser1',
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
