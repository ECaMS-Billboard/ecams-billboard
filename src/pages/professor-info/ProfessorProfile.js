import { useParams } from 'react-router-dom';

// normalizes score and returns color category
const getColorFromRmpScore = (score)  => {
  const colors = ['#f55c5c', '#f06f44', '#e5832c', '#d49614', '#bea801', '#a3b816', '#82c636', '#55d259'];
  return colors[Math.min(Math.floor((score-1) / (5-1) * (colors.length -1)), colors.length -1)];
}


function ProfessorProfile() {
    const { id } = useParams();
    const rmpScore = 5.0  // TODO get this from API route /prof-info/id

    return (
      <body className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
        <div className="max-w-xl mx-auto mt-10">
          <div className='text-center'>
            <h1 className="text-red-500 text-3xl font-bold mb-4">About</h1>
          </div>

          <div style={{color: getColorFromRmpScore(rmpScore)}}>
            Professor ID: {id}, RateMyProfessors Score: {rmpScore}
          </div>

        </div>
      </body>
    );
  }

export default ProfessorProfile;
