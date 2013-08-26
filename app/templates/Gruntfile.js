'use strict';

module.exports = function( grunt ) {
 
    var scripts = [

    ];
 
    //http://www.felipefialho.com/blog/2013/grunt-voce-deveria-estar-usando/#.Uhj917z6Zpj
    //http://blog.caelum.com.br/por-uma-web-mais-rapida-26-tecnicas-de-otimizacao-de-sites/
    grunt.initConfig({

        //dados necessários para as outras tarefas
        config: {
            dev: 'app/',
            dist: 'dist/'
        },

        //limpando a pasta de distribuição
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

        //tarefa para compilar o sass para css
        sass: {
            dist: {
                files: {
                    '<%=config.dev%>/css/main.css': '<%=config.dev%>/css/main.scss'
                }
            }
        },

        //copiando e minificando as imagens
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

        //essa task concatena os arquivos, cria um só e dá o uglify
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

        //copiando os arquivos html para a pasta de dist
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

        //muda o nome do arquivo CSS e JS para evitar cache
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

        //muda no html o css e o js
        useref: {
            html: '<%=config.dist%>/index.html',
            temp: '<%=config.dist%>'
        },

        //minificando o html
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
