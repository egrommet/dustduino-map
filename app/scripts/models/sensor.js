/*global Air, Backbone*/

Air.Model = Air.Model || {};

(function () {
    'use strict';

    // collection for multiple sensors
    Air.Model.Sensors = Backbone.Model.extend({
        defaults: {
            id: null,
            sensor_name: '',

            // Default is the center of Sao Paulo
            lat: -23.6824124,
            lon: -46.5952992,

            address: '',
            serial: null,
            account: null,
            last_reading: {}
        }
    });
})();
