import React from "react";
import { Link } from "react-router-dom";

function Larry() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6
                    bg-gradient-to-br from-red-100 via-white to-slate-100
                    dark:from-black dark:via-zinc-900 dark:to-red-950
                    text-black dark:text-white transition-colors duration-300">

            {/* Larry card */}
            <div className="group relative max-w-md w-full rounded-3xl overflow-hidden
                      border border-red-500/70
                      bg-zinc-950/90 dark:bg-zinc-900/90
                      shadow-[0_0_35px_rgba(239,68,68,0.55)]
                      hover:shadow-[0_0_65px_rgba(239,68,68,0.9)]
                      transition-all duration-500">

                {/* Image */}
                <img
                    src="/larry.png"  // 👈 PUBLIC FOLDER IMAGE — NO IMPORT NEEDED
                    alt="Larry the cat"
                    className="w-full h-full object-cover
                     scale-105 group-hover:scale-110
                     transition-transform duration-700"
                />

                {/* Dark overlay + text */}
                <div className="absolute inset-0 bg-gradient-to-t
                        from-black/90 via-black/40 to-transparent
                        pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 pb-8 pt-16
                        flex flex-col items-center text-center space-y-2">
                    <p className="text-xs tracking-[0.35em] uppercase text-red-400/80">
                        legend of the kiosk
                    </p>
                    <h1 className="text-4xl font-extrabold
                         drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
                        LARRY.
                    </h1>
                    <p className="max-w-xs text-sm text-gray-300/90">
                        The unofficial guardian of the ECaMS Billboard. Staring into your
                        soul since 2025.
                    </p>
                </div>
            </div>

            {/* Back button */}
            <div className="mt-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-red-600 hover:bg-red-700
                     text-white text-sm font-semibold
                     shadow-md hover:shadow-lg
                     transition-transform duration-200 hover:scale-105"
                >
                    ⬅ Back to Home
                </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400 text-center">
                Powered by <span className="text-red-500 font-semibold">ECaMS</span> • Lewis University
            </p>
        </div>
    );
}

export default Larry;
