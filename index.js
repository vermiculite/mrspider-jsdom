var jsdom = require('jsdom');

module.exports = function() {
    return function(page, spider, next) {
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

    }
};
