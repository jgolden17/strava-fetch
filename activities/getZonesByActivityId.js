"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryStrava = _interopRequireDefault(require("../queryStrava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get Activity Zones (getZonesByActivityId)
 * Summit Feature. Returns the zones of a given activity.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
function getZonesByActivityId(_ref) {
  var id = _ref.id;
  return (0, _queryStrava.default)({
    path: "/activities/".concat(id, "/zones")
  });
}

var _default = getZonesByActivityId;
exports.default = _default;