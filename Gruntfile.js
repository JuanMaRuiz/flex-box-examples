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
                        'css/styles-demo.css': 'scss/main.scss'
                    }
                }
            }
        });

        // Load plugins
        grunt.loadNpmTasks('grunt-sass');

        // Tasks
        grunt.registerTask('default', ['sass']);
    }
})()