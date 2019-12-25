import getLoggedInAthlete from '../src/getLoggedInAthlete';
import queryStrava from '../src/queryStrava';

jest.mock('../src/queryStrava');

describe('getLoggedInAthlete', () => {
  it('should query the athlete', () => {
    getLoggedInAthlete();
    expect(queryStrava).toHaveBeenCalledWith({ path: '/athlete' });
  });
});
