import { LayoutGrid, List } from "lucide-react";
import { NetworkLayoutButton, NetworkLayoutToggle } from "../styles/yamaha-network-controls.styles";

type YamahaNetworkLayoutToggleProps = {
  isGrid: boolean;
  onToggle: (isGrid: boolean) => void;
};

export function YamahaNetworkLayoutToggle({ isGrid, onToggle }: YamahaNetworkLayoutToggleProps) {
  return (
    <NetworkLayoutToggle>
      <NetworkLayoutButton
        $isActive={!isGrid}
        aria-label="List layout"
        aria-pressed={!isGrid}
        onClick={() => onToggle(false)}
        type="button"
      >
        <List />
      </NetworkLayoutButton>
      <NetworkLayoutButton
        $isActive={isGrid}
        aria-label="Grid layout"
        aria-pressed={isGrid}
        onClick={() => onToggle(true)}
        type="button"
      >
        <LayoutGrid />
      </NetworkLayoutButton>
    </NetworkLayoutToggle>
  );
}
