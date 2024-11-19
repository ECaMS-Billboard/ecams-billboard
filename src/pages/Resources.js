//Data is currently hardcoded as it does/should not change frequently, it can be added to the API later
//But it would be unnecessary to do so
const resourcesData = [
    {
      title: 'IT Support',
      phone: '(815) 836-5950',
      email: 'servicedesk@lewisu.edu'
    },
    {
      title: 'Financial Aid',
      phone: '(815) 836-5263',
      email: 'finaid@lewisu.edu',
    },
    {
      title: "Registrar's Office",
      phone: '(815) 836-5133',
      email: 'registrar',
    },
    {
      title: 'Admissions',
      phone: '(815) 836-5250',
      email: 'admissions@lewisu.edu',
    },
    {
      title: 'LUPD Non-Emergency',
      phone: '(815) 836-5222',
      email: '',
    },
    {
      title: 'LUPD Emergency',
      phone: '(815) 836-5911',
      email: '',
    },
  ];
  
  //Display everything
  function Resources() {
    return (
      <div className="min-h-screen bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-red-700 text-3xl font-bold mb-4">Resources</h1>
        {resourcesData.map((resource, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2 className="text-white font-bold">{resource.title}</h2>
            <p className="text-gray-300">
              Phone: <a className="underline text-blue-500" href={`tel:${resource.phone}`}>{resource.phone}</a>
            </p>
            <p className="text-gray-300">
              Email: <a className="underline text-blue-500" href={`mailto:${resource.email}`}>{resource.email}</a>
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Resources;
