module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/screen.css': 'sass/screen.scss'
                },
                options:{
                    style:'compressed' // Nested, compiled, expanded, compressed
                }
            }
        },

        autoprefixer: {
            dev: {
                src: 'css/*.css'
            }
        },

        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                'js/scripts.min.js': ['src/scripts.js']
                }
            }
        },

        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                    "css/*.css",
                    "*.html"
                    ]
                },
            options: {
                open: false,
                browser: "google chrome",
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
            }
        },

        watch: {
            html: {
                files: '*.html'
            },
            css: {
                files: 'sass/*.scss',
                tasks: ['sass', 'autoprefixer']
            },
            scripts: {
                files: 'src/*.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('default', ['sass', 'watch']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};