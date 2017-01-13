'use strict';

$(function () {
    var Config = require('./includes/config');

    var main = function () {
        console.log("Got the following from Config", Config);
    };
    
    main();

});
