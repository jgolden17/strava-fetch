const STRAVA_ACCESS_TOKEN = 'STRAVA_ACCESS_TOKEN';

export function setAccessToken(token) {
  global[Symbol.for(STRAVA_ACCESS_TOKEN)] = token;
}

export function getAccessToken() {
  return global[Symbol.for(STRAVA_ACCESS_TOKEN)];
}
