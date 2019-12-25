import queryStrava from './queryStrava';
import getQueryString from './getQueryString';

/**
 * List Activity Kudoers (getKudoersByActivityId)
 * Returns the athletes who kudoed an activity identified by an identifier.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
function getKudoersByActivityId({ id, page, perPage }) {
  if (!id) {
    throw new Error('ID is required by getKudoersByActivityId');
  }

  const query = getQueryString({ page, perPage });

  return queryStrava({ path: `/activities/${id}/kudos${query}` });
}

export default getKudoersByActivityId;
