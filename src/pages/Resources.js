import Navigationbar from '../components/Navigationbar';
//Data is currently hardcoded as it does/should not change frequently, it can be added to the API later
//But it would be unnecessary to do so
const resourcesData = [
    {
      title: 'IT Support',
      phone: '(815) 836-5950',
      email: 'servicedesk@lewisu.edu',
      description: 'Provides assistance with technical issues including account access, software, and hardware problems',
    },
    {
      title: 'Financial Aid',
      phone: '(815) 836-5263',
      email: 'finaid@lewisu.edu',
      description: 'Helps students understand and manage their financial aid packages, scholarships, and loans',
    },
    {
      title: "Registrar's Office",
      phone: '(815) 836-5133',
      email: 'registrar',
      description: 'Manages student records, course registration, and academic transcripts',
    },
    {
      title: 'Admissions',
      phone: '(815) 836-5250',
      email: 'admissions@lewisu.edu',
      description: 'Handles applications, campus visits, and enrollment processes for prospective students',
    },
    {
      title: 'LUPD Non-Emergency',
      phone: '(815) 836-5222',
      email: '',
      description: '24 hours a day, 7 days a week, year round',
    },
    {
      title: 'LUPD Emergency',
      phone: '(815) 836-5911',
      email: '',
      description: '24 hours a day, 7 days a week, year round',
    },
    {
      title: 'Student Wellness Center',
      phone: '(815) 836-5455',
      email: '',
      description: 'Offers health and counseling services to support student well-being and mental health. Hours are as follows: Fall and Spring, Monday-Friday, 8:30am - 5pm, and Summer Tuesday-Wenesday, 8:30am - 5pm',
    },
  ];
  //Display everything
  function Resources() {
    return (
      <body className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
        <Navigationbar/>
        <h1 className="text-red-500 text-3xl font-bold mb-4 mt-10">Resources</h1>
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
            </div>
          ))}
        </div>
      </body>
    );
  }

  export default Resources;
