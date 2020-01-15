import queryStrava from '../queryStrava';

/**
 * Update Athlete (updateLoggedInAthlete)
 * Update the currently authenticated athlete.
 * Requires profile:write scope.
 */
function updateLoggedInAthlete(athlete) {
  return queryStrava({
    path: '/athlete',
    method: 'PUT',
    body: JSON.stringify(athlete),
  });
}

export default updateLoggedInAthlete;
