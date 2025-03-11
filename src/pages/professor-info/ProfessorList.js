import { useState, useEffect } from "react";

function Professors() {
  const [professors, setProfessors] = useState([]);
  const [isReverse, setIsReverse] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Fetch professor data
  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await fetch("https://ecamsbb-api.azurewebsites.net/prof-list");
        const data = await response.json();
        setProfessors(data);
      } catch (error) {
        console.error("Error fetching professor data:", error);
      } finally {
        setIsLoading(false); // Stop loading indicator
      }
    };

    fetchProfessors();
  }, []);

  // Sort function
  const sortProfessors = (professors) => {
    return professors.sort((a, b) => {
      const nameA = `${a.fname} ${a.lname}`.toLowerCase();
      const nameB = `${b.fname} ${b.lname}`.toLowerCase();
      return isReverse ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB);
    });
  };

  // Filter for search
  const filterProfessors = (professors) => {
    return professors.filter((prof) =>
      `${prof.fname} ${prof.lname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const toggleSortOrder = () => {
    setIsReverse(!isReverse);
  };

  const sortedList = sortProfessors([...professors]);
  const filteredList = filterProfessors(sortedList);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-red-700 text-4xl font-bold mb-2 text-center">Professor Directory</h1>
        {isLoading && ( // Show message only when loading
          <p className="text-grey-400 text-center mb-6">Professors will take a minute to load. Please wait patiently.</p>
        )}

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Professors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-800 text-white w-full sm:w-96"
          />
          <button
            onClick={toggleSortOrder}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Sort {isReverse ? "Z-A" : "A-Z"}
          </button>
        </div>

        {/* Professors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredList.map((info, index) => {
            // Determine image source
            const imageSrc = info.image ? `/ProfImages/${info.image}` : "/ProfImages/StaticProfessor.png";

            return (
              <div key={index} className="bg-neutral-800 p-4 rounded-lg text-center">
                <img
                  src={imageSrc}
                  alt={`${info.fname} ${info.lname}`}
                  className="w-32 h-32 mx-auto mb-3 rounded-full border-4 border-red-700 object-cover"
                  onError={(e) => { e.target.src = "/ProfImages/StaticProfessor.png"; }} // Fallback if image fails to load
                />
                <h2 className="text-lg font-semibold">{info.fname} {info.lname}</h2>
                <p className="text-gray-400">{info.office}</p>
                <a href={`mailto:${info.email}`} className="text-blue-500 underline">
                  {info.email}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Professors;
