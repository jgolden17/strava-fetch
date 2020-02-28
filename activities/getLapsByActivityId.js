"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryStrava = _interopRequireDefault(require("../queryStrava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List Activity Laps (getLapsByActivityId)
 * Returns the laps of an activity identified by an identifier.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
function getLapsByActivityId(_ref) {
  var id = _ref.id;
  return (0, _queryStrava.default)({
    path: "/activities/".concat(id, "/laps")
  });
}

var _default = getLapsByActivityId;
exports.default = _default;