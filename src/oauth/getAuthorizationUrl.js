import getQueryString from '../getQueryString';

function getAuthorizationUrl({ client_id, redirect_uri, scope } = {}) {
  const query = getQueryString({
    client_id: client_id || process.env.STRAVA_CLIENT_ID,
    redirect_uri: redirect_uri || process.env.STRAVA_REDIRECT_URI,
    response_type: 'code',
    scope: scope || process.env.STRAVA_SCOPE,
  });

  return `http://www.strava.com/oauth/authorize${query}`;
}

export default getAuthorizationUrl;
