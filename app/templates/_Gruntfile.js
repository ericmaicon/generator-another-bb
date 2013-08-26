'use strict';

module.exports = function( grunt ) {
 
    var scripts = [

    ];
 
    //http://www.felipefialho.com/blog/2013/grunt-voce-deveria-estar-usando/#.Uhj917z6Zpj
    //http://blog.caelum.com.br/por-uma-web-mais-rapida-26-tecnicas-de-otimizacao-de-sites/
    grunt.initConfig({

        //config data to use in another tasks
        config: {
            dev: 'app/',
            dist: 'dist/'
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

        //copying and minifying images
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%=config.dev%>/img/',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%=config.dist%>/img/'
                }]
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
                        '**.html'
                    ],
                    dest: '<%=config.dist%>',
                    dot: true
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
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-hashify');
    grunt.loadNpmTasks('grunt-useref');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('build', [
        'clean',
        'sass',
        'imagemin',
        'requirejs',
        'copy',
        'hashify',
        'useref',
        'htmlmin',
        'clean:defaults'
    ]);

    grunt.registerTask( 'default', [
        'sass'
    ]);

};
