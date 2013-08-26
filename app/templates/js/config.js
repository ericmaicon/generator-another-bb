'use strict';

require.config({
    deps: [
        'main'
    ],

    paths: {
        lodash: '../../bower_components/lodash/lodash',
        zepto: '../../bower_components/zepto/zepto',
        backbone: '../../bower_components/backbone/backbone'
    },

    shim: {
        lodash: {
            exports: '_'
        },
        zepto: {
            exports: '$'
        },
        backbone: {
            deps: [
                'lodash',
                'zepto'
            ],
            exports: 'Backbone'
        }
    }
});