import getCommentsByActivityId from '../../src/activities/getCommentsByActivityId';
import queryStrava from '../../src/queryStrava';

jest.mock('../../src/queryStrava');

describe('getCommentsByActivityId', () => {
  it('should handle querying comments on the strava activity', () => {
    getCommentsByActivityId({ id: '1234', page: 1, per_page: 10 });

    expect(queryStrava).toHaveBeenCalledWith({
      path: '/activities/1234/comments?page=1&per_page=10',
    });
  });
});
