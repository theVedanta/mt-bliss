import { Link } from "react-router-dom";

const Nav = () => {
    const linkClass = "px-10 py-3";

    return (
        <nav className="nav w-screen px-32 py-3 flex shadow-lg fixed z-40 bg-white">
            <div className="left w-1/2 py-3">
                <Link to="/">
                    <img
                        src="/assets/logo-gold.svg"
                        className="w-32"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="right w-1/2 flex justify-end items-center">
                <Link className={linkClass} to="/">
                    Home
                </Link>
                <Link className={linkClass} to="/">
                    Home
                </Link>
                <Link className={linkClass} to="/">
                    Home
                </Link>
                <Link className={linkClass} to="/">
                    Home
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
