// init.js
// --------------

// Includes JavaScript files here (or inside of your router)
require([
  "jquery",
  "backbone",
  "backbone.marionette",
  "routers/Router",
  "bootstrap",
  "backbone.validateAll"
  ],

  function($, Backbone, Marionette) {
      'use strict';

    // create the application object
    var App = new Backbone.Marionette.Application();

    /* Add application regions here */
    App.addRegions({

    });

    /* Add initializers here */
    App.addInitializer(function(Backbone, Router) {
      // Instantiates a new Router instance
      new Router();
    });

    App.on("initialize:after", function(){
      if (Backbone.history){
        Backbone.history.start();
      }
    });

    return App;

  }

);