import updateLoggedInAthlete from '../src/updateLoggedInAthlete';
import queryStrava from '../src/queryStrava';

jest.mock('../src/queryStrava');

describe('updateLoggedInAthlete', () => {
  it('should update the athletes', () => {
    updateLoggedInAthlete({ name: 'Muddy J Waters' });

    expect(queryStrava).toHaveBeenCalledWith({
      path: '/athlete',
      method: 'PUT',
      body: '{"name":"Muddy J Waters"}',
    });
  });
});
