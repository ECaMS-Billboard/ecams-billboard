//Data is currently hardcoded as it does/should not change frequently, it can be added to the API later
//But it would be unnecessary to do so
const resourcesData = [
  {
    title: 'IT Support',
    phone: '(815) 836-5950',
    email: 'servicedesk@lewisu.edu',
    description: 'Provides assistance with technical issues.',
    hours: 'Monday-Thursday: 7:30am-10pm Friday: 7:30am-5pm Saturday: 9am-5pm Sunday: 1:30pm-10pm.',
  },
  {
    title: 'Financial Aid',
    phone: '(815) 836-5263',
    email: 'finaid@lewisu.edu',
    description: 'Helps students understand and manage their financial aid packages, scholarships, and loans.',
    hours: 'Monday-Friday: 8:30am-5:00pm.',
  },
  {
    title: "Registrar's Office",
    phone: '(815) 836-5133',
    email: 'registrar@lewisu.edu',
    description: 'Manages student records, course registration, and academic transcripts.',
    hours: 'Monday-Friday: 8:30am-5:00pm.',
  },
  {
    title: 'Admissions',
    phone: '(815) 836-5250',
    email: 'admissions@lewisu.edu',
    description: 'Handles applications, campus visits, and enrollment processes for prospective students.',
    hours: 'Monday-Friday: 8:30am to 5:00pm.',
  },
  {
    title: 'LUPD Non-Emergency',
    phone: '(815) 836-5222',
    hours: '24 hours a day, 7 days a week, year round.',
  },
  {
    title: 'LUPD Emergency',
    phone: '(815) 836-5911',
    hours: '24 hours a day, 7 days a week, year round.',
  },
  {
    title: 'Student Wellness Center',
    phone: '(815) 836-5455',
    description: 'Offers health and counseling services to support student well-being and mental health.',
    hours: 'Fall and Spring: Monday-Friday, 8:30am-5pm; Summer: Tuesday-Wednesday, 8:30am-5pm.',
  },
];

function Resources() {
  return (
    <body className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-red-950 p-8 flex flex-col items-center">
      <div className="max-w-xl mx-auto mt-10">
        <div className='text-center'>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
            Resources
          </h1>
        </div>
        {resourcesData.map((resource, index) => (
          <div
            key={index}
            className="bg-zinc-900/80 border border-zinc-700 p-6 rounded-2xl shadow-lg backdrop-blur-sm text-gray-200 mt-6 hover:border-red-600 transition flex flex-col items-center justify-center text-center"
          >    <h2 className="text-xl font-bold text-white mb-2 border-b border-red-600 pb-1 tracking-tight">
              {resource.title}
            </h2>
            <p className="text-gray-300">
              Phone: <a className="underline text-blue-400" href={`tel:${resource.phone}`}>{resource.phone}</a>
            </p>
            {resource.email && (
              <p className="text-gray-300 flex items-center justify-center gap-2 mt-1">
                <a
                  href={`mailto:${resource.email}`}
                  className="text-blue-400 font-medium hover:text-blue-300 hover:underline transition"
                  title={resource.email}
                >
                  Contact via Email
                </a>
              </p>
            )}
            {resource.description && (
              <p className="text-gray-400 italic mt-1">{resource.description}</p>
            )}
            <p className="mt-2 text-sm text-gray-400">
              <span className="font-semibold text-red-500">Office Hours:</span> {resource.hours}
            </p>
          </div>
          
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-500">
            © 2025 Lewis University • Powered by ECaMS
          </p>
    </body>
  );
}

export default Resources;
