import type { BrowserCoordinates } from "./dealer-location.types";

const EARTH_RADIUS_KILOMETERS = 6371;

export function getDistanceBetweenCoordinates(
  origin: BrowserCoordinates,
  destination: BrowserCoordinates
) {
  const [originLongitude, originLatitude] = origin;
  const [destinationLongitude, destinationLatitude] = destination;

  const originLatitudeRadians = (originLatitude * Math.PI) / 180;
  const destinationLatitudeRadians = (destinationLatitude * Math.PI) / 180;
  const latitudeDeltaRadians = ((destinationLatitude - originLatitude) * Math.PI) / 180;
  const longitudeDeltaRadians = ((destinationLongitude - originLongitude) * Math.PI) / 180;
  const haversineFactor =
    Math.sin(latitudeDeltaRadians / 2) * Math.sin(latitudeDeltaRadians / 2) +
    Math.cos(originLatitudeRadians) *
      Math.cos(destinationLatitudeRadians) *
      Math.sin(longitudeDeltaRadians / 2) *
      Math.sin(longitudeDeltaRadians / 2);

  return (
    2 *
    EARTH_RADIUS_KILOMETERS *
    Math.atan2(Math.sqrt(haversineFactor), Math.sqrt(1 - haversineFactor))
  );
}
