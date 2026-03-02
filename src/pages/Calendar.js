import React from "react";

function Calendar() {
  const events = {
    3: "Career Fair",
    7: "Club Meeting",
    12: "Midterm Exams",
    18: "Guest Speaker",
    25: "Hackathon",
  };

  const daysInMonth = 31;
  const firstDayOffset = 6; // 0 = Sunday

  const totalBoxes = firstDayOffset + daysInMonth;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-black text-gray-200 flex flex-col items-center px-6 py-12">
      
      <div className="max-w-6xl w-full backdrop-blur-md bg-gray-800/70 p-8 rounded-2xl shadow-lg border border-red-600">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-red-500 text-4xl font-extrabold tracking-wide">
            Campus Calendar
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

                    {/* Event */}
                    <div className="mt-2 text-sm text-center text-red-400 font-medium">
                      {events[dayNumber]}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400 text-center">
          Powered by <span className="text-red-500 font-semibold">ECaMS</span> • Lewis University
        </p>

      </div>
    </div>
  );
}

export default Calendar;