// init.js
// --------------

// Includes JavaScript files here (or inside of your router)
require(["jquery", "backbone", "routers/Router", "jqueryui", "bootstrap", "backbone.validateAll"],

  function($, Backbone, Router) {

    // Instantiates a new Desktop Router instance
    new Router();

  }

);