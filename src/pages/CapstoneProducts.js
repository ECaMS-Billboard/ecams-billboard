const CapstoneProducts = () => {
    const products = [
        {
            title: "QuizMaster: An Alternative to Quizlet",
            image: "QuizMasterFlyer.png",
            link: "https://quizmaster-c66a2.web.app/home",
            buttonText: "Try QuizMaster",

        },
        {
            title: "ChattyNotes",
            image: "ChattyNotesFlyer.png",
            link: "https://chattynotes.io/",
            buttonText: "Try ChattyNotes",
        },
        {
            title: "BeamRail",
            image: "BeamRailFlyer.png",
            link: "https://beamrail.com/",
            buttonText: "Try BeamRail",
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-8 flex flex-col items-center text-center">
            <h1 className="text-red-500 text-4xl font-extrabold mb-6 underline">
                Capstone Products
            </h1>
            <p className="text-gray-300 mb-8 max-w-2xl">
                Explore creative projects developed by our Capstone teams — each
                showcasing innovation, design, and collaboration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-red-500 text-2xl font-bold mb-2">
                                {product.title}
                            </h2>
                            <p className="text-gray-300 mb-4">{product.description}</p>
                            <a
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    type="button"
                                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-indigo-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-6 py-2.5 transition duration-200"
                                >
                                    {product.buttonText}
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-red-500 text-2xl font-bold mt-12">
                More Capstone Products Coming Soon.
            </h2>
            <p className="mt-8 text-sm text-gray-500">
            © 2025 Lewis University • Powered by ECaMS
          </p>
        </div>
    );
};

export default CapstoneProducts;