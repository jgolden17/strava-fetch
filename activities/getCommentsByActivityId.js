"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryStrava = _interopRequireDefault(require("../queryStrava"));

var _getQueryString = _interopRequireDefault(require("../getQueryString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * List Activity Comments (getCommentsByActivityId)
 * Returns the comments on the given activity.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
function getCommentsByActivityId(_ref) {
  var id = _ref.id,
      queries = _objectWithoutProperties(_ref, ["id"]);

  var query = (0, _getQueryString.default)(queries);
  return (0, _queryStrava.default)({
    path: "/activities/".concat(id, "/comments").concat(query)
  });
}

var _default = getCommentsByActivityId;
exports.default = _default;