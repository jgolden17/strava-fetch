"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getQueryString = _interopRequireDefault(require("../getQueryString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAuthorizationUrl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      client_id = _ref.client_id,
      redirect_uri = _ref.redirect_uri,
      scope = _ref.scope;

  var query = (0, _getQueryString.default)({
    client_id: client_id || process.env.STRAVA_CLIENT_ID,
    redirect_uri: redirect_uri || process.env.STRAVA_REDIRECT_URI,
    response_type: 'code',
    scope: scope || process.env.STRAVA_SCOPE
  });
  return "http://www.strava.com/oauth/authorize".concat(query);
}

var _default = getAuthorizationUrl;
exports.default = _default;