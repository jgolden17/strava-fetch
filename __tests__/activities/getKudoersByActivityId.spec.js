import getKudoersByActivityId from '../../src/activities/getKudoersByActivityId';
import queryStrava from '../../src/queryStrava';

jest.mock('../../src/queryStrava');

describe('getKudoersByActivityId', () => {
  it('should handle querying kudoers on the strava activity', () => {
    getKudoersByActivityId({ id: '1234', page: 1, per_page: 10 });

    expect(queryStrava).toHaveBeenCalledWith({
      path: '/activities/1234/kudos?page=1&per_page=10',
    });
  });
});
