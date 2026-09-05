import React, { useState } from 'react';
import { API_BASE_URL } from "../config";
import firework from './fireworks/firework.gif';
import firework2 from './fireworks/firework2.gif';

function Upload() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');
  const [showFireworks, setShowFireworks] = useState(false);

  // Handle file input change
  const handleFileChange = (e) => {
    const userImg = e.target.files[0];

    if (userImg) {
      const imgUrl = URL.createObjectURL(userImg);
      setImage(imgUrl);
      setFile(userImg);
      setUploadMessage('');
    }
  };

  // Upload image to backend
  const uploadImage = async () => {
    if (!email) {
      alert("Please enter your email first!");
      return;
    }

    if (!file) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    formData.append('description', "UPLOAD TEST");
    formData.append('notes', "UPLOAD TEST");

    try {
      const response = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        alert(data.error || 'Upload failed. Please try again.');
        console.error('Upload failed:', data);
        return;
      }

      console.log('Upload successful:', data);

      setUploadMessage(data.message || 'Poster submitted successfully. It is now pending approval.');
      setShowFireworks(true);

      setImage(null);
      setFile(null);
      setEmail('');

      setTimeout(() => {
        setShowFireworks(false);
      }, 3000);

    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadMessage('Network or server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-md mx-auto">
        <h1 className="text-red-500 text-3xl font-bold mb-4">
          Poster Submission Portal
        </h1>

        <div className="w-full max-w-md flex flex-col gap-4">

          {/* Email input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-white bg-neutral-700 placeholder-gray-300 py-3 px-4 rounded-lg shadow"
            required
          />

          {/* Choose image button */}
          <button
            onClick={() => document.getElementById('fileInput').click()}
            className="block text-white bg-neutral-700 hover:bg-neutral-600 py-3 px-4
                       rounded-lg shadow text-center transition hover:-translate-y-1"
          >
            Click to upload image!
          </button>

          {/* Hidden file input */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Display upload button after an image is selected */}
          {file && (
            <div className="translate-y-5">
              <p className="text-white">
                All submissions are manually reviewed before being displayed on the kiosk.
              </p>

              <button
                onClick={uploadImage}
                className="w-full block text-white bg-red-900 hover:bg-red-800 py-3 px-4
                           rounded-lg shadow text-center transition hover:-translate-y-1 mt-4"
              >
                Upload
              </button>
            </div>
          )}

          {/* Upload message */}
          {uploadMessage && (
            <p className="text-white text-center mt-6">
              {uploadMessage}
            </p>
          )}

          {/* Image preview */}
          {image && (
            <div className="mt-4 translate-y-10">
              <img
                src={image}
                alt="Uploaded Poster"
                className="w-full rounded-lg shadow"
              />
            </div>
          )}

        </div>
      </div>

      {/* Fireworks popup */}
      {showFireworks && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center">
          <div className="flex gap-4">
            <img
              src={firework}
              alt="firework"
              className="w-64 h-64 object-contain"
            />

            <img
              src={firework2}
              alt="firework"
              className="w-64 h-64 object-contain"
            />
          </div>

          <p className="text-red-500 font-bold text-2xl mt-4">
            Poster Submitted!
          </p>
        </div>
      )}
    </div>
  );
}

export default Upload;