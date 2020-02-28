"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function exchangeToken(_x) {
  return _exchangeToken.apply(this, arguments);
}

function _exchangeToken() {
  _exchangeToken = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var client_id, client_secret, code, response, errorMessage;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client_id = _ref.client_id, client_secret = _ref.client_secret, code = _ref.code;
            _context.next = 3;
            return fetch('https://www.strava.com/oauth/token', {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              body: Object.entries({
                client_id: client_id || process.env.STRAVA_CLIENT_ID,
                client_secret: client_secret || process.env.STRAVA_CLIENT_SECRET,
                code: code,
                grant_type: 'authorization_code'
              }).map(function (item) {
                return item.join('=');
              }).join('&')
            });

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", response.json());

          case 6:
            errorMessage = "".concat(response.status, " ").concat(response.statusText);
            throw new Error(errorMessage);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _exchangeToken.apply(this, arguments);
}

var _default = exchangeToken;
exports.default = _default;