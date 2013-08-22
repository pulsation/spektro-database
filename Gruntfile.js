module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'couch-compile': {
      template: {
        files: {
          'tmp/spektor-template.json': 'couch/*'
        }
      }
    },
    'couch-push': {
      pulsation: {
        files: {
          'https://pulsation.iriscouch.com:6984/spektor-template': 'tmp/spektor-template.json'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-couch');

  // Default task(s).
  grunt.registerTask('default', ['couch-compile']);

};
