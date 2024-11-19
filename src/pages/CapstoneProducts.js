const CapstoneProducts = () => {
    const quizmaster = "https://quizmaster-c66a2.web.app/home"
  
    return (
        <body className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
            <div className="max-w-xl mx-auto">
                <div className='text-center'>
                    <h1 className="text-red-500 text-3xl font-bold mb-4">Capstone Products</h1>
                    </div >
                        <div className="text-gray-300 text-center">
                            Here you can check out what other Capstone teams have created.
                        <h1 className="text-red-500 text-2xl font-bold mb-2">
                            QuizMaster: an alternative to Quizlet
                        </h1>
                        <p>
                            Follow the link below and login using Google to utilize QuizMaster.
                        </p>
                        <a href={quizmaster} target="_blank" rel="noopener noreferrer">
                            <button className="underline text-blue-400 font-bold mb-2">Try QuizMaster</button>
                        </a>
                        
                        </div>
                </div>
            </body>
    );
  };
  
  export default CapstoneProducts;