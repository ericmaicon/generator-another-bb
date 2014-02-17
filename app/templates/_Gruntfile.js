'use strict';

module.exports = function(grunt) {
 
    //http://www.felipefialho.com/blog/2013/grunt-voce-deveria-estar-usando/#.Uhj917z6Zpj
    //http://blog.caelum.com.br/por-uma-web-mais-rapida-26-tecnicas-de-otimizacao-de-sites/
    grunt.initConfig({

        //config data to use in another tasks
        config: {
            dev: 'app/',
            dist: 'dist/'
        },

        //watch to development
        watch: {
            dev : {
                files : [
                    '<%=config.dev%>/**/*.{scss,jpg,png,ejs}'
                ],
                tasks : ['spritepacker', 'sass', 'jst']
            }
        },

        //cleaning the dist folder
        clean: {
            dist: {
                src: ['<%=config.dist%>']
            },
            defaults: {
                src: [
                    '<%=config.dist%>/defaults.json'
                ]
            }
        },

        //task to compile sass into css
        sass: {
            dist: {
                files: {
                    '<%=config.dev%>/css/main.css': '<%=config.dev%>/css/main.scss'
                }
            }
        },

        //task to concat and uglifying js files with requirejs
        requirejs: {
            dist: {
                options: {
                    findNestedDependencies: true,
                    mainConfigFile: '<%=config.dev%>/js/config.js',
                    baseUrl : '<%=config.dev%>/js',
                    name : 'app',
                    out : '<%=config.dist%>/js/md5.js',
                    optimize : 'none'
                    // optimize : 'uglify',
                    // preserveLicenseComments: false,
                    // useStrict: true
                }
            }
        },

        //copying html files to dist folder
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%=config.dev%>',
                    src: [
                        './font/**',
                        './locales/**',
                        '**.html'
                    ],
                    dest: '<%=config.dist%>'
                }]
            }
        },

        //change the CSS and JS files to a md5 hash to avoid cache
        hashify: {
            simple: {
                options: {
                    basedir: '<%=config.dist%>',
                    hashmap: 'defaults.json'
                },
                files: [{
                    src: '<%=config.dist%>/js/md5.js',
                    dest: 'js/{{hash}}.js'
                },
                {
                    src: '<%=config.dev%>/css/main.css',
                    dest: 'css/{{hash}}.css'
                }]
            }
        },

        //changing the HTML with the CSS and JS MD5 hash
        useref: {
            html: '<%=config.dist%>/index.html',
            temp: '<%=config.dist%>'
        },

        //minifying the HTML files
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '<%=config.dist%>',
                    src: '*.html',
                    dest: '<%=config.dist%>'
                }]
            }
        },

        //compiling all JST files
        jst: {
            options: {
                amd: true
            },
            compile: {
                files: {
                    '<%=config.dev%>/js/helpers/template.js': ['<%=config.dev%>/js/**/*.ejs']
                }
            }
        },

        //sprites
        //https://npmjs.org/package/grunt-sprite-packer
        spritepacker: {
            default_options: {
                options: {
                    template: '<%=config.dev%>/sprites/sprites.css.tpl',
                    destCss: '<%=config.dev%>/css/_sprites.scss',
                    baseUrl: '../images/',
                    background: 'none',
                    padding: 1
                },
                files: {
                    '<%=config.dev%>/images/sprites.png': ['<%=config.dev%>/sprites/*.{png,jpg}']
                }
            }
        },

        //image min
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%=config.dev%>',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%=config.dist%>'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-hashify');
    grunt.loadNpmTasks('grunt-useref');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-sprite-packer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('build', [
        'clean',
        'spritepacker',
        'sass',
        'jst',
        'requirejs',
        'copy',
        'hashify',
        'useref',
        'htmlmin',
        'imagemin',
        'clean:defaults'
    ]);

    grunt.registerTask('dev', [
        'spritepacker',
        'sass',
        'jst'
    ]);

    grunt.registerTask('default', [
        'watch'
    ]);

};
