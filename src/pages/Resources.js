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
      <div style={{ padding: '20px' }}>
        <h1>Resources</h1>
        {resourcesData.map((resource, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2>{resource.title}</h2>
            <p>
              Phone: <a href={`tel:${resource.phone}`}>{resource.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${resource.email}`}>{resource.email}</a>
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Resources;