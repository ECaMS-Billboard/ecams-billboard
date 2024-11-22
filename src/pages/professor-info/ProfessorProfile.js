import { useParams } from 'react-router-dom';

// normalizes score and returns color category
const getColorFromRmpScore = (score)  => {
  const colors = ['#f55c5c', '#f06f44', '#e5832c', '#d49614', '#bea801', '#a3b816', '#82c636', '#55d259'];
  return colors[Math.min(Math.floor((score-1) / (5-1) * (colors.length -1)), colors.length -1)];
}


function ProfessorProfile() {
    const { id } = useParams();

    return (
      <div style={{color: getColorFromRmpScore(5.0)}}>
        {id}
      </div>
    );
  }

export default ProfessorProfile;
