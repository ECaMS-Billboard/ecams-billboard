const EverydayApp = () => {
    const googlePlayLink = 'https://play.google.com/store/apps/details?id=com.dynamify.sodexo';
    const appleStoreLink = 'https://apps.apple.com/gb/app/everyday/id1338702323';
  
    return (
        <body className="min-h-screen bg-black p-8 flex flex-col items-center">
            <div className="max-w-xl mx-auto">
                <div className='text-center'>
                    <h1 className="text-red-500 text-3xl font-bold mb-4 underline">Download the Everyday App</h1>
                    </div >
                        <div className="text-gray-300 text-center">
                            {' '}The Everyday app is the main method of ordering food and beverages on campus. Download it here for your IOS or Android device:{' '}
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                 <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                                    <img src="googleplay.png" alt="google play button" className="w-64"/>
                                </a>
                                
                                <a href={appleStoreLink} target="_blank" rel="noopener noreferrer">
                                    <img src="appstore.png" alt="app store button" className="w-56"/>
                                </a>
                            </div>
                </div>
            </div>
        </body>
    );
  };
  
  export default EverydayApp;