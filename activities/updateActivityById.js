"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryStrava = _interopRequireDefault(require("../queryStrava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Update Activity (updateActivityById)
 * Updates the given activity that is owned by the authenticated athlete.
 * Requires activity:write. Also requires activity:read_all in order to update
 * Only Me activities
 */
function updateActivityById(_ref) {
  var id = _ref.id,
      activity = _objectWithoutProperties(_ref, ["id"]);

  return (0, _queryStrava.default)({
    path: "/activities/".concat(id),
    method: 'PUT',
    body: JSON.stringify(activity)
  });
}

var _default = updateActivityById;
exports.default = _default;