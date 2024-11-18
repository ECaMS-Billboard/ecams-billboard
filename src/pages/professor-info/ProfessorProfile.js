import { useParams } from 'react-router-dom';


function ProfessorProfile() {
    const { id } = useParams();

    return (
      <div>
        {id}
      </div>
    );
  }

export default ProfessorProfile;
