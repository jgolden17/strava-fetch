"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getQueryString = _interopRequireDefault(require("../getQueryString"));

var _queryStrava = _interopRequireDefault(require("../queryStrava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List Athlete Activities (getLoggedInAthleteActivities)
 * Returns the activities of an athlete for a specific identifier.
 * Requires activity:read. Only Me activities will be filtered out unless
 * requested by a token with activity:read_all.
 */
function getLoggedInAthleteActivities(queries) {
  var query = (0, _getQueryString.default)(queries);
  return (0, _queryStrava.default)({
    path: "/athlete/activities".concat(query)
  });
}

var _default = getLoggedInAthleteActivities;
exports.default = _default;