"use strict";

let jsdom = require('jsdom');
let through2 = require('through2');
let fs = require('fs');
let jquery = fs.readFileSync("./node_modules/jquery/dist/jquery.js", "utf-8");

module.exports = function() {
    return through2.obj(function(page, enc, next) {
        if (typeof next !== 'function') {
            throw new Error('next is required to be a function for mrspider-jsdom.');
        }
        var self = this;
        jsdom.env({
            html: page.content,
            src: [jquery],
            done: function(err, window) {
                page.$ = window.$;
                self.push(page);
                next();
            }
        });

    });
};
