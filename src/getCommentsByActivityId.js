import queryStrava from './queryStrava';
import getQueryString from './getQueryString';

/**
 * List Activity Comments (getCommentsByActivityId)
 * Returns the comments on the given activity.
 * Requires activity:read for Everyone and Followers activities.
 * Requires activity:read_all for Only Me activities.
 */
function getCommentsByActivityId({ id, page, perPage }) {
  if (!id) {
    throw new Error('ID is required by getCommentsByActivityId');
  }

  const query = getQueryString({ page, perPage });

  return queryStrava({ path: `/activities/${id}/comments${query}` });
}

export default getCommentsByActivityId;
