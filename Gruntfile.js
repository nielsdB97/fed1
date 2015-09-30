module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Watch task config
        watch: {
            sass: {
                files: "sass/*.scss",
                tasks: ['sass']
            },
            files: ["css/*.css"],
            options: {
                livereload: true,
                autoprefixer: true
            }
        },
        // SASS task config
        sass: {
            options: {
                style: "compressed"
            },
            dev: {
                files: {
                    // destination         // source file
                    "css/screen.css" : "sass/screen.scss"
                }
            }
        },
        // Using the BrowserSync Server for your static .html files.
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                    "css/*.css",
                    "*.html"
                    ]
                },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
            }
        },
        autoprefixer: {
            dist:{
                files: {
                    src: 'css/screen.css',
                    dest: 'css/screen.css'
                }
            }
        },
        // Uglify javascript files
        uglify: {
            compress: {
                files: {
                'js/output.min.js': ['src/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['sass', 'watch']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('test', ['clean', 'copy', 'autoprefixer', 'nodeunit']);

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};