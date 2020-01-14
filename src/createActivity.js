import queryStrava from './queryStrava';

/**
 * Create an Activity (createActivity)
 * Creates a manual activity for an athlete, requires activity:write scope.
 */
function createActivity({
  name,
  type,
  start_date_local: startDateLocal,
  elapsed_time: elapsedTime,
  ...rest
}) {
  const missing = [
    name,
    type,
    startDateLocal,
    elapsedTime,
  ].reduce((missed, param) => {
    if (!param) {
      missed.push(param);
    }

    return missed;
  }, []);

  if (missing.length > 0) {
    throw new Error(`${missing.join(', ')} is required by createActivity`);
  }

  return queryStrava({
    path: '/activities',
    method: 'POST',
    body: JSON.stringify({
      name,
      type,
      start_date_local: startDateLocal,
      elapsed_time: elapsedTime,
      ...rest,
    }),
  });
}

export default createActivity;
