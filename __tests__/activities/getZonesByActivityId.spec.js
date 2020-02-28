import getZonesByActivityId from '../../src/activities/getZonesByActivityId';
import queryStrava from '../../src/queryStrava';

jest.mock('../../src/queryStrava');

describe('getZonesByActivityId', () => {
  it('should handle querying zones for the activity', () => {
    getZonesByActivityId({ id: '1234' });

    expect(queryStrava).toHaveBeenCalledWith({
      path: '/activities/1234/zones',
    });
  });
});
