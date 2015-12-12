var chai = require('chai');
var should = chai.should();
var mrspiderJsdom = require('..');

describe('mrspider-jsdom', function () {

    var validPage;
    var validSpider;
    var validNext;
    var jQuery = require('jQuery');

    beforeEach(function () {
        validPage = {
            content: '<h1>hello</h1>'
        };
        validSpider = {};
        validNext = function () {
        };
    });

    describe('next', function () {

        it('should call the next argument', function (done) {
            var msJsdom = mrspiderJsdom();
            msJsdom(validPage, validSpider, done);
        });

        it('should throw an error if no next argument passed', function () {
            var msJsdom = mrspiderJsdom();
            (function () {
                msJsdom(validPage, validSpider, null);
            }).should.throw(Error);
        });
    });

    describe('page', function () {

        it('should get the $ property set', function (done) {
            var msJsdom = mrspiderJsdom();
            msJsdom(validPage, validSpider, function () {
                should.exist(validPage.$);
                done();
            });
        });

        it('should get the $ property to an instance of jquery', function (done) {
            var msJsdom = mrspiderJsdom();
            msJsdom(validPage, validSpider, function () {
                validPage.$('h1').text().should.equal('hello');
                done();
            });

        });
    })
});
