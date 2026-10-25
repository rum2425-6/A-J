/**
 * Calendar utilities for generating Google Calendar links and downloading .ics files
 */

export function getGoogleCalendarUrl(weddingData) {
  const startDate = "20261128T123000Z"; // UTC
  const endDate = "20261129T183000Z";
  const title = encodeURIComponent(`${weddingData.bride.name} & ${weddingData.groom.name}'s Wedding Celebration`);
  const details = encodeURIComponent(
    `We are delighted to invite you to celebrate the wedding of ${weddingData.bride.fullName} & ${weddingData.groom.fullName}.\n\nVenue: ${weddingData.venue.name}, ${weddingData.venue.city}\n\nWebsite: ${weddingData.share.url}`
  );
  const location = encodeURIComponent(`${weddingData.venue.name}, ${weddingData.venue.address}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
}

export function downloadIcsFile(weddingData) {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Aarav and Meera Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:wedding-aarav-meera-2026@invitation.com",
    "DTSTAMP:20260101T000000Z",
    "DTSTART:20261128T123000Z",
    "DTEND:20261129T183000Z",
    `SUMMARY:${weddingData.bride.name} & ${weddingData.groom.name}'s Royal Wedding`,
    `DESCRIPTION:Celebrate the wedding of ${weddingData.bride.fullName} & ${weddingData.groom.fullName} at ${weddingData.venue.name}.`,
    `LOCATION:${weddingData.venue.name}, ${weddingData.venue.address}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${weddingData.bride.name}_${weddingData.groom.name}_Wedding.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
