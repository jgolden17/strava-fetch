import updateActivityById from '../../src/activities/updateActivityById';
import queryStrava from '../../src/queryStrava';

jest.mock('../../src/queryStrava');

describe('updateActivityById', () => {
  it('should handle updating the activity', () => {
    const activity = {
      id: '1234',
      name: 'gravel rabble',
      description: 'Gravel ride',
    };

    updateActivityById(activity);

    expect(queryStrava).toHaveBeenCalledWith({
      path: '/activities/1234',
      method: 'PUT',
      body: '{"name":"gravel rabble","description":"Gravel ride"}',
    });
  });
});
