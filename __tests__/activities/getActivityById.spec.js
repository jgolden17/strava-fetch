import getActivityById from '../../src/activities/getActivityById';
import queryStrava from '../../src/queryStrava';

jest.mock('../../src/queryStrava');

describe('getActivityById', () => {
  it('should handle querying the strava activity', () => {
    getActivityById({ id: '1234', include_all_efforts: true });

    expect(queryStrava).toHaveBeenCalledWith({
      path: '/activities/1234?include_all_efforts=true',
    });
  });
});
