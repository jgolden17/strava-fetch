import queryStrava from '../queryStrava';

/**
 * Get Zones (getLoggedInAthleteZones)
 * Returns the the authenticated athlete's heart rate and power zones.
 */
function getZones() {
  return queryStrava({ path: '/athlete/zones' });
}

export default getZones;
