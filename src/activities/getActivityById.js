import queryStrava from '../queryStrava';
import getQueryString from '../getQueryString';

/**
 * Get Activity (getActivityById)
 * Returns the given activity that is owned by the authenticated athlete.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
function getActivityById({ id, ...queries }) {
  const query = getQueryString(queries);

  return queryStrava({ path: `/activities/${id}${query}` });
}

export default getActivityById;
