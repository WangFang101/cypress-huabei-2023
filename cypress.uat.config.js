
const baseConfig = require('./cypress.config');
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = {
  ...baseConfig,
  e2e: {
    baseUrl: 'http://3x5m5o-3000.csb.app',
    env: {
      environment:'UAT',
      allureResultsPath: 'cypress/allure-results',
      allure: true,
      allureLogCypress: true,
    },
    setupNodeEvents(on, config) {
      module.exports = (on, config) => {

        allureWriter(on, config);

        return config;
      };
    },
  }

};
