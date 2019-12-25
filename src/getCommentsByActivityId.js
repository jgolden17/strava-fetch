import queryStrava from './queryStrava';

/**
 * List Activity Comments (getCommentsByActivityId)
 * Returns the comments on the given activity.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
async function getCommentsByActivityId(id) {
  if (!id) {
    throw new Error('ID is required by getCommentsByActivityId');
  }

  return queryStrava({ path: `/activities/${id}/comments` });
}

export default getCommentsByActivityId;
