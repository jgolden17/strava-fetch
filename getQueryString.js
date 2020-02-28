"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryString = require("query-string");

function getQueryString(queries) {
  var queryString = (0, _queryString.stringify)(queries);
  return queryString ? "?".concat(queryString) : '';
}

var _default = getQueryString;
exports.default = _default;