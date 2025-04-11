function Events() {
  return (
    <body className="min-h-screen bg-black p-8 flex flex-col items-center">
      <div className="max-w-xl mx-auto mt-10">
        <div className='text-center'>
          <h1 className="text-red-500 text-3xl font-bold mb-4">Student Events</h1>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-300">
          <p className="text-gray-300">
            Stay engaged with campus life by exploring a variety of student events happening throughout the semester. 
            From club meetings and guest lectures to social gatherings and career fairs, there's always something going on!
            <br/><br/>
            Check out the full calendar of student events by clicking the link below:
          </p>
          <div className="text-center mt-4">
            <a 
              className="underline text-blue-400 text-lg font-bold" 
              href="https://www.lewisu.edu/calendar/index.htm?calid=student-events" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Student Events Calendar
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Events;
