"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AccessToken = require("./oauth/AccessToken");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function queryStrava(_x) {
  return _queryStrava.apply(this, arguments);
}

function _queryStrava() {
  _queryStrava = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var path, _ref$method, method, _ref$body, body, stravaAPI, accessToken, response, errorMessage;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            path = _ref.path, _ref$method = _ref.method, method = _ref$method === void 0 ? 'GET' : _ref$method, _ref$body = _ref.body, body = _ref$body === void 0 ? null : _ref$body;
            stravaAPI = process.env.STRAVA_API_URL;

            if (stravaAPI) {
              _context.next = 4;
              break;
            }

            throw new Error('Unable to resolve STRAVA_API_URL');

          case 4:
            accessToken = (0, _AccessToken.getAccessToken)();

            if (accessToken) {
              _context.next = 7;
              break;
            }

            throw new Error('Unable to resolve STRAVA_ACCESS_TOKEN');

          case 7:
            _context.next = 9;
            return fetch("".concat(stravaAPI).concat(path), {
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              },
              method: method,
              body: body
            });

          case 9:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", response.json());

          case 12:
            errorMessage = "".concat(response.status, " (").concat(response.statusText, ")");
            throw new Error(errorMessage);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _queryStrava.apply(this, arguments);
}

var _default = queryStrava;
exports.default = _default;