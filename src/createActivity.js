import queryStrava from './queryStrava';

/**
 * Create an Activity (createActivity)
 * Creates a manual activity for an athlete, requires activity:write scope.
 */
async function createActivity(body) {
  return queryStrava({
    path: '/activities',
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export default createActivity;
