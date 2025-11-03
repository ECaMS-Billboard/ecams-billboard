function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-black text-gray-200 flex flex-col items-center justify-center px-6">
    <div className="max-w-xl mx-auto mt-10 backdrop-blur-md bg-gray-800/70 p-8 rounded-2xl shadow-lg border border-red-600">
        <div className="text-center">
          <h1 className="text-red-500 text-4xl font-extrabold mb-4 tracking-wide">Student Events</h1>
        </div>
        <p className="text-gray-300 leading-relaxed text-center">
          Stay engaged with campus life by exploring a variety of student events happening throughout the semester. 
          From club meetings and guest lectures to social gatherings and career fairs, there's always something going on!
        </p>
        <div className="text-center mt-6">
          <a 
            className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-full font-semibold shadow-md"
            href="https://www.lewisu.edu/calendar/index.htm?calid=student-events" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Student Events Calendar
          </a>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400 text-center">
          Powered by <span className="text-red-500 font-semibold">ECaMS</span> • Lewis University
        </p>
      </div>
    </div>
  );
}

export default Events;

