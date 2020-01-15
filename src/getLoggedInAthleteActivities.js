import getQueryString from './getQueryString';
import queryStrava from './queryStrava';

/**
 * List Athlete Activities (getLoggedInAthleteActivities)
 * Returns the activities of an athlete for a specific identifier.
 * Requires activity:read. Only Me activities will be filtered out unless
 * requested by a token with activity:read_all.
 */
function getLoggedInAthleteActivities(queries) {
  const query = getQueryString(queries);
  return queryStrava({ path: `/athlete/activities${query}` });
}

export default getLoggedInAthleteActivities;
