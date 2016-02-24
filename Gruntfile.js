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
                        'dist/css/styles.css': 'app/assets/scss/main.scss'
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
                        'app/assests/js/{,*/}*.js'
                    ]
                }
            },
            concat: {
                options: {
                    separator: ';'
                },
                dist: {
                    src: ['dist/min-safe/js/app.js'],
                    dest: 'dist/js/app.min.js',
                    nonull: true
                }
            },
            uglify: {
                options: {
                  compress: {
                    global_defs: {
                      "DEBUG": false
                    },
                    dead_code: true
                  }
                },
                dist: {
                  files: {
                    'dist/js/app.min.js': ['dist/js/app.min.js']
                  }
                }
            },
            ngAnnotate: {
                options: {
                    singleQuotes: true
                },
                app: {
                    files: {
                        'dist/min-safe/js/app.js': ['bower_components/angular/angular.js', 'bower_components/angular-ui-router/release/angular-ui-router.js', 'app/assets/js/app.js']
                    },
                }
            },
            watch: {
                copy: {
                    files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
                    tasks: ['build']                    
                },
                styles: {
                    files: [ 'app/assets/scss/**/*.scss'],
                    tasks: ['sass', 'cssmin']
                },
                js: {
                    files: ['app/assets/js/{,*}*.js'],
                    tasks: ['build']
                },
                livereload: {
                    options: {
                        livereload: '<%= connect.options.livereload %>'
                    },
                    files: [
                        'app/{,*/}*.html'
                    ]
                }
            },
            copy: {
                html: {
                    cwd: 'app',
                    src: ['*.html', 'views/*.html', '!styles/**/*.css', '!js/**/*.js'],
                    dest: 'dist',
                    expand: true,
                },
                libs: {
                    src: ['bower_components/html5shiv/dist/html5shiv.min.js'],
                    dest: 'dist/js/libs/',
                    expand: true,
                    flatten: true, // expand: true and flatten: true to copy file without folders
                    filter: 'isFile'
                },
                js: {
                    cwd: 'app',
                    src: ['js/{,*}*.js'],
                    dest: 'dist/js/app.js',
                    expand: true,
                    flatten: true, // expand: true and flatten: true to copy file without folders 
                }
            },
            postcss: {
                options: {
                    processors: [
                        require('autoprefixer')(),
                        require('cssnext')(),
                        require('precss')()
                    ]
                }, dist: {
                    src: 'dist/css/styles.css',
                    dest: 'dist/css/styles.css'
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
            'postcss',
            'cssmin',
            'ngAnnotate',
            'concat',
            'uglify',
            'copy'
        ]);
            grunt.registerTask('default', ['build', 'connect:dist', 'watch']);
    };
})();
