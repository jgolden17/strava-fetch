"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryStrava = _interopRequireDefault(require("../queryStrava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get Authenticated Athlete (getLoggedInAthlete)
 * Returns the currently authenticated athlete. Tokens with profile:read_all
 * scope will receive a detailed athlete representation; all others will receive
 * a summary representation.
 */
function getLoggedInAthlete() {
  return (0, _queryStrava.default)({
    path: '/athlete'
  });
}

var _default = getLoggedInAthlete;
exports.default = _default;