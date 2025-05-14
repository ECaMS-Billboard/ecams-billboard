import { useState, useEffect } from 'react';

//Create the function that gathers the data
function Professors() {
  const [sortedProfessors, setSortedProfessors] = useState([]);
  const [isReverse, setIsReverse] = useState(false);

  //Fetch data from API
  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await fetch("https://https://ecams-billboard-api2-avgqcycwghf3fzct.centralus-01.azurewebsites.net/prof-list");
        const data = await response.json();
        setSortedProfessors(data);
      } catch (error) {
        console.error("Error fetching professor data:", error);
      }
    };

    fetchProfessors();
  }, []);

  //Sort the Professors
  const sortProfessors = (professors) => {
    return professors.sort((a, b) => {
      const nameA = `${a.fname} ${a.lname}`.toLowerCase();
      const nameB = `${b.fname} ${b.lname}`.toLowerCase();
      if (isReverse) {
        return nameB.localeCompare(nameA);
      } else {
        return nameA.localeCompare(nameB);
      }
    });
  };

  //Creats the function for the button
  const toggleSortOrder = () => {
    setIsReverse(!isReverse);
  };

  const sortedList = sortProfessors([...sortedProfessors]);

  //Create display
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-red-700 text-3xl font-bold mb-4">Professor Information</h1>
        
        <button
          onClick={toggleSortOrder}
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        >
          Sort {isReverse ? 'Alphabetically (Z-A)' : 'Alphabetically (A-Z)'}
        </button>

        {sortedList.map((info, index) => (
          <p key={index} className="text-gray-300">
            {info.fname} {info.lname}{' '}
            <a className="underline text-blue-500" href={`mailto:${info.Email}`}>
              {info.email}
            </a>{' '}
            {info.office}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Professors;
