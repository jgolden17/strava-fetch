import getLoggedInAthleteActivities from '../../src/activities/getLoggedInAthleteActivities';
import queryStrava from '../../src/queryStrava';

jest.mock('../../src/queryStrava');

describe('getLoggedInAthleteActivities', () => {
  it('should handle querying activities for the athlete', () => {
    getLoggedInAthleteActivities({
      before: 1234,
      after: 2345,
      page: 1,
      per_page: 10,
    });

    expect(queryStrava).toHaveBeenCalledWith({
      path: '/athlete/activities?after=2345&before=1234&page=1&per_page=10',
    });
  });
});
