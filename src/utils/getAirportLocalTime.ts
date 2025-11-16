import { Airport } from "@/interfaces";

// Helper to calculate local time string
export const getAirportLocalTime = (airport: Partial<Airport>) => {
  const now = new Date();

  // If you have a proper IANA timezone like "Europe/Madrid", use this
  if (airport.timezone) {
    try {
      return now.toLocaleString("es-ES", {
        timeZone: airport.timezone,
        hour12: false,
      });
    } catch {
      // fall back to GMT
    }
  }

  // Fallback: use GMT offset (e.g. "+1", "-3", "+02:00")
  if (airport.gmt) {
    const match = String(airport.gmt).match(/([+-]?\d{1,2})(?::?(\d{2}))?/);
    if (match) {
      const hours = Number(match[1]);
      const minutes = match[2] ? Number(match[2]) : 0;

      const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
      const localMs = utcMs + (hours * 60 + minutes) * 60_000;
      const localDate = new Date(localMs);

      return localDate.toLocaleString("es-ES", {
        hour12: false,
      });
    }
  }

  return null;
};
