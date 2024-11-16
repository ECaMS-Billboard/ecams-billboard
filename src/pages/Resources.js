const resourcesData = [
    {
      title: 'IT Support',
      phone: '(815) 836-5950',
      email: 'servicedesk@lewisu.edu'
    },
    {
      title: 'Financial Aid',
      phone: '(815) 836-5263',
      email: '',
    },
    {
      title: "Registrar's Office",
      phone: '(815) 836-5133',
      email: '',
    },
    {
      title: 'Admissions',
      phone: '(815) 836-5250',
      email: '',
    },
    {
      title: 'LUPD',
      phone: '(815) 836-5222',
      email: '',
    },
  ];

  function Resources() {
    return (
      <body className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
        <h1 className="text-red-500 text-3xl font-bold mb-4">Resources</h1>
        <div>
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
      </body>
    );
  }

  export default Resources;
