import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Nav = ({ setShowCont }) => {
    const linkClass =
        "px-10 py-3 lap:text-sm lap:px-7 tab:px-5 tab:py-2 ph:py-6 ph:text-lg";
    const linkClassBook =
        "cursor-pointer px-10 py-3 bg-blue rounded-lg text-white font-medium border-2 border-blue transition-all lap:text-sm lap:px-7 tab:px-5 tab:py-2 ph:py-3 ph:mt-3 ph:px-7 ph:text-lg hover:bg-sky-900 hover:border-sky-900";
    const linkClassVid =
        "cursor-pointer px-10 py-3 ml-3 bg-transparent border-2 border-blue rounded-lg text-blue font-medium transition-all lap:text-sm lap:px-7 tab:px-5 tab:py-2 ph:py-3 ph:mt-3 ph:px-7 ph:text-lg hover:shadow-xl";
    const [side, setSide] = useState(false);

    return (
        <nav className="nav w-screen px-32 py-3 flex justify-between shadow-lg fixed z-40 bg-slate-200 lap:px-16 lap:py-2 tab:py-1 ph:px-6">
            <div className="left w-1/2 py-3 z-50 tab:w-1/3">
                <a href="#header">
                    <img
                        src="/assets/logo-gold.png"
                        className="w-32 lap:w-28 tab:w-24"
                        alt="logo"
                    />
                </a>
            </div>

            <div
                className={`right w-1/2 flex justify-end items-center z-40 ph:fixed ph:top-0 transition-all duration-500 tab:w-2/3 ${
                    side ? "ph:right-0" : "ph:-right-full"
                } ph:flex-col ph:w-2/3 ph:bg-slate-200 ph:h-screen ph:flex ph:justify-center ph:items-center`}
                style={side ? { boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)" } : {}}
            >
                <a
                    className={linkClass}
                    href="/#header"
                    onClick={() => (side ? setSide(!side) : "")}
                >
                    Home
                </a>
                <a
                    className={linkClass}
                    href="/#pricing"
                    onClick={() => (side ? setSide(!side) : "")}
                >
                    Pricing
                </a>
                <a
                    className={linkClass}
                    href="/#slideshow"
                    onClick={() => (side ? setSide(!side) : "")}
                >
                    Gallery
                </a>
                <div
                    className={linkClassBook}
                    onClick={() => setShowCont(true)}
                >
                    Book Stay
                </div>
                <div className={linkClassVid} onClick={() => setShowCont(true)}>
                    Discover Villa
                </div>
            </div>

            <div
                className="ham items-center hidden ph:flex z-50"
                onClick={() => setSide(!side)}
            >
                {side ? (
                    <FaTimes className="text-xl" />
                ) : (
                    <FaBars className="text-xl" />
                )}
            </div>
        </nav>
    );
};

export default Nav;
