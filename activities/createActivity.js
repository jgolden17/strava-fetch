"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryStrava = _interopRequireDefault(require("../queryStrava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an Activity (createActivity)
 * Creates a manual activity for an athlete, requires activity:write scope.
 */
function createActivity(activity) {
  return (0, _queryStrava.default)({
    path: '/activities',
    method: 'POST',
    body: JSON.stringify(activity)
  });
}

var _default = createActivity;
exports.default = _default;