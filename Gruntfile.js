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
            // Make sure code styles are up to par and there are no obvious mistakes
            jshint: {
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                },
                all: {
                    src: [
                        'Gruntfile.js',
                        'assests/js/{,*/}*.js'
                    ]
                }
            },
            watch: {
                files: ['assests/scss/**/*.scss', 'assests/js/**/*.js'],
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true
                }
            },
            copy: {
                dist: {
                    src: ['*.html', '!assests/**/*.css', '!assests/**/*.js', 'bower_components/html5shiv/dist/html5shiv.min.js'],
                    dest: 'dist',
                    expand: true
                    
                },
                libs: {
                    src: ['bower_components/html5shiv/dist/html5shiv.min.js'],
                    dest: 'dist/js/libs/',
                    expand: true,
                    flatten: true, // expand: true and flatten: true to copy file without folders
                    filter: 'isFile'
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
            'jshint',
            'sass',
            'cssmin',
            'copy'
        ]);
        grunt.registerTask('default', ['build', 'connect:dist', 'watch']);
    };
})();
