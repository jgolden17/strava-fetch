import getLoggedInAthleteZones from '../src/getLoggedInAthleteZones';
import queryStrava from '../src/queryStrava';

jest.mock('../src/queryStrava');

describe('getLoggedInAthleteZones', () => {
  it('should query the athlete\'s zones', () => {
    getLoggedInAthleteZones();
    expect(queryStrava).toHaveBeenCalledWith({ path: '/athlete/zones' });
  });
});
