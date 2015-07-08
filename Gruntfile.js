module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js']
    },

    watch: {
      files: [ '**/**'],
      tasks: [ 'jshint', 'build' ],
      options: {
        livereload: true
      }
    },

    connect: {
      server: {
        options: {
          open: true,
          port: 8090,
          base: '.tmp'
        }
      }
    },

    clean: ['.tmp/'],
    copy: {
      main: {
        expand: true,
        dot: true,
        cwd: 'src',
        dest: '.tmp',
        src: [
          '**/*'
        ]
      }
    },

    tags: {
      build: {
        src: [
          '.tmp/**/*.js',
        ],
        dest: '.tmp/index.html'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-script-link-tags');

  grunt.registerTask('build', ['clean', 'copy', 'tags']);
  grunt.registerTask('serve', ['jshint', 'build', 'connect:server', 'watch']);
  grunt.registerTask('default', ['jshint']);

};
