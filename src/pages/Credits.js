function Credits() {
  return (
    <body className="min-h-screen bg-black p-8 flex flex-col items-center">
      <div className="max-w-xl mx-auto">
        <div className='text-center'>
          <h1 className="text-red-500 text-3xl font-bold mb-4">Credits</h1>
        </div>
        <p className="text-gray-300 mb-6 text-center">
          This project is made possible by the dedication of various contributors. 
        </p>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-300">
  <h2 className="text-xl font-bold text-white mb-2">Current Contributors</h2>
  <ul className="list-disc list-inside">
    <li>Morgan Krupp</li>
    <li>Kacper Zalewski</li>
    <li>Wiktoria Cioch-Gradzik</li>
    <li>Nicolas Delgado</li>
    <li>Marcos Esparza</li>
    <li>Ardian Dardovski</li>
    <li>Joshua Vachachira</li>
  </ul>

  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Junior Developers</h3>
  <ul className="list-disc list-inside">
    <li>Kiran Gokula</li>
    <li>Tony Kochev</li>
    <li>Niko Salvador</li>
    <li>Alex Tardecilla</li>
    <li>Luke Thormeyer</li>
  </ul>
</div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-300 mt-6">
          <h2 className="text-xl font-bold text-white mb-2">Past Contributors</h2>
          <ul className="list-disc list-inside">
            <li>Samuel Swedo</li>
            <li>Noah Van Gorp</li>
            <li>Johan Olmos Zavala</li>
            <li>Anthony Missana</li>
            <li>Gabe Carlson</li>
            <li>Justin Cordero</li>
            <li>Ryan Hinkle</li>
            <li>Michael Szostak</li>
            <li>David Abrutis</li>
            <li>Fernando Alfaro</li>
            <li>Ryan Anderson</li>
            <li>Ryan Dodson</li>
            <li>Pablo Enriquez</li>
            <li>Shane Frantz</li>
            <li>Katherine Groppe</li>
            <li>Collin Koldoff</li>
            <li>Ryan Leiteritz</li>
            <li>Luke Mendiola</li>
            <li>Justina Piwoni</li>
            <li>Jacob Prince</li>
          </ul>
        </div>

        <p className="text-gray-300 mt-6 text-center">
          If you have contributed and don't see your name here, please contact us at {' '}
          <a className="underline text-blue-400" href="mailto:ecamsbb@gmail.com">ecamsbb@gmail.com</a>.
        </p>
      </div>
    </body>
  );
}

export default Credits;
