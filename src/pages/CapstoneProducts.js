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
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-black text-gray-200 flex flex-col items-center text-center px-6 py-20 md:py-24">
            <h1 className="text-red-400 text-4xl font-extrabold tracking-tight mb-6 underline decoration-red-500/60 underline-offset-8 drop-shadow-[0_0_18px_rgba(239,68,68,0.25)]">
                Capstone Products
            </h1>
            <p className="text-gray-300/90 mb-10 max-w-2xl leading-relaxed">
                Explore creative projects developed by our Capstone teams — each
                showcasing innovation, design, and collaboration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-5xl w-full">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="group bg-gray-800/60 backdrop-blur-sm border border-white/5 ring-1 ring-white/5 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(239,68,68,0.25)]"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="p-6">
                            <h2 className="text-red-400 text-2xl font-semibold mb-2">
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
                                    className="inline-flex items-center justify-center text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 focus-visible:ring-offset-black font-medium rounded-lg text-sm px-6 py-2.5 transition-colors"
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