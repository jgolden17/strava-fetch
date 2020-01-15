import queryStrava from './queryStrava';

/**
 * Get Activity Zones (getZonesByActivityId)
 * Summit Feature. Returns the zones of a given activity.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
function getZonesByActivityId({ id }) {
  return queryStrava({ path: `/activities/${id}/zones` });
}

export default getZonesByActivityId;
