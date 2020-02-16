# Strava Fetch
> Fetch procedures for Strava API

An unofficial consumer for the official [Strava API](http://developers.strava.com/docs/reference/) using `fetch`.

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Security](#security)
- [API](#api)
	- [Authorization](#authorization)
	- [Activities](#activities)
	- [Athletes](#athletes)
	- [Clubs](#clubs)
- [Contributing](#contributing)
- [License](#license)

## Install

```bash
npm i strava-fetch
```

## Usage

Unless otherwise stated, each procedure takes an object of key-value pairs as its argument, the signature of which conforms to [Strava's API Reference](http://developers.strava.com/docs/reference/) for each endpoint.

For example, given Strava's `GET /activities/{id}` endpoint which takes the path parameter `id` and the query parameter `include_all_efforts`, `getActivities` would take the following form:

```js
import getActivityById from 'strava-fetch/activities/getActivityById';

const activity = await getActivity({
  id: '1234',
  include_all_efforts: true,
});

console.log(activity);

```

This project does not intend to exhaustively document the Strava API itself.  For more complete documentation see [Strava Developers](http://developers.strava.com/docs/reference/).

## Security

### Environment Variables

Some API procedures require properties that may be derived from environment variables rather than being passed as arguments.  In the case that an environment variable is defined, the coresponding function argument property may be considered as optional, otherwise it is required.  A list of property-variable pairs is provided below.

| API Property | Environment Variable |
|---------------|-------------------|
| `client_id`   | `STRAVA_CLIENT_ID`|
| `client_secret`   | `STRAVA_CLIENT_SECRET`|
| `redirect_uri` | `STRAVA_REDIRECT_URI` |
| `scrope` | `STRAVA_SCOPE` |

## API

### Authorization

#### Request Authorization `/oauth/getAuthorizationUrl`

Returns the URL of Strava's OAuth page - `http://www.strava.com/oauth/authorize` - where the user will be prompted to give consent to the requesting application.

The funtion takes the following argument signature:

```js
{
	/** @type {String} Your app's Client ID - Optional† */
	client_id,

  	/** @type {String} URL Strava should redirect the user to - Optional† */
  	redirect_uri,
  	
  	/** @type {String} Comma delineated list of scopes requested by the app - Optional† */
  	scope,
}
```

The return of this function should be used to set the client URL.

```
window.location = getAuthorizationUrl();
```

Once the user has granted/declined access priviledges, Strava will redirect the user to the URL provided to the `redirect_uri` property.

† If any optional property is not provided, the function will attempt to resolve it from the property's corresponding environment variable. See the [Security](#security) section.

#### Exchange Authorization Code for Access Token `/oauth/exchangeToken`

Exchanges the authorization code provided by Strava's authorization UI for an API access code.

The function takes the following argument signature:

```js
{
	/** @type {String} The code returned as a query to the redirect_uri - Required */
	code,
	
	/** @type {String} Your app's Client ID - Optional† */
	client_id,
	
	/** @type {String} Your app's Client Secret - Optional† */
	client_secret,
}
```

† If any property is not provided, the function will attempt to resolve it from the property's corresponding environment variable. See the [Security](#security) section.


### Activities

#### Create an Activity `/activities/createActivity`
Creates a manual activity for an athlete.  

#### Get Activity `/activities/getActivityById`
Returns the given activity that is owned by the authenticated athlete.  

#### List Activity Comments `/activities/getCommentsByActivityId`
Returns the comments on the given activity.  

#### List Activity Kudoers `/activities/getKudoersByActivityId`
Returns the athletes who kudoed an activity identified by an identifier.  

#### List Activity Laps `/activities/getLapsByActivityId`
Returns the laps of an activity identified by an identifier.

#### List Athlete Activities `/activities/getLoggedInAthleteActivities`
Returns the activities of an athlete for a specific identifier.

#### Get Activity Zones `/activities/getZonesByActivityId`
Summit Feature. Returns the zones of a given activity.

#### Update Activity `/activities/updateActivityById`
Updates the given activity that is owned by the authenticated athlete.


### Athletes

#### Get Authenticated Athlete `/athletes/getLoggedInAthlete`
Returns the currently authenticated athlete.

#### Get Zones `/athletes/getLoggedInAthleteZones`
Returns the the authenticated athlete's heart rate and power zones.

#### Get Athlete Stats `/athletes/getStats`
Returns the activity stats of an athlete.

#### Get Zones `/athletes/getLoggedInAthleteZones`
Returns the the authenticated athlete's heart rate and power zones.

#### Update Athlete `/athletes/updateLoggedInAthlete`
Update the currently authenticated athlete.


### Clubs

#### List Club Activities `/clubs/getClubActivitiesById`
Retrieve recent activities from members of a specific club.

#### List Club Administrators. `/clubs/getClubAdminsById`
Returns a list of the administrators of a given club.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)