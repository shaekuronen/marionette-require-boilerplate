// Router.js
// ----------------
define([
    'backbone',
    'backbone.marionette'
    ],

    function(Backbone, Marionette) {

        var Router = Marionette.AppRouter.extend({

            // these callback methods are in routeController.js
            appRoutes: {

                // When there is no hash on the url, the home method is called
                "": "index"

            }

        });

        // Returns the Router class
        return Router;

    }

);