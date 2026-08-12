const MALAYSIA_TIME_ZONE = "Asia/Kuala_Lumpur";
const TIME_PATTERN = /(\d{1,2})(?:[.:](\d{1,2}))?\s*(am|pm)/gi;

export function isDealerOpenNow(hours: string, now = new Date()) {
  if (!hours || hours.trim().toLowerCase() === "closed") {
    return false;
  }

  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: MALAYSIA_TIME_ZONE,
    weekday: "short"
  }).format(now);
  const normalizedHours = hours.toLowerCase();

  if (normalizedHours.includes("mon - sat") && weekday === "Sun") {
    return false;
  }

  if (normalizedHours.includes("mon - fri") && (weekday === "Sat" || weekday === "Sun")) {
    return false;
  }

  const timeMatches = [...hours.matchAll(TIME_PATTERN)];

  if (timeMatches.length < 2) {
    return false;
  }

  const malaysiaTime = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    timeZone: MALAYSIA_TIME_ZONE
  }).formatToParts(now);
  const currentHour = Number(malaysiaTime.find((part) => part.type === "hour")?.value ?? 0);
  const currentMinute = Number(malaysiaTime.find((part) => part.type === "minute")?.value ?? 0);
  const parsedMinutes = timeMatches.slice(0, 2).map((match) => {
    const rawHour = Number(match[1]);
    const minute = Number(match[2] ?? 0);
    const period = match[3]?.toLowerCase();
    const hour = (rawHour % 12) + (period === "pm" ? 12 : 0);

    return hour * 60 + minute;
  });
  const currentMinutes = currentHour * 60 + currentMinute;
  const [openingMinutes, closingMinutes] = parsedMinutes;

  if (openingMinutes === undefined || closingMinutes === undefined) {
    return false;
  }

  if (closingMinutes < openingMinutes) {
    return currentMinutes >= openingMinutes || currentMinutes < closingMinutes;
  }

  return currentMinutes >= openingMinutes && currentMinutes < closingMinutes;
}
