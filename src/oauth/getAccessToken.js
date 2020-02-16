import exchangeToken from './exchangeToken';
import { setAccessToken } from './AccessToken';

async function getAccessToken({ client_id, client_secret, code }) {
  try {
    const response = await exchangeToken({ client_id, client_secret, code });

    const { access_token: accessToken } = response;

    if (!accessToken) {
      throw new Error('Unable to retreive access token from Strava response');
    }

    setAccessToken(accessToken);

    return accessToken;
  } catch (e) {
    throw new Error(e);
  }
}

export default getAccessToken;
