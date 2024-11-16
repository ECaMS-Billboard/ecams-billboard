// Consider this a proof of concept
// Will need to be secured properly later 

import { useState } from 'react';

const PASSWORD = 'password'

function AdminPanel() {
  const [password, setPassword] = useState('');
  var [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === PASSWORD) {
        setIsAdmin(true)
      } else {
        alert('Incorrect password')
      }
    }


    if (isAdmin) {
      return (
        <div className="min-h-screen bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-red-700 text-3xl font-bold mb-4">Admin Panel</h1>
            <p className="text-white">woahh 1337 h4xor you got in!!</p>
          </div>
        </div>
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
