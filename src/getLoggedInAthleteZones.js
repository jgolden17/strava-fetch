import queryStrava from './queryStrava';

/**
 * Get Zones (getLoggedInAthleteZones)
 * Returns the the authenticated athlete's heart rate and power zones.
 * Requires profile:read_all.
 */
function getLoggedInAthleteZones() {
  return queryStrava({ path: '/athlete/zones' });
}

export default getLoggedInAthleteZones;
