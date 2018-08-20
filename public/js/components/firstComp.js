webpackJsonp([0],{

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Joe',
      health: 100,
      level: 1,
      lowLevelClass: 'danger-red'
    };
    _this.clickedBoy = _this.clickedBoy.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'clickedBoy',
    value: function clickedBoy() {
      this.setState({
        health: this.state.health - 25
      }, function () {
        console.log('HEY I CLICKED THE BOY HIS HEALTH IS NOW' + this.state.health);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'headersection' },
        _react2.default.createElement(
          'div',
          { className: 'blue-bg ' + (this.state.health < 55 ? this.state.lowLevelClass : '') },
          _react2.default.createElement(
            'div',
            { className: 'user-info' },
            _react2.default.createElement(
              'h3',
              null,
              'name: ',
              this.state.name
            ),
            _react2.default.createElement(
              'h3',
              null,
              'health: ',
              this.state.health
            ),
            _react2.default.createElement(
              'h3',
              null,
              'level: ',
              this.state.level
            )
          ),
          _react2.default.createElement('img', { src: '/img/bape2.png', alt: 'guy with bape on', onClick: this.clickedBoy })
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[98]);