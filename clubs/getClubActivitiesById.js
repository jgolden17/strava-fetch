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
 * List Club Activities (getClubActivitiesById)
 * Retrieve recent activities from members of a specific club.
 * The authenticated athlete must belong to the requested club in order to hit
 * this endpoint. Pagination is supported. Athlete profile visibility is
 * respected for all activities.
 */
function getClubActivitiesById(_ref) {
  var id = _ref.id,
      queries = _objectWithoutProperties(_ref, ["id"]);

  var query = (0, _getQueryString.default)(queries);
  return (0, _queryStrava.default)({
    path: "/clubs/".concat(id, "/activities").concat(query)
  });
}

var _default = getClubActivitiesById;
exports.default = _default;