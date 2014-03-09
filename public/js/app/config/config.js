// Require.js Configurations
// -------------------------
require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js/app",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery": "../../bower_components/jquery/dist/jquery",

      "underscore": "../../bower_components/lodash/dist/lodash",

      "backbone": "../../bower_components/backbone/backbone",

      // Plugins
      // -------
      "backbone.validateAll": "../../bower_components/Backbone.validateAll/src/javascripts/Backbone.validateAll",

      "bootstrap": "../../bower_components/bootstrap/dist/js/bootstrap",

      "text": "../../bower_components/requirejs-text/text",

      "jasminejquery": "../../bower_components/jasmine-jquery/lib/jasmine-jquery.js",

      "backbone.marionette": "../../bower_components/backbone.marionette/lib/core/amd/backbone.marionette",

      "backbone.babysitter": "../../bower_components/backbone.babysitter/lib/amd/backbone.babysitter",

      "backbone.wreqr": "../../bower_components/backbone.wreqr/lib/amd/backbone.wreqr"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      // Twitter Bootstrap jQuery plugins
      "bootstrap": ["jquery"],

      // Backbone.validateAll plugin that depends on Backbone
      "backbone.validateAll": ["backbone"],

      // Jasmine-jQuery plugin
      "jasminejquery": ["jquery"]

  }

});