module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'couch-compile': {
      app: {
        files: {
          'tmp/app.json': 'couch/*'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-couch');

  // Default task(s).
  grunt.registerTask('default', ['couch-compile']);

};
