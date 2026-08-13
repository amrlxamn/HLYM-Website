import { Button } from "@/components/ui";
import {
  ButtonPreviewGrid,
  ButtonPreviewLabel,
  ButtonPreviewRow
} from "../styles/doc-button-preview.styles";

export function DocButtonPreview() {
  return (
    <ButtonPreviewGrid>
      <ButtonPreviewRow>
        <ButtonPreviewLabel>Primary</ButtonPreviewLabel>
        <Button fullWidth>Explore models</Button>
      </ButtonPreviewRow>
      <ButtonPreviewRow>
        <ButtonPreviewLabel>Secondary</ButtonPreviewLabel>
        <Button fullWidth variant="secondary">
          Request access
        </Button>
      </ButtonPreviewRow>
      <ButtonPreviewRow>
        <ButtonPreviewLabel>Related</ButtonPreviewLabel>
        <Button size="sm" variant="related">
          Discover more
        </Button>
      </ButtonPreviewRow>
    </ButtonPreviewGrid>
  );
}
