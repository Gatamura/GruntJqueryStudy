var grunt = require('grunt');

module.exports = function(){

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

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
                files: ['public/*.html', 'public/*.css'],
                // tasks: ['browser']
            },
            options: {
                livereload: true,
                spawn: true
            }
        }
    });

    grunt.registerTask('server', [
        'connect:server',
        'watch:dev',
        'browserSync'
    ]);
};