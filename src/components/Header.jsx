import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="header w-screen h-screen px-32 flex">
            <div className="header-content w-1/2 h-full flex flex-col justify-center">
                <img src="/assets/logo-gold.svg" className="w-2/3" alt="logo" />
                <p className="w-10/12 py-10 text-xl leading-9 font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est, eum veniam at nam iure fugit sed delectus saepe! Veniam
                    iure sed repudiandae et, sunt ut id suscipit eligendi
                    necessitatibus quisquam?
                </p>
                <div className="btns flex w-full">
                    <Link
                        className="rounded-lg bg-blue flex justify-center items-center py-3 px-7 text-lg text-white font-medium transition-all hover:bg-sky-900"
                        to="/"
                    >
                        Book Stay
                    </Link>
                    <Link
                        className="rounded-lg bg-blue flex justify-center items-center py-3 px-7 text-lg ml-7 text-white font-medium transition-all hover:bg-sky-900"
                        to="/"
                    >
                        Book Stay
                    </Link>
                </div>
            </div>
            <div className="header-img w-1/2 h-full flex justify-center relative">
                <img
                    src="/assets/index.svg"
                    alt="img"
                    className="absolut top-0 left-1/2 object-contain object-top h-full"
                />
            </div>
        </section>
    );
};

export default Header;
