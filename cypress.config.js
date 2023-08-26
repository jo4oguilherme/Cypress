const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    

    baseUrl: 'https://automationexercise.com/', 
    
    defaultCommandTimeout: 5000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
