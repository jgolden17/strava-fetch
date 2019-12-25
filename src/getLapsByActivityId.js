import queryStrava from './queryStrava';

/**
 * List Activity Laps (getLapsByActivityId)
 * Returns the laps of an activity identified by an identifier.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
function getLapsByActivityId(id) {
  if (!id) {
    throw new Error('ID is required by getLapsByActivityId');
  }

  return queryStrava({ path: `/activities/${id}/laps` });
}

export default getLapsByActivityId;
