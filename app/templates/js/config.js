'use strict';

require.config({
    deps: [
        'main'
    ],

    paths: {
        'jquery': '../../bower_components/jquery/jquery.min',
        'jquery-mask': '../../bower_components/jQuery-Mask-Plugin/jquery.mask',
        'jquery-maskmoney': '../../bower_components/jquery-maskmoney/jquery.maskMoney',
        'jquery-cookie': '../../bower_components/jquery.cookie/jquery.cookie',
        'md5': '../../bower_components/JavaScript-MD5/js/md5',
        'i18next': '../../bower_components/i18next/release/i18next.amd.withJQuery-1.7.1',
        'bootstrap': '../../bower_components/bootstrap/bootstrap/js/bootstrap',
        'bootstrap-notify': '../../bower_components/bootstrap-notify/js/bootstrap-notify',
        'bootstrap-datepicker': '../../bower_components/bootstrap-datepicker/js/bootstrap-datepicker',
        'bootstrap-modal': '../../bower_components/bootstrap-modal/js/bootstrap-modal',
        'bootstrap-modalmanager': '../../bower_components/bootstrap-modal/js//bootstrap-modalmanager',
        'select2': '../../bower_components/select2/select2',
        'select2-locale': '../../bower_components/select2/select2_locale_pt-BR',
        'underscore': '../../bower_components/lodash/lodash',
        'backbone': '../../bower_components/backbone/backbone',
        'backbone-subroute': '../../bower_components/backbone.subroute/dist/backbone.subroute.min',
        'backbone-syphon': '../../bower_components/backbone.syphon/lib/amd/backbone.syphon',
        'backbone-pageable': '../../bower_components/backbone-pageable/lib/backbone-pageable',
        'backbone-route-filter': '../../bower_components/backbone-route-filter/backbone-route-filter',
        'backgrid': '../../bower_components/backgrid/lib/backgrid',
        'backgrid-paginator': '../../bower_components/backgrid-paginator/backgrid-paginator'
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        'jquery-mask': {
            deps: [
                'jquery'
            ]
        },
        'jquery-maskmoney': {
            deps: [
                'jquery'
            ]
        },
        'jquery-cookie': {
            deps: [
                'jquery'
            ]
        },
        'md5': {
            deps: [
                'jquery'
            ]
        },
        'i18next': {
            deps: [
                'jquery'
            ], 
            exports: 'i18n'
        },
        'bootstrap': {
            deps: [
                'jquery'
            ]
        },
        'bootstrap-notify': {
            deps: [
                'bootstrap'
            ]
        },
        'bootstrap-datepicker': {
            deps: [
                'bootstrap'
            ]
        },
        'bootstrap-modal': {
            deps: [
                'bootstrap'
            ]
        },
        'bootstrap-modalmanager': {
            deps: [
                'bootstrap-modal'
            ]
        },
        'select2': {
            deps: [
                'jquery'
            ]
        },
        'select2-locale': {
            deps: [
                'select2'
            ]
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [
                'jquery',
                'underscore'
            ],
            exports: 'Backbone'
        },
        'backbone-subroute': {
            deps: [
                'backbone'
            ]
        },
        'backbone-syphon': {
            deps: [
                'backbone'
            ]
        },
        'backbone-pageable': {
            deps: [
                'backbone'
            ]
        },
        'backbone-route-filter': {
            deps: [
                'backbone'
            ]
        },
        'backgrid': {
            deps: [
                'backbone'
            ]
        },
        'backgrid-paginator': {
            deps: [
                'backgrid',
                'backbone-pageable'
            ]
        }
    }
});