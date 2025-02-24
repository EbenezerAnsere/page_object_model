const { defineConfig } = require("cypress");

// load the environment variables from the local .env file
require('dotenv').config

module.exports = defineConfig({
  projectId: '5xb6v6',



  fixturesFolder: false,

  e2e: {
    baseUrl: 'https://practicetestautomation.com',
    setupNodeEvents(on, config) {
    },
    env: {
      // baseUrl: 'https://demoqa.com/automation-practice-form'
    }
  },
});


