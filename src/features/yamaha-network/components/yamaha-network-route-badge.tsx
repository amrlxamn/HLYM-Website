import {
  NetworkRouteBadge,
  NetworkRouteLabel,
  NetworkRouteStat,
  NetworkRouteValue
} from "../styles/yamaha-network-map.styles";

type YamahaNetworkRouteBadgeProps = {
  distanceKilometers: number;
  durationMinutes: number | null;
};

export function YamahaNetworkRouteBadge({
  distanceKilometers,
  durationMinutes
}: YamahaNetworkRouteBadgeProps) {
  if (durationMinutes === null) {
    return null;
  }

  const hours = Math.floor(durationMinutes / 60);
  const minutes = Math.round(durationMinutes % 60);
  const hourUnit = hours === 1 ? "HOUR" : "HOURS";
  const durationLabel = hours > 0 ? `${hours} ${hourUnit} ${minutes} MIN` : `${minutes} MIN`;

  return (
    <NetworkRouteBadge aria-label="Route information">
      <NetworkRouteStat>
        <NetworkRouteValue>{distanceKilometers.toFixed(1)} KM</NetworkRouteValue>
        <NetworkRouteLabel>DISTANCE</NetworkRouteLabel>
      </NetworkRouteStat>
      <NetworkRouteStat>
        <NetworkRouteValue>{durationLabel}</NetworkRouteValue>
        <NetworkRouteLabel>EST. DRIVE</NetworkRouteLabel>
      </NetworkRouteStat>
    </NetworkRouteBadge>
  );
}
