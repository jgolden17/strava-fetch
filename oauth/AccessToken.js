"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAccessToken = setAccessToken;
exports.getAccessToken = getAccessToken;
var STRAVA_ACCESS_TOKEN = 'STRAVA_ACCESS_TOKEN';

function setAccessToken(token) {
  global[Symbol.for(STRAVA_ACCESS_TOKEN)] = token;
}

function getAccessToken() {
  return global[Symbol.for(STRAVA_ACCESS_TOKEN)];
}