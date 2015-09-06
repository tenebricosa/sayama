module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
      stylus: {
          compile: {
              files: {
                  "compile.css": ["static/styles/require.styl"]
              }
          },
          options: {
              compress: false,
              sourcemap: { inline: true }
          }
      },

      autoprefixer: {
          single_file: {
              options: {
                  browsers: ["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1", "ie 8", "ie 9"],
                  map: { inline: true, sourcesContent: true }
              },

              src: "compile.css",
              dest: "output.css"
          }
      },

      concat: {
        options: {
          sourceMap: true
        },
        dist: {
          src: ['output.css', 'node_modules/normalize.css/normalize.css'],
          dest: 'output.css',
        },
      },

      cssmin: {
          target: {
              files: {
                  'output.css': ['output.css']
              }
          }
      },

      watch: {
          src: {
              files: ["static/styles/*.styl", "templates/*.html"],
              tasks: ["default"],
          }
      },

      clean: ["compile.css"],

  });

  grunt.registerTask('default', ['stylus', 'autoprefixer', 'concat', 'clean', 'watch']);
  grunt.registerTask('build', ['stylus', 'autoprefixer', 'concat', 'cssmin', 'clean']);

};
