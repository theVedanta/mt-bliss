import Button from "./Button";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Header = ({ setShowCont }) => {
    return (
        <section className="header w-screen h-screen flex flex-col" id="header">
            <div className="dead-section hidden">
                <h1>Mount Bliss</h1>
                <h1>Lonavala</h1>
                <h1>Swimming Pool</h1>
                <h1>Bungalow</h1>
                <h1>Villa</h1>
                <h2>Lonavla</h2>
                <h2>Book Bunglow</h2>
            </div>
            <div className="header-content w-full h-3/4 flex justify-between px-32 items-center pt-20 z-10 lap:py-28 lap:pt-40 lap:h-full">
                <div className="header-left w-1/2 flex flex-col items-center">
                    <img
                        src="/assets/logo-gold.png"
                        className="w-2/3 lap:w-5/12 ph:w-2/3"
                        alt="logo"
                    />

                    <p
                        className="w-full text-center py-5 text-3xl leading-9 font-medium pb-7 text-emerald-500 lap:text-2xl ph:w-full ph:py-3 ph:pb-5"
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

                <div className="header-left w-1/2 flex justify-center items-center">
                    <img
                        src="https://thesalt.in/wp-content/uploads/2019/02/mtdc_approved.jpg"
                        alt="the"
                        className="w-5/12 rounded-xl"
                    />
                </div>
            </div>
            <div className="contacts w-full flex justify-between items-stretch px-20 -translate-y-12 z-20 flex-wrap pb-12 lap:px-16 lap:-translate-y-8 lap:justify-center ph:px-6">
                <div className="cont-box shadow-lg bg-sky-200 border-orange-700 border-4 py-10 px-12 rounded lap:px-9 lap:py-6">
                    <h3 className="text-4xl text-orange-700 font-semibold mb-10 lap:text-xl lap:mb-4">
                        Address
                    </h3>
                    <h3 className="py-1 lap:text-sm">
                        2, Daffodils, The Royal Heights
                        <div className="my-2"></div>
                        Old Khandala Road, Khandala
                        <div className="my-2"></div>
                        Maharashtra - 410401
                    </h3>
                </div>
                <div className="cont-box shadow-lg bg-sky-200 border-orange-700 border-4 py-10 px-12 rounded lap:px-9 lap:py-6">
                    <h3 className="text-4xl text-orange-700 font-semibold mb-10 lap:text-xl lap:mb-4">
                        Contact Us
                    </h3>
                    <a
                        href="tel:9930727279"
                        className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <h4>99307 27279</h4>
                    </a>
                    <a
                        href="tel:7428458777"
                        className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm"
                    >
                        <FaPhoneAlt />
                        <h4>74284 58777</h4>
                    </a>
                    <a
                        href="mailto:mtbliss15@gmail.com"
                        className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm"
                    >
                        <FaEnvelope />
                        <h4 className="text-blue">mtbliss15@gmail.com</h4>
                    </a>
                </div>
                <div className="cont-box shadow-lg bg-sky-200 border-orange-700 border-4 py-10 px-12 rounded lap:px-9 lap:py-6">
                    <h3 className="text-4xl text-orange-700 font-semibold mb-10 lap:text-xl lap:mb-4">
                        Nearby Points
                    </h3>
                    {/* <p className="py-1">
                        Kune Falls - 1 KM
                        <div className="my-2"></div>
                        Lion's Point - 6 KM
                        <div className="my-2"></div>
                        Adlabs Imagica - 11 KM
                    </p> */}
                    <div className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm">
                        <h4>Kune Falls</h4>
                        <h4>1 Km.</h4>
                    </div>
                    <div className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm">
                        <h4>Lion's Point</h4>
                        <h4>6 Km.</h4>
                    </div>
                    <div className="cont-unit flex justify-between w-full items-center py-1 lap:text-sm">
                        <h4>Adlabs Imagica</h4>
                        <h4>11 Km.</h4>
                    </div>
                </div>
                <div className="cont-box shadow-lg bg-sky-200 rounded lap:px-9 lap:py-6">
                    <iframe
                        title="sdhkjvb"
                        width="600"
                        height="500"
                        style={{ width: "100%", height: "100%" }}
                        className="rounded-xl"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=mount%20bliss%20lonavala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                    ></iframe>
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
