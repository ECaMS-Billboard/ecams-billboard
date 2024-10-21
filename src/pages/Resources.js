const resourcesData = [
    {
      title: 'Student Admissions',
      phone: '123-456-7890',
      email: 'admissions@example.com',
    },
    {
      title: 'Campus Police',
      phone: '098-765-4321',
      email: 'police@example.com',
    },
    {
      title: 'Health and Wellness Center',
      phone: '555-123-4567',
      email: 'wellness@example.com',
    },
    {
      title: 'Financial Aid',
      phone: '444-555-6666',
      email: 'financialaid@example.com',
    },
    {
      title: "Registrar's Office",
      phone: '777-888-9999',
      email: 'registrar@example.com',
    },
  ];
  
  function Resources() {
    return (
      <div className="min-h-screen bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-red-700 text-3xl font-bold mb-4">Resources</h1>
        {resourcesData.map((resource, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2 className="text-gray-300">{resource.title}</h2>
            <p className="underline text-blue-500">
              Phone: <a href={`tel:${resource.phone}`}>{resource.phone}</a>
            </p>
            <p className="underline text-blue-500">
              Email: <a href={`mailto:${resource.email}`}>{resource.email}</a>
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Resources;
