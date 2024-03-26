const { defineConfig } = require("cypress");

// load the environment variables from the local .env file
require('dotenv').config

module.exports = defineConfig({

  env:{
   'my-var': 'ok',
  },

  fixturesFolder: false,

  e2e: {
    supportFile: false,
    baseUrl: 'https://practicetestautomation.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here

       // we can grab some process environment variables
      // and stick it into config.env before returning the updated config
      config.env = config.env || {}

      // you could extract only specific variables
      // and rename them if necessary
      config.env.FOO = process.env.FOO
      config.env.BAR = process.env.BAR
      config.env.username = process.env.USER_NAME
      console.log('extended config.env with process.env.{FOO, BAR, USER_NAME}')

      return config

    },
  },
});
