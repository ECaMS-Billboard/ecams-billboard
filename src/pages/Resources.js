//Data is currently hardcoded as it does/should not change frequently, it can be added to the API later
//But it would be unnecessary to do so
const resourcesData = [
    {
      title: 'IT Support',
      phone: '(815) 836-5950',
      email: 'servicedesk@lewisu.edu',
      description: 'Provides assistance with technical issues',
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
      email: 'registrar',
      description: 'Manages student records, course registration, and academic transcripts',
      hours: 'Monday-Friday: 8:30am-5:00pm.',
    },
    {
      title: 'Admissions',
      phone: '(815) 836-5250',
      email: 'admissions@lewisu.edu',
      description: 'Handles applications, campus visits, and enrollment processes for prospective students',
      hours: 'Monday-Friday: 8:30am to 5:00pm.',
    },
    {
      title: 'LUPD Non-Emergency',
      phone: '(815) 836-5222',
      hours: '24 hours a day, 7 days a week, year round',
    },
    {
      title: 'LUPD Emergency',
      phone: '(815) 836-5911',
      hours: '24 hours a day, 7 days a week, year round',
    },
    {
      title: 'Student Wellness Center',
      phone: '(815) 836-5455',
      description: 'Offers health and counseling services to support student well-being and mental health.',
      hours: 'Hours are as follows: Fall and Spring, Monday-Friday, 8:30am-5pm, and Summer Tuesday-Wenesday, 8:30am-5pm.',
    },
  ];
  //Display everything
  function Resources() {
    return (
      <body className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
        <h1 className="text-red-500 text-3xl font-bold mb-4">Resources</h1>
        <div className="max-w-xl mx-auto">
          {resourcesData.map((resource, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2 className="text-white font-bold">{resource.title}</h2>
              <p className="text-gray-300">
                Phone: <a className="underline text-blue-500" href={`tel:${resource.phone}`}>{resource.phone}</a>
              </p>
              <p className="text-gray-300">
                Email: <a className="underline text-blue-500" href={`mailto:${resource.email}`}>{resource.email}</a>
              </p>
              <p className="text-gray-300">
                Description: {resource.description}
              </p>
              <p className="text-gray-300">
                Office Hours: {resource.hours}
              </p>
            </div>
          ))}
        </div>
      </body>
    );
  }

  export default Resources;
