const CapstoneProducts = () => {
    const quizmaster = "https://quizmaster-c66a2.web.app/home"
  
    return (
        <body className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
            <div className="max-w-xl mx-auto">
                <div className='text-center'>
                    <h1 className="text-red-500 text-3xl font-bold mb-4 underline">Capstone Products</h1>
                    </div >
                        <div className="text-gray-300 text-center">
                            Here you can check out what other Capstone teams have created.
                        <h1 className="text-red-500 text-2xl font-bold mb-2 mt-2">
                            QuizMaster: an alternative to Quizlet
                        </h1>
                        
                        <a href={quizmaster} target="_blank" rel="noopener noreferrer">
                            <img src="QuizMasterFlyer.png" alt="app store button" className="mb-4"/>
                            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try QuizMaster</button>
                        </a>
                        
                        <h1 className="text-red-500 text-2xl font-bold mt-10">
                            More Capstone Products Coming Soon.
                        </h1>

                        </div>
                </div>
            </body>
    );
  };
  
  export default CapstoneProducts;