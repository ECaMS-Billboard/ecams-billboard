const EverydayApp = () => {
    const googlePlayLink =
        "https://play.google.com/store/apps/details?id=com.dynamify.sodexo";
    const appleStoreLink =
        "https://apps.apple.com/gb/app/everyday/id1338702323";

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-black text-gray-200 flex flex-col items-center justify-center px-6">
            <div className="max-w-xl w-full text-center">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4 drop-shadow-lg">
                    Download the Everyday App
                </h1>

                <p className="text-gray-300 mb-8 leading-relaxed">
                    Stay connected with campus dining! The{" "}
                    <span className="text-red-400 font-semibold">Everyday App</span> is your go-to tool
                    for ordering food and beverages across campus. Download it today for
                    your iOS or Android device and enjoy a faster, easier dining experience.
                </p>

                <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-red-500/20 hover:border-red-500/50 transition-all duration-300">
                    <h2 className="text-lg font-semibold text-red-400 mb-4">
                        Choose Your Platform:
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <a
                            href={googlePlayLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-105 transition duration-300"
                        >
                            <img
                                src="googleplay.png"
                                alt="Google Play button"
                                className="w-64 mx-auto"
                            />
                        </a>

                        <a
                            href={appleStoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-105 transition duration-300"
                        >
                            <img
                                src="appstore.png"
                                alt="App Store button"
                                className="w-56 mx-auto"
                            />
                        </a>
                    </div>
                </div>

                <p className="mt-8 text-sm text-gray-500">
                    © 2025 Lewis University • Powered by ECaMS
                </p>
            </div>
        </div>
    );
};

export default EverydayApp;
