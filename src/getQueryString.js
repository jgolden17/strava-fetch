import { stringify } from 'query-string';

function getQueryString(queries) {
  const queryString = stringify(queries);
  return queryString ? `?${queryString}` : '';
}

export default getQueryString;
