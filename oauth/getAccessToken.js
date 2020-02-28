"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _exchangeToken = _interopRequireDefault(require("./exchangeToken"));

var _AccessToken = require("./AccessToken");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAccessToken(_x) {
  return _getAccessToken.apply(this, arguments);
}

function _getAccessToken() {
  _getAccessToken = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var client_id, client_secret, code, response, accessToken;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client_id = _ref.client_id, client_secret = _ref.client_secret, code = _ref.code;
            _context.prev = 1;
            _context.next = 4;
            return (0, _exchangeToken.default)({
              client_id: client_id,
              client_secret: client_secret,
              code: code
            });

          case 4:
            response = _context.sent;
            accessToken = response.access_token;

            if (accessToken) {
              _context.next = 8;
              break;
            }

            throw new Error('Unable to retreive access token from Strava response');

          case 8:
            (0, _AccessToken.setAccessToken)(accessToken);
            return _context.abrupt("return", accessToken);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            throw new Error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _getAccessToken.apply(this, arguments);
}

var _default = getAccessToken;
exports.default = _default;