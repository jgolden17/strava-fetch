import createActivity from '../../src/activities/createActivity';
import queryStrava from '../../src/queryStrava';

jest.mock('../../src/queryStrava');

describe('createActivity', () => {
  it('should handle creating the strava activity', () => {
    const activity = {
      name: 'gravel rabble',
      type: 'ride',
      elapsed_time: 1000,
      description: 'Gravel ride',
      distance: 20000,
    };

    createActivity(activity);

    expect(queryStrava).toHaveBeenCalledWith({
      path: '/activities',
      method: 'POST',
      body: '{"name":"gravel rabble","type":"ride","elapsed_time":1000,"description":"Gravel ride","distance":20000}',
    });
  });
});
