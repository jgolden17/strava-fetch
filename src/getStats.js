import queryStrava from './queryStrava';
import getQueryString from './getQueryString';

/**
 * Get Athlete Stats (getStats)
 * Returns the activity stats of an athlete.
 */
function getStats({ id, ...queries }) {
  const query = getQueryString(queries);
  return queryStrava({ path: `/athletes/${id}/stats${query}` });
}

export default getStats;
