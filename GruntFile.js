module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
	  coffee: {
      options:{
        bare: true
      },
      compile: {
	       files: {
	          'src/js/naivebayes.js': ['src/coffee/*.coffee'] // compile and concat into single file
	       }
      }
    },
    jasmine : {
      tests: {
      src : 'src/js/**/*.js',
      options : {
        specs : 'spec/**/*Spec.js',
        vendor: [
            'spec/lib/jasmine.async.js',
        ]
      }
     }
    }
  });
  
  
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['coffee', 'jasmine']);
};
