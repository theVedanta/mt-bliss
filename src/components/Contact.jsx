import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = ({ setShowCont }) => {
    return (
        <div className="cover-cont flex justify-center items-center fixed top-0 left-0 w-screen h-screen z-50">
            <div
                className="fixed w-screen h-screen z-30"
                style={{ background: "rgba(0, 0, 0, 0.5)" }}
                onClick={() => setShowCont(false)}
            ></div>
            <div className="cont-box shadow-lg h-60 bg-slate-200 py-10 px-12 rounded z-40 w-1/4">
                <h1 className="text-2xl font-semibold mb-10">Contact Us</h1>
                <a
                    href="tel:7428458777"
                    className="cont-unit flex justify-between w-full items-center py-1"
                >
                    <FaPhoneAlt />
                    <h2>74284 58777</h2>
                </a>
                <a
                    href="tel:9930727279"
                    className="cont-unit flex justify-between w-full items-center py-1"
                >
                    <FaPhoneAlt />
                    <h2>99307 27279</h2>
                </a>
                <a
                    href="mailto:mtbliss15@gmail.com"
                    className="cont-unit flex justify-between w-full items-center py-1"
                >
                    <FaEnvelope />
                    <h2 className="text-blue">mtbliss15@gmail.com</h2>
                </a>
            </div>
        </div>
    );
};

export default Contact;
