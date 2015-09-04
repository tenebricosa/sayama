module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
      stylus: {
          compile: {
              files: {
                  "compile.css": ["static/styles/*.styl"]
              }
          }
      },

      autoprefixer: {
          single_file: {
              options: {
                  browsers: ["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1", "ie 8", "ie 9"]
              },

              src: "compile.css",
              dest: "crossbrowser.css"
          }
      },

      cssmin: {
          target: {
              files: {
                  'sayama.css': ['crossbrowser.css']
              }
          }
      },

      watch: {
          options: {
              reload: true
          },
          src: {
              files: ["static/**/*", "templates/*"],
              tasks: ["default"],
          }
      },

      clean: ["compile.css", "crossbrowser.css"],

  });

  grunt.registerTask('default', ['stylus', 'autoprefixer', 'cssmin', 'clean', 'watch']);

};
