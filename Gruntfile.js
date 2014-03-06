
module.exports = function(grunt) {

  var amdclean = require('amdclean'),
    fs = require('fs'),
    amdcleanLogic = function (data) {
      var outputFile = data.path;
      fs.writeFileSync(outputFile, amdclean.clean({
        'code': fs.readFileSync(outputFile),
        'globalObject': true,
        'globalObjectName': 'BRB',
        'rememberGlobalObject': false,
        'removeModules': ['text'],
        'prefixTransform': function(moduleName) {
          return moduleName.substring(moduleName.lastIndexOf('_') + 1, moduleName.length);
        },
        'wrap': {
          'start': '(function() {\n',
          'end': '\n}());'
        }
      }));
    };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      js: {
        options: {
          baseUrl: 'public/js/app',
          paths: {
            'desktop': 'init/init'
          },
          wrap: true,
          // name: "../libs/almond",
          onModuleBundleComplete: amdcleanLogic,
          preserveLicenseComments: false,
          optimize: 'uglify',
          mainConfigFile: 'public/js/app/config/config.js',
          include: ['desktop'],
          out: 'public/js/app/init/init.min.js'
        }
      },
      css: {
        options: {
          optimizeCss: 'standard',
          cssIn: './public/css/main.css',
          out: './public/css/main.min.css'
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
      options: {
        globals: {
          jQuery: true,
          console: false,
          module: true,
          document: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('build', ['test', 'requirejs']);
};