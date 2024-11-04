function About() {
  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-red-700 text-3xl font-bold mb-4">About</h1>

        <p className="text-gray-300">
          ECaMS Billboard is a project maintained by students in the Software Systems Capstone
          (CPSC-49200) course. It serves as an advertising and informational platform for students
          to learn more about campus events and organizations
          <br/><br/>
          And while "ECaMS" is in the project name, and our only kiosk is located in the AS
          building, poster submissions are not necessarily restricted to this department. 
          Anything is acceptable as long as it is related to university events or organizations
          in some way.
          <br/><br/>
          Note that all submissions are being manually reviewed before they are displayed. Please
          use common sense for what is appropriate, do not abuse this platform.
          <br/><br/>
          Feel free to contact the development team at
          {' '}<a className="underline text-blue-400" href="mailto:ecamsbb@gmail.com">ecamsbb@gmail.com</a>{' '}
          if you have any questions.
        </p>
      </div>
    </div>
  );
}

export default About;
