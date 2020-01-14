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

##### `createActivity(activity)`

```
{
	name,
	type,
	start_date_local,
	elapsed_time,
	description,
	distance,
	trainer,
	commute,
}
```

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

### Athletes

#### Get Authenticated Athlete

##### getLoggedInAthlete()

Returns the currently authenticated athlete. Tokens with profile:read_all scope will receive a detailed athlete representation; all others will receive a summary representation.

`GET /athlete`

#### Get Zones

##### getLoggedInAthleteZones()

Returns the the authenticated athlete's heart rate and power zones. Requires profile:read_all.

`GET /athlete/zones`

#### Get Athlete Stats

##### getStats(id, page = 1, perPage = 30)

Returns the activity stats of an athlete.

`GET /athletes/{id}/stats`

#### Update Athlete

##### updateLoggedInAthlete(weight)
Update the currently authenticated athlete. Requires profile:write scope.

`PUT /athlete`

### Clubs

#### List Club Activities

##### getClubActivitiesById(id, page = 1, perPage = 30)

Retrieve recent activities from members of a specific club. The authenticated athlete must belong to the requested club in order to hit this endpoint. Pagination is supported. Athlete profile visibility is respected for all activities.

`GET /clubs/{id}/activities`

#### List Club Administrators

##### getClubAdminsById(id, page = 1, perPage = 30)

Returns a list of the administrators of a given club.

`GET /clubs/{id}/admins`

#### Get Club

##### getClubById(id)

Returns a given club using its identifier.

`GET /clubs/{id}`

#### List Club Members

##### getClubMembersById(id, page = 1, perPage = 30)

Returns a list of the athletes who are members of a given club.

`GET /clubs/{id}/members`

#### List Athlete Clubs

##### getLoggedInAthleteClubs(page = 1, perPage = 30)

Returns a list of the clubs whose membership includes the authenticated athlete.

`GET /athlete/clubs`

#### Get Equipment

##### getGearById(id)

Returns an equipment using its identifier.

`GET /gear/{id}`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)