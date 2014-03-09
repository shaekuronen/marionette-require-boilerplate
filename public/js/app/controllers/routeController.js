// callback methods triggered by appRoutes in
define([
  'backbone'
],
function( Backbone ) {
    'use strict';

  return Backbone.Marionette.Controller.extend({

    initialize: function( options ) {
      console.log("initialize routeController");
    },

    index: function() {
      // Instantiates a new view which will render the header text to the page
      new View();
    }

  });

});








