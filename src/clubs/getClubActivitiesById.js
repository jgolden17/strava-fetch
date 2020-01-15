import queryStrava from '../queryStrava';
import getQueryString from '../getQueryString';

/**
 * List Club Activities (getClubActivitiesById)
 * Retrieve recent activities from members of a specific club.
 * The authenticated athlete must belong to the requested club in order to hit
 * this endpoint. Pagination is supported. Athlete profile visibility is
 * respected for all activities.
 */
function getClubActivitiesById({ id, ...queries }) {
  const query = getQueryString(queries);
  return queryStrava({ path: `/clubs/${id}/activities${query}` });
}

export default getClubActivitiesById;
