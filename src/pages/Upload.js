import React, { useState } from 'react';


function Upload() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);


  // handle file input change
  const handleFileChange = (e) => {
    const userImg = e.target.files[0]
    if (userImg) {
      const imgUrl = URL.createObjectURL(userImg);
      setImage(imgUrl);
      setFile(e.target.files[0]);
    }
  };


  const uploadImage = async () => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    // prepare data to send to the API
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', "UPLOAD TEST");
    formData.append('notes', "UPLOAD TEST");


    try {
      // TODO: this URL needs to be changed to the actual API link, once that is hosted!
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      console.log('Upload successful:', data);
      alert('Image uploaded successfully.');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image.');
    }
  };


  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-red-700 text-3xl font-bold mb-4">Poster Submission Portal</h1>
        <div className="w-full max-w-md flex flex-col gap-4">
          <button
            onClick={() => document.getElementById('fileInput').click()}
            className="block text-white bg-neutral-700 hover:bg-neutral-600 py-3 px-4
                       rounded-lg shadow text-center transition hover:-translate-y-1"
          >
            Choose an image
          </button>

          {/* hidden file input, called by the button above */}
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
