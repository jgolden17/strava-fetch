async function exchangeToken({ client_id, client_secret, code }) {
  const response = await fetch('https://www.strava.com/oauth/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    body: Object.entries({
      client_id: client_id || process.env.STRAVA_CLIENT_ID,
      client_secret: client_secret || process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    }).map((item) => item.join('=')).join('&'),
  });

  if (response.ok) {
    return response.json();
  }

  const errorMessage = `${response.status} ${response.statusText}`;

  throw new Error(errorMessage);
}

export default exchangeToken;
