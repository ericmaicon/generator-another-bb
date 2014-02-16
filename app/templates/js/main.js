require([
    'app',
    'backbone',
    'routes/router',
    'i18next',
    'select2',
    'select2-locale',
    'jquery-cookie',
    'bootstrap-notify'
], function (App, Backbone, AppRouter, i18n, numeral) {
    'use strict';

    //Configurando o ajax geral
    //http://stackoverflow.com/questions/6178366/backbone-js-fetch-results-cached
    $.ajaxSetup({
        cache: false
    });

    //Configurando o i18n
    var lng = "en";
    if ($.cookie("i18next")) {
        lng = $.cookie("i18next");
    }

    //Definindo a linguagem da lib de números
    numeral.language("pt-br");

    //iniciando o locale
    $.i18n.init({
        lng: lng,
        fallbackLng: lng,
        resGetPath: "locales/__lng__/__ns__.json"
    }, function(t) {
        //Chamando as rotas
        new AppRouter();

        //Iniciando o history do Backbone
        Backbone.history.start({
            pushState: false
        });
    });

    //colocando o estilo do select2
    $("select").select2();
});
