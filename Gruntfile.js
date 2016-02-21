(function(){
    'use strict';
    //Project configuration
    module.exports = function(grunt) {
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
            }
        });

        // Load plugins
        grunt.loadNpmTasks('grunt-sass');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-cssmin');

        // Tasks
        grunt.registerTask('build',[
            'clean',
            'sass',
            'cssmin',
            'copy'
        ]);
        grunt.registerTask('default', ['sass', 'cssmin']);
    }
})()