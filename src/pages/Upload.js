import React, { useState } from 'react';

function Upload() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  // Handle file input change
  const handleFileChange = (e) => {
    const userImg = e.target.files[0];
    if (userImg) {
      const imgUrl = URL.createObjectURL(userImg);
      setImage(imgUrl);
      setFile(userImg);
    }
  };

  // Upload image to backend
  const uploadImage = async () => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', "UPLOAD TEST");
    formData.append('notes', "UPLOAD TEST");

    try {
      const response = await fetch('https://ecamsbb-api.azurewebsites.net/upload', {
        method: 'POST',
        body: formData,
      });

      // Parse the JSON even when there's an error
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        // Show the backend’s error message to the user
        alert(data.error || 'Upload failed. Please try again.');
        console.error('Upload failed:', data);
        return;
      }

      // Success response
      alert(data.message || 'Image uploaded successfully.');
      console.log('Upload successful:', data);

    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Network or server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-red-500 text-3xl font-bold mb-4">Poster Submission Portal</h1>
        <div className="w-full max-w-md flex flex-col gap-4">

          <button
            // remove 'disabled' below to reactivate portal submission
            onClick={() => document.getElementById('fileInput').click()} //disabled
            className="block text-white bg-neutral-700 hover:bg-neutral-600 py-3 px-4
                       rounded-lg shadow text-center transition hover:-translate-y-1"
          >
    
          </button>

          {/* hidden file input, triggered by the button above */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* display upload button after an image is selected */}
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

          {image && (
            <div className="mt-4 translate-y-10">
              <img src={image} alt="Uploaded Poster" className="w-full rounded-lg shadow" />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Upload;
