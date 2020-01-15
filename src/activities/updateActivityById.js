import queryStrava from '../queryStrava';

/**
 * Update Activity (updateActivityById)
* Updates the given activity that is owned by the authenticated athlete.
* Requires activity:write. Also requires activity:read_all in order to update
* Only Me activities
*/
function updateActivityById({ id, ...activity }) {
  return queryStrava({
    path: `/activities/${id}`,
    method: 'PUT',
    body: JSON.stringify(activity),
  });
}

export default updateActivityById;
