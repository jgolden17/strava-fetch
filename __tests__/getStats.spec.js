import getStats from '../src/getStats';
import queryStrava from '../src/queryStrava';

jest.mock('../src/queryStrava');

describe('getStats', () => {
  it('should query the athletes\'s stats', () => {
    getStats('1234');
    expect(queryStrava).toHaveBeenCalledWith({ path: '/athletes/1234/stats' });
  });

  it('should query the athletes\'s stats with pagination params', () => {
    getStats('1234', 1, 10);
    expect(queryStrava).toHaveBeenCalledWith({
      path: '/athletes/1234/stats?page=1&per_page=10',
    });
  });
});
