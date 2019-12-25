import queryStrava from './queryStrava';

/**
 * Get Activity (getActivityById)
 * Returns the given activity that is owned by the authenticated athlete.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
async function getActivityById(id) {
  if (!id) {
    throw new Error('ID is required by getActivityById');
  }

  return queryStrava({ path: `/activities/${id}` });
}

export default getActivityById;
