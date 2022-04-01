import Button from "./Button";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Header = ({ setShowCont }) => {
    return (
        <section className="header w-screen h-screen flex flex-col" id="header">
            <div className="header-content w-full h-3/4 flex flex-col justify-center items-center pt-20 z-10 lap:py-28 lap:pt-40 lap:h-full">
                <img
                    src="/assets/logo-gold.png"
                    className="w-1/3 lap:w-5/12 ph:w-2/3"
                    alt="logo"
                />
                <p
                    className="w-1/3 text-center py-5 text-3xl leading-9 font-medium pb-7 text-white lap:text-2xl ph:w-full ph:py-3 ph:pb-5"
                    style={{ textShadow: "0 0 15px rgba(0, 0, 0, 0.9)" }}
                >
                    Happiness Unlimited
                </p>
                <div className="btns flex w-full justify-center items-center">
                    <Button
                        text="Book Stay"
                        className="shadow-xl"
                        onClick={() => setShowCont(true)}
                        style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)" }}
                    ></Button>
                    <a
                        className="rounded-lg bg-blue flex justify-center items-center py-3 px-7 text-lg text-white font-medium transition-all hover:bg-sky-900 ml-5  lap:px-6 lap:text-base  ph:text-sm ph:py-2"
                        href="#slideshow"
                        style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)" }}
                    >
                        Gallery
                    </a>
                </div>
            </div>
            <div className="contacts w-full flex justify-between items-center px-32 -translate-y-12 z-20 flex-wrap pb-12 lap:px-16 lap:-translate-y-8 lap:justify-center ph:px-6">
                <div className="cont-box shadow-lg bg-slate-200 py-10 px-12 rounded lap:px-9 lap:py-6">
                    <h1 className="text-2xl font-semibold mb-10 lap:text-xl lap:mb-4">
                        Address
                    </h1>
                    <p className="py-1 lap:text-sm">
                        2, Daffodils, The Royal Heights
                        <div className="my-2"></div>
                        Old Khandala Road, Khandala
                        <div className="my-2"></div>
                        Maharashtra - 410401
                    </p>
                </div>
                <div className="cont-box shadow-lg bg-slate-200 py-10 px-12 rounded lap:px-9 lap:py-6">
                    <h1 className="text-2xl font-semibold mb-10 lap:text-xl lap:mb-4">
                        Contact Us
                    </h1>
                    <a
                        href="tel:7428458777"
                        className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm"
                    >
                        <FaPhoneAlt />
                        <h2>74284 58777</h2>
                    </a>
                    <a
                        href="mailto:mtbliss15@gmail.com"
                        className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm"
                    >
                        <FaEnvelope />
                        <h2>mtbliss15@gmail.com</h2>
                    </a>
                    <a
                        href="tel:9930727279"
                        className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm"
                    >
                        <FaPhoneAlt />
                        <h2>99307 27279</h2>
                    </a>
                </div>
                <div className="cont-box shadow-lg bg-slate-200 py-10 px-12 rounded lap:px-9 lap:py-6">
                    <h1 className="text-2xl font-semibold mb-10 lap:text-xl lap:mb-4">
                        Nearby Points
                    </h1>
                    {/* <p className="py-1">
                        Kune Falls - 1 KM
                        <div className="my-2"></div>
                        Lion's Point - 6 KM
                        <div className="my-2"></div>
                        Adlabs Imagica - 11 KM
                    </p> */}
                    <div className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm">
                        <h2>Kune Falls</h2>
                        <h2>1 Km.</h2>
                    </div>
                    <div className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm">
                        <h2>Lion's Point</h2>
                        <h2>6 Km.</h2>
                    </div>
                    <div className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm">
                        <h2>Adlabs Imagica</h2>
                        <h2>11 Km.</h2>
                    </div>
                </div>
            </div>
            {/* <div className="header-img w-1/2 h-full flex justify-center relative">
                <Link
                    to="/gallery"
                    className="transition-all duration-200 hover:scale-110"
                >
                    <img
                        src="/assets/index.svg"
                        alt="img"
                        className="absolut top-0 left-1/2 object-contain object-top h-full"
                    />
                </Link>
            </div> */}
        </section>
    );
};

export default Header;
