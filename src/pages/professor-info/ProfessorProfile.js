// Currently this page can only be accessed by direct URL. Use /prof/<id> where the id is 
// the corresponding ObjectId value in MongoDB Atlas. /professor-list needs to be improved
// next so that /prof is easily accessible to users.

import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function ProfessorProfile() {
  const { id } = useParams();
  const [prof, setProf] = useState({});


  // normalizes score and returns color category
  const getColorFromRmpScore = (score) => {
    const colors = ['#f55c5c', '#f06f44', '#e5832c', '#d49614', '#bea801', '#a3b816', '#82c636', '#55d259'];
    return score === 0 ? '#d1d5db' : colors[Math.min(Math.floor((score-1) / (5-1) * (colors.length -1)), colors.length -1)];
  }


  // get data for specific professor using API route
  const fetchProfData = async (id) => {
    try {
      const response = await fetch(`https://ecams-billboard-api-fkcbd4atbhdwhmat.centralus-01.azurewebsites.net/prof-info/${id}`);
      const data = await response.json();

      if (data) {
        setProf({ 
          ...data,
          // ensure int/float properties are not parsed as strings
          overall_rating: Number(data.overall_rating),
          num_ratings: Number(data.num_ratings)
        })
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }


  useEffect(() => {
    fetchProfData(id);
  }, [id]);

  return (
    <body className='min-h-screen bg-black p-8 flex flex-col items-center'>
      <div className='max-w-xl mx-auto mt-10'>
        <div className='text-center text-gray-300 leading-10'>
          <h1 className='text-red-500 text-3xl font-bold mb-4'>{prof.fname} {prof.lname}</h1>

          { prof.dept === 'N/A' ? null : <>{prof.dept}<br/></> }

          Email: <a className='text-blue-500' href={`mailto:${prof.email}`}>{prof.email}</a> <br/>

          { prof.office === 'Adjunct' ? null : <>Office Location: {prof.office}<br/></> }

          { prof.overall_rating === 0 ? null :
           <>RateMyProfessors score* from { prof.num_ratings } { prof.num_ratings === 1 ? 'rating' : 'ratings' }:{' '}
            <span style={{backgroundColor: getColorFromRmpScore(prof.overall_rating), borderRadius: 4, color: 'black',
              padding:2, paddingLeft:3, paddingRight: 3
            }}>
              { prof.overall_rating }
            </span>
           </>
          }
        </div>

        {/* disclaimer footnote for rating data */}
        { prof.overall_rating === 0 ? null :
          <div className='text-sm text-gray-400 fixed bottom-0 left-0 right-0 p-4 text-center'>
            *RateMyProfessors data last updated: 11/19/2024
          </div>
        }
      </div>
    </body>
  );
}

export default ProfessorProfile;
