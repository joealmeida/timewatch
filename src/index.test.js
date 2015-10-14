var expect = require('chai').expect;
var watch = require('../dist/index.js');

describe('timewatch', function () {
    describe('now', function () {
        it('should be an int', function () {
            expect(watch.now()).to.be.a('number')
        })

        it('should be tracking the current time', function () {
            var now = watch.now();

            setTimeout(function () {
                expect(now).to.be.below(watch.now())
            }, 200)
        })
    })
    describe('time', function() {
        it('should be returning the time that the watch runned', function (){
            var now = watch.now();
            watch.start();
            setTimeout(function () {
                watch.stop();
                expect(watch.time()).equals(watch.lapTime)
            },200)
        })
    })
});
