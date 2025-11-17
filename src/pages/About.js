function About() {
  return (
    <body className="min-h-screen bg-gradient-to-br from-red-900 via-black to-black p-8 flex flex-col items-center">
      <div className="max-w-xl mx-auto mt-10">
        <div className='text-center'>
          <h1 className="text-red-500 text-3xl font-bold mb-4">About</h1>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-300">
          <p className="text-gray-300">
            ECaMS Billboard is a project maintained by students in the Software Systems Capstone
            (CPSC-49200) course. It serves as an advertising and informational platform for students
            to learn more about campus events and organizations.
            <br/><br/>
            While "ECaMS" is in the project name and our only kiosk is located in the AS
            building, poster submissions are not necessarily restricted to this department. 
            Anything is acceptable as long as it is related to university events or organizations
            in some way.
            <br/><br/>
            Note that all submissions are manually reviewed before they are displayed. Please
            use common sense for what is appropriate and do not abuse this platform.
            <br/><br/>
            Feel free to contact the development team at
            {' '}<a className="underline text-blue-400" href="mailto:ecamsbb@gmail.com">ecamsbb@gmail.com</a>{' '}
            if you have any questions.
          </p>
        </div>
      </div>
    </body>
  );
}

export default About;

