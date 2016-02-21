(function(){
    'use strict';
    //Project configuration
    module.exports = function(grunt) {

    // require it at the top and pass in the grunt instance

    // Time how long task take. Can help when optimizing build times
    require('time-grunt')(grunt);
    /*
     * A JIT(Just In Time) plugin loader for Grunt.
     * Load time of Grunt does not slow down even if there are many plugins.
     * https://www.npmjs.com/package/jit-grunt
     */
    require('jit-grunt')(grunt);

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            sass: {
                options: {
                    // sourceMap: true,
                    nonull: true,
                    style: 'compressed'
                },
                dist: {
                    files: {
                        'dist/css/styles.css': 'assets/scss/main.scss'
                    }
                }
            },
            copy: {
                dist: {
                    src: ['*.html', '!assests/**/*.css', '!assests/**/*.js'],
                    dest: 'dist',
                    expand: true
                    
                }
            },
            watch: {
                files: ['assests/scss/*.scss', 'assests/js/*.js'],
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true
                }
            },
            cssmin: {
                target: {
                    files: [{
                        expand: true,
                        cwd: 'dist/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'dist/css',
                    }]
                }
            },
            clean: {
                build: {
                    src: ['dist/']
                }
            },
            connect: {
              options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
              },
              dist: {
                options: {
                  open: true,
                  base:{
                       path: 'dist/',
                    options: {
                        index: 'index.html',
                        maxAge: 300000
                    }
                  }
                }
              }
            }
        });

        // Tasks
        grunt.registerTask('build',[
            'clean',
            'sass',
            'cssmin',
            'copy'
        ]);
        grunt.registerTask('default', ['build', 'connect:dist', 'watch']);
    }
})()
