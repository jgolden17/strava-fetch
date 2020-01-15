import queryStrava from './queryStrava';

/**
 * Create an Activity (createActivity)
 * Creates a manual activity for an athlete, requires activity:write scope.
 */
function createActivity(activity) {
  return queryStrava({
    path: '/activities',
    method: 'POST',
    body: JSON.stringify(activity),
  });
}

export default createActivity;
