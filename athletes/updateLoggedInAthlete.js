"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryStrava = _interopRequireDefault(require("../queryStrava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Update Athlete (updateLoggedInAthlete)
 * Update the currently authenticated athlete.
 * Requires profile:write scope.
 */
function updateLoggedInAthlete(athlete) {
  return (0, _queryStrava.default)({
    path: '/athlete',
    method: 'PUT',
    body: JSON.stringify(athlete)
  });
}

var _default = updateLoggedInAthlete;
exports.default = _default;