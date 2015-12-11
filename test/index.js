var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();
var mrspiderJsdom = require('..');

describe('mrspider-jsdom', function () {

    var validPage;
    var validSpider;
    var validNext;
    var jQuery = require('jQuery');

    beforeEach(function () {
        validPage = {};
        validSpider = {};
        validNext = function () {
        };
    });

    describe('next', function () {

        it('should call the next argument', function () {
            var msJsdom = mrspiderJsdom();
            var next = sinon.spy();
            msJsdom(validPage, validSpider, next);
            next.called.should.equal(true);
        });

        it('should throw an error if no next argument passed', function () {
            var msJsdom = mrspiderJsdom();
            (function () {
                msJsdom(validPage, validSpider, null);
            }).should.throw(Error);
        });
    });

    describe('page', function () {

        it('should get the $ property set', function () {
            var msJsdom = mrspiderJsdom();
            msJsdom(validPage, validSpider, validNext);
            should.exist(validPage.$);
        });

        it('should get the $ property to an instance of jquery', function () {
            var msJsdom = mrspiderJsdom();
            msJsdom(validPage, validSpider, validNext);
            validPage.$.should.be.instanceOf(jQuery);

        });
    })
});
