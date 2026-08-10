import { useYamahaNetworkDealers } from "../hooks/use-yamaha-network-dealers";
import { NetworkStatus } from "../styles/yamaha-network-status.styles";
import { YamahaNetworkContent } from "./yamaha-network-content";

export function YamahaNetworkPage() {
  const { dealers, error, isLoading } = useYamahaNetworkDealers();

  if (isLoading) {
    return <NetworkStatus aria-live="polite">Loading dealer network...</NetworkStatus>;
  }

  if (error || dealers.length === 0) {
    return <NetworkStatus role="alert">{error ?? "No dealers are available."}</NetworkStatus>;
  }

  return <YamahaNetworkContent dealers={dealers} />;
}
