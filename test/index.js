var chai = require('chai');
var should = chai.should();
var mrspiderJsdom = require('..');

describe('mrspider-jsdom', function () {

    var validPage;
    var validSpider;
    var validNext;
    var jQuery = require('jquery');

    beforeEach(function () {
        validPage = {
            content: '<h1>hello</h1>'
        };
        validSpider = {};
        validNext = function () {
        };
        validPage.spider = validSpider;
    });

    describe('next', function () {

        it('should call the next argument', function (done) {
            var msJsdom = mrspiderJsdom();
            msJsdom._transform(validPage, done);
        });

        it('should throw an error if no next argument passed', function () {
            var msJsdom = mrspiderJsdom();
            (function () {
                msJsdom._transform(validPage, null);
            }).should.throw(Error);
        });
    });

    describe('page', function () {

        it('should get the $ property set', function (done) {
            var msJsdom = mrspiderJsdom();
            msJsdom._transform(validPage, function () {
                should.exist(validPage.$);
                done();
            });
        });

        it('should get the $ property to an instance of jquery', function (done) {
            var msJsdom = mrspiderJsdom();
            msJsdom._transform(validPage, function () {
                validPage.$('h1').text().should.equal('hello');
                done();
            });

        });
    })
});
