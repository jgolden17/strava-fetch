# Strava Fetch
> Fetch procedures for Strava API

Unofficial Strava API written in JavaScript.

## Usage

```js
import createActivity from 'strava-fetch/lib/createActivity';

const activity = await getActivityById('1234');

console.log(activity);

```

## API

### Activities

#### Create an Activity

##### `createActivity()`

Creates a manual activity for an athlete, requires activity:write scope.

`POST /activities`

#### Get Activity

##### `getActivityById(id)`

Returns the given activity that is owned by the authenticated athlete. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

`GET /activities/{id}`

#### List Activity Comments

##### `getCommentsByActivityId(id)`

Returns the comments on the given activity. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

`GET /activities/{id}/comments`

#### List Activity Kudoers

##### `getKudoersByActivityId(id)`

Returns the athletes who kudoed an activity identified by an identifier. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

`GET /activities/{id}/kudos`

#### List Activity Laps

##### `getLapsByActivityId(id)`

Returns the laps of an activity identified by an identifier. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

`GET /activities/{id}/laps`

#### List Athlete Activities

##### `getLoggedInAthleteActivities()`

Returns the activities of an athlete for a specific identifier. Requires activity:read. Only Me activities will be filtered out unless requested by a token with activity:read_all.

`GET /athlete/activities`

#### Get Activity Zones

##### `getZonesByActivityId(id)`

Summit Feature. Returns the zones of a given activity. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

`GET /activities/{id}/zones`

#### Update Activity

##### `updateActivityById(id)`

Updates the given activity that is owned by the authenticated athlete. Requires activity:write. Also requires activity:read_all in order to update Only Me activities

`PUT /activities/{id}`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)