import React, { useEffect, useState } from "react";

function Calendar() {
  const [events, setEvents] = useState({});

  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2_gd5CM0S7ANLOkS-8LOFkzK2Mv42op2-GSM5H3pzG9MYDY0cHkHMQ5bqYD521gzr5lHI1T-S6Iig/pub?output=csv";

  // Get events from Google Sheets
  useEffect(() => {
  fetch(sheetUrl)
    .then((response) => response.text())
    .then((text) => {
      const lines = text.trim().split(/\r?\n/);
      const eventData = {};

      lines.slice(1).forEach((line) => {
        const parts = line.split(",");

        if (parts.length < 2) {
          return;
        }

        const date = parts[0].trim();
        const event = parts.slice(1).join(",").trim();

        const [month, day, year] = date.split("/").map(Number);

        if (!month || !day || !year || !event) {
          return;
        }

        if (!eventData[year]) {
          eventData[year] = {};
        }

        if (!eventData[year][month]) {
          eventData[year][month] = {};
        }

        if (!eventData[year][month][day]) {
          eventData[year][month][day] = [];
        }

        eventData[year][month][day].push(event);
      });

      setEvents(eventData);
    })
    .catch((error) => {
      console.error("Error loading calendar events:", error);
    });
}, []);
  // Get the current date in Central Time
  const now = new Date();

  const centralDate = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);

  const year = Number(
    centralDate.find((part) => part.type === "year").value
  );

  const month = Number(
    centralDate.find((part) => part.type === "month").value
  );

  // JavaScript months are 0-11
  const monthIndex = month - 1;

  // Get month name
  const monthName = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    month: "long",
  }).format(now);

  // Get number of days in the month
  const daysInMonth = new Date(year, month, 0).getDate();

  // Get the weekday the month starts on
  const firstDayOffset = new Date(
    year,
    monthIndex,
    1
  ).getDay();

  const totalBoxes = firstDayOffset + daysInMonth;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-black text-gray-200 flex flex-col items-center px-6 py-12">

      <div className="max-w-6xl w-full backdrop-blur-md bg-gray-800/70 p-8 rounded-2xl shadow-lg border border-red-600">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-red-500 text-4xl font-extrabold tracking-wide">
            {monthName} {year}
          </h1>

          <p className="text-gray-400 mt-2">
            Stay up to date with important events happening this month.
          </p>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 text-center font-semibold mb-2 text-gray-300">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-3">

          {Array.from({ length: totalBoxes }).map((_, index) => {
            const dayNumber = index - firstDayOffset + 1;

            const dayEvents =
              events[year]?.[month]?.[dayNumber] || [];

            return (
              <div
                key={index}
                className="h-28 p-2 rounded-xl bg-gray-900/60 border border-gray-700 hover:border-red-500 transition"
              >
                {dayNumber > 0 && dayNumber <= daysInMonth && (
                  <>
                    {/* Date */}
                    <div className="text-sm font-bold text-gray-300">
                      {dayNumber}
                    </div>

                    {/* Events */}
                    <div className="mt-2 text-sm text-center text-red-400 font-medium">
                      {dayEvents.map((event, eventIndex) => (
                        <div key={eventIndex}>
                          {event}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}

        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400 text-center">
          Powered by{" "}
          <span className="text-red-500 font-semibold">
            ECaMS
          </span>{" "}
          • Lewis University
        </p>

      </div>
    </div>
  );
}

export default Calendar;
