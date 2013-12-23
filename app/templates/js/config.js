'use strict';

require.config({
    deps: [
        'main'
    ],

    paths: {
        lodash: '../../bower_components/lodash/lodash',
        jquery: '../../bower_components/jquery/jquery.min',
        backbone: '../../bower_components/backbone/backbone'
    },

    shim: {
        lodash: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        backbone: {
            deps: [
                'lodash',
                'jquery'
            ],
            exports: 'Backbone'
        }
    }
});