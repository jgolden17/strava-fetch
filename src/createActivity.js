async function createActivity(body) {
  const stravaAPI = process.env.STRAVA_API_URL;
  const accessToken = process.env.STRAVA_ACCESS_TOKEN;

  const response = await fetch(`${stravaAPI}/activities`, {
    header: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    method: 'POST',
    body: JSON.stringify(body),
  });

  return response.json();
}

export default createActivity;
