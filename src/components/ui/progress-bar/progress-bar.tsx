import { ProgressFill, ProgressMeta, ProgressRoot, ProgressTrack } from "./progress-bar.styles";

export type ProgressBarProps = {
  label: string;
  max?: number;
  showValue?: boolean;
  value: number;
};

export function ProgressBar({ label, max = 100, showValue = true, value }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <ProgressRoot>
      <ProgressMeta>
        <span>{label}</span>
        {showValue ? <span>{Math.round(percentage)}%</span> : null}
      </ProgressMeta>
      <ProgressTrack
        aria-label={label}
        aria-valuemax={max}
        aria-valuemin={0}
        aria-valuenow={value}
        role="progressbar"
      >
        <ProgressFill $percentage={percentage} />
      </ProgressTrack>
    </ProgressRoot>
  );
}
