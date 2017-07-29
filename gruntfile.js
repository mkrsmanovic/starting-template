module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files: 'src/sass/**/*.scss',
            tasks: ['sass:dist', 'postcss']
        },

        sass: {
            options: {
                style: 'compressed'
            },
            dist: {
                files: {
                    'src/style.css': 'src/sass/style.scss'
                }
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer') ({browsers: 'last 2 versions'})
                ]
            },
            dist: {
                src: 'src/style.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('run', 'sass');
    grunt.registerTask('default', 'watch');
};
