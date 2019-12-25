import queryStrava from './queryStrava';

/**
 * List Activity Kudoers (getKudoersByActivityId)
 * Returns the athletes who kudoed an activity identified by an identifier.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
function getKudoersByActivityId(id) {
  if (!id) {
    throw new Error('ID is required by getKudoersByActivityId');
  }

  return queryStrava({ path: `/activities/${id}/kudos` });
}

export default getKudoersByActivityId;
