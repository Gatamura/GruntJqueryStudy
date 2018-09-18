var grunt = require('grunt');

module.exports = function(){

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'public/',
                    keepalive: false,
                    open: {
                        target: 'http://localhost:8000'
                    }
                }
            }
        },
        watch: {
            dev: {
                files: ['public/*.html', 'public/*.css', 'public/*.styl'],
                // tasks: ['browser']
                tasks: ['stylus:all'],
            },
            options: {
                livereload: true,
                spawn: true
            }
        },
        stylus: {
            all: {
                options: {
                      paths: ['stylus'],

                      import: [   
                        'nib/*'
                      ]
                    },
                    files: {
                      'public/css/style.css': 'public/**.styl', // 1:1 compile
                    },
            },
        },
    });

    grunt.registerTask('server', [
        'connect:server',
        'watch:dev',
        'browserSync'
    ]);
};