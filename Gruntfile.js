module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'couch-compile': {
      "spektro-template": {
        files: {
          'tmp/spektro-template.json': 'couch/spektro-template'
        }
      },
      "spektro-replicator": {
        files: {
          'tmp/spektro-replicator.json': 'couch/spektro-replicator'
        }
      }
    },
    'couch-push': {
      pulsation: {
        files: {
          'https://pulsation.iriscouch.com:6984/spektro-template': 'tmp/spektro-template.json'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-couch');

  // Default task(s).
  grunt.registerTask('default', ['couch-compile']);

};
