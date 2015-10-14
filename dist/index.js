"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StopWatch = (function () {
    function StopWatch() {
        _classCallCheck(this, StopWatch);

        this.startTime = 0;
        this.lapTime = 0;
    }

    _createClass(StopWatch, [{
        key: "now",
        value: function now() {
            return new Date().getTime();
        }
    }, {
        key: "start",
        value: function start() {
            this.startTime = this.startTime ? this.startTime : this.now();
        }
    }, {
        key: "stop",
        value: function stop() {
            this.lapTime = this.startTime ? this.lapTime + this.now() - this.startTime : this.lapTime;
            this.startTime = 0;
        }
    }, {
        key: "reset",
        value: function reset() {
            this.lapTime = this.startTime = 0;
        }
    }, {
        key: "time",
        value: function time() {
            return this.lapTime + (this.startTime ? this.now() - this.startTime : 0);
        }
    }]);

    return StopWatch;
})();

exports["default"] = new StopWatch();
module.exports = exports["default"];
