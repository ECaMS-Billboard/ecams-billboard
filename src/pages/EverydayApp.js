const AppLink = () => {
    const googlePlayLink = 'https://play.google.com/store/apps/details?id=com.dynamify.sodexo';
    const appleStoreLink = 'https://apps.apple.com/gb/app/everyday/id1338702323';
  
    return (
        <body className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
            <div className="max-w-xl mx-auto">
                <div className='text-center'>
                    <h1 className="text-red-500 text-3xl font-bold mb-4">Download the Everyday App</h1>
                    </div >
                        <div className="text-gray-300 text-center">
                            {' '}The Everyday app is the main method of ordering food and beverages on campus. {' '}
                        <p>
                            For Android:
                        </p>
                        <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                            <button className="underline text-blue-400">Get it on Google Play</button>
                        </a>
                        <p>
                            For Apple:
                        </p>
                        <a href={appleStoreLink} target="_blank" rel="noopener noreferrer">
                            <button className="underline text-blue-400">Get it on the App Store</button>
                        </a>
                        </div>
                </div>
            </body>
    );
  };
  
  export default AppLink;