import queryStrava from '../queryStrava';
import getQueryString from '../getQueryString';

/**
 * List Club Administrators. (getClubAdminsById)
 * Returns a list of the administrators of a given club.
 */
function getClubAdminsById({ id, ...queries }) {
  const query = getQueryString(queries);
  return queryStrava({ path: `/clubs/${id}/admins${query}` });
}

export default getClubAdminsById;
