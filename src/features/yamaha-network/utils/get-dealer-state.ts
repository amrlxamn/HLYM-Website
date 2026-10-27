const STATE_PATTERNS = [
  ["Johor", /\bjohor\b|\bkluang\b/i],
  ["Kedah", /\bkedah\b/i],
  ["Kelantan", /\bkelantan\b/i],
  ["Kuala Lumpur", /\bkuala lumpur\b|\bwilayah persekutuan\b/i],
  ["Labuan", /\blabuan\b/i],
  ["Melaka", /\bmelaka\b|\bmalacca\b/i],
  ["Negeri Sembilan", /\bnegeri sembilan\b|\bseremban\b/i],
  ["Pahang", /\bpahang\b/i],
  ["Perak", /\bperak\b/i],
  ["Perlis", /\bperlis\b/i],
  ["Pulau Pinang", /\bpulau pinang\b|\bpenang\b|\bbutterworth\b|\bbukit mertajam\b|\bp\.w\./i],
  ["Putrajaya", /\bputrajaya\b/i],
  ["Sabah", /\bsabah\b|\bkota kinabalu\b|\blahad datu\b|\bsandakan\b/i],
  ["Sarawak", /\bsarawak\b|\bsibu\b|\bmiri\b/i],
  ["Selangor", /\bselangor\b/i],
  ["Terengganu", /\bterengganu\b|\btrengganu\b/i]
] as const;

export function getDealerState(address: string) {
  return STATE_PATTERNS.find(([, pattern]) => pattern.test(address))?.[0] ?? "Other locations";
}
