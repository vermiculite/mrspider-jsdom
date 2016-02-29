"use strict";

let jsdom = require('jsdom');
let through2 = require('through2');

module.exports = function() {
    return through2(function(page, next) {
        if(typeof next !== 'function') {
            throw new Error('next is required to be a function for mrspider-jsdom.');
        }
        jsdom.env(
            page.content,
            ["./node_modules/jquery/dist/jquery.js"],
            function (err, window) {
                page.$ = window.$;
                next();
            }
        );

    });
};
