import queryStrava from './queryStrava';

/**
 * Update Activity (updateActivityById)
* Updates the given activity that is owned by the authenticated athlete.
* Requires activity:write. Also requires activity:read_all in order to update
* Only Me activities
*/
function updateActivityById(id, body) {
  if (!id) {
    throw new Error('ID is required by updateActivityById');
  }

  return queryStrava({
    path: `/activities/${id}`,
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

export default updateActivityById;
