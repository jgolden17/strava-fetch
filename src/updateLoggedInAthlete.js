import queryStrava from './queryStrava';

/**
 * Update Athlete (updateLoggedInAthlete)
 * Update the currently authenticated athlete.
 * Requires profile:write scope.
 */
function updateLoggedInAthlete(body) {
  return queryStrava({
    path: '/athlete',
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

export default updateLoggedInAthlete;
