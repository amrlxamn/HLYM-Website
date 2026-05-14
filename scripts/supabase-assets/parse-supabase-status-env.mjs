export function parseSupabaseStatusEnv(stdout) {
  return new Map(
    stdout
      .split("\n")
      .map((line) => line.match(/^([A-Z0-9_]+)="?(.*?)"?$/))
      .filter(Boolean)
      .map((match) => [match[1], match[2]])
  );
}
