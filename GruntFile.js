module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
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
    },	
	uglify: {
	    options: {
	      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
	        '<%= grunt.template.today("yyyy-mm-dd") %> */'
	    },
	    jsminnodep: {
		  options: {
			  mangle: true,
			  compress: true
		  },
	      files: {
	        'dist/naivebayes.nodep.min.js': ['Porter-Stemmer/PorterStemmer1980.js','src/js/naivebayes.js']
	      }
	    },
		  jsnodep: {
  	  	  options: {
		        mangle: false,
		        beautify: true,
		        compress: false
  	  	  },
  	        files: {
  	          'dist/naivebayes.nodep.js': ['Porter-Stemmer/PorterStemmer1980.js','src/js/naivebayes.js']
  	        }
		  },
	    jsmin: {
		    options: {
		  	  mangle: true,
		  	  compress: true
		    },
	        files: {
	          'dist/naivebayes.min.js': ['src/js/naivebayes.js']
	        }
	    },
	    js: {
		    options: {
		  	  mangle: false,
          beautify: true,
		  	  compress: false
		    },
	        files: {
	          'dist/naivebayes.js': ['src/js/naivebayes.js']
	        }
	    }
	 }
});
 
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['coffee', 'jasmine', 'uglify']);
};
