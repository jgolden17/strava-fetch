import { getAccessToken } from './oath/AccessToken';

async function queryStrava({ path, method = 'GET', body = null }) {
  const stravaAPI = process.env.STRAVA_API_URL;

  if (!stravaAPI) {
    throw new Error('Unable to resolve STRAVA_API_URL');
  }

  const accessToken = getAccessToken();

  if (!accessToken) {
    throw new Error('Unable to resolve STRAVA_ACCESS_TOKEN');
  }

  const response = await fetch(`${stravaAPI}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    method,
    body,
  });

  if (response.ok) {
    return response.json();
  }

  const errorMessage = `${response.status} (${response.statusText})`;

  throw new Error(errorMessage);
}

export default queryStrava;
