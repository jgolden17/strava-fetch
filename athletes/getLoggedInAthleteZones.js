"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryStrava = _interopRequireDefault(require("../queryStrava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get Zones (getLoggedInAthleteZones)
 * Returns the the authenticated athlete's heart rate and power zones.
 * Requires profile:read_all.
 */
function getLoggedInAthleteZones() {
  return (0, _queryStrava.default)({
    path: '/athlete/zones'
  });
}

var _default = getLoggedInAthleteZones;
exports.default = _default;