var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();
var mrspiderJsdom = require('..');

describe('mrspider-jsdom', function() {

    var validPage;
    var validSpider;

    beforeEach(function() {
        validPage = {};
        validSpider = {};
    });

    describe('next', function() {

        it('should call the next argument', function() {
            var msJsdom = mrspiderJsdom();
            var next = sinon.spy();
            msJsdom(validPage, validSpider, next);
            next.called.should.equal(true);
        });
    });
});
