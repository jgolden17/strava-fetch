import getLapsByActivityId from '../../src/activities/getLapsByActivityId';
import queryStrava from '../../src/queryStrava';

jest.mock('../../src/queryStrava');

describe('getLapsByActivityId', () => {
  it('should handle querying laps for the strava activity', () => {
    getLapsByActivityId({ id: '1234' });

    expect(queryStrava).toHaveBeenCalledWith({
      path: '/activities/1234/laps',
    });
  });
});
