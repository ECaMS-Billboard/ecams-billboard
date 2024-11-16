/*
  This is COMEDICALLY insecure, but it works as a placeholder for now.
  I don't really anticipate this project being targeted by bad actors
  anyway. That being said, this still needs to be re-implemented later 
  with something respectable, most likely Google OAuth.
*/

import { useState } from 'react';


function AdminPanel() {
  const [password, setPassword] = useState('');
  var [isAdmin, setIsAdmin] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecamsbb-api.azurewebsites.net/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsAdmin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

    if (isAdmin) {
      return (
        <main className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
          <div className="flex center items-center">
            <h1 className="text-red-500 text-3xl font-bold mb-4">Admin Panel</h1>
          </div>
          <p className='text-white'>Login Successful!</p>
          {/* TODO additional logic for admin tools (file approval) */}
        </main>
      );
    }


    return (
      <main className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
        <div className="flex center items-center">
          <h1 className="text-red-500 text-3xl font-bold mb-4">Admin Panel</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="password" 
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='text-white rounded-md py-1.5 px-3 bg-neutral-700'
            />
            <button 
              onclick={() => handleSubmit}
              className="text-white bg-red-700 hover:bg-red-500 hover:-translate-y-0.5
                        py-1.5 px-3 rounded-md shadow transition translate-x-2">
              Login
            </button>
        </form>
      </div>
    </main>
      )
    }


export default AdminPanel;
