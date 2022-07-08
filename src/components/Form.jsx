import Calendar from "react-calendar";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { Notyf } from "notyf";

init("2IxWYpOEKTiSWGqQr");
const notyf = new Notyf();

const Form = ({ setShowCont }) => {
    const [date, setDate] = useState(new Date());
    const [limit, setLimit] = useState(false);

    const sendMail = () => {
        const from_name = `${document
            .querySelector("input[name='fname']")
            .value.trim()} ${document
            .querySelector("input[name='lname']")
            .value.trim()}`;
        const mail = document.querySelector("input[name='mail']").value.trim();
        const phone = document
            .querySelector("input[name='phone']")
            .value.trim();

        if (from_name && mail && phone && !limit) {
            const btn = document.querySelector("button#sendReg");
            btn.disabled = true;
            btn.classList.add("opacity-30");

            const templateParams = {
                from_name,
                mail,
                phone,
                date: `${date.getDate()}/${
                    date.getMonth() + 1
                }/${date.getFullYear()}`,
            };

            emailjs
                .send(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID2,
                    templateParams
                )
                .then(
                    function (response) {
                        notyf.success("Message sent");
                        btn.disabled = false;
                        btn.classList.remove("opacity-30");
                        setLimit(true);
                    },
                    function (error) {
                        console.log(error);
                        notyf.error(
                            "Some error occurred while sending the message"
                        );
                    }
                );
        } else {
            if (limit) {
                notyf.error("Only 1 message is allowed");
            } else {
                notyf.error("Please fill all fields");
            }
        }
    };

    const phoneCheck = (e) => {
        const phone = e.target.value.trim();
        if (phone.length >= 11) {
            e.target.value = e.target.value.substring(0, 10);
        }
    };

    return (
        <div className="cover-cont flex justify-center items-center fixed top-0 left-0 w-screen h-screen overflow-y-scroll z-50">
            <div
                className="fixed w-screen h-screen z-30"
                style={{ background: "rgba(0, 0, 0, 0.7)" }}
                onClick={() => setShowCont(false)}
            ></div>
            {/* <div className="cont-box shadow-lg h-60 bg-slate-200 py-10 px-12 rounded z-40 w-1/4">
                <h3 className="text-2xl font-semibold mb-10">Contact Us</h3>
                <a
                    href="tel:7428458777"
                    className="cont-unit flex justify-between w-full items-center py-1"
                >
                    <FaPhoneAlt />
                    <h4>74284 58777</h4>
                </a>
                <a
                    href="tel:9930727279"
                    className="cont-unit flex justify-between w-full items-center py-1"
                >
                    <FaPhoneAlt />
                    <h4>99307 27279</h4>
                </a>
                <a
                    href="mailto:mtbliss15@gmail.com"
                    className="cont-unit flex justify-between w-full items-center py-1"
                >
                    <FaEnvelope />
                    <h4 className="text-blue">mtbliss15@gmail.com</h4>
                </a>
            </div> */}

            {/* NEW CODE -------------------------------------------------------------------------------------------------------------------------------- */}

            <div className="shadow-lg bg-slate-200 py-10 pl-7 rounded z-40 w-1/2 blap:scale-90 lap:scale-75 tab:scale-100 tab:w-10/12 ph:py-6 ph:w-11/12 mph:scale-75">
                <h1 className="text-4xl font-semibold text-center mb-12 pr-9 ph:mb-5 ph:text-2xl">
                    Book your stay
                </h1>

                <div className="form">
                    <div className="inputs w-full flex mb-5 ph:flex-col ph:mb-0">
                        <div className="input flex flex-col w-1/2 ph:w-full mb-3">
                            <label
                                htmlFor="fname"
                                className="pl-1 mb-1 font-medium ph:text-sm"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name="fname"
                                placeholder="First Name"
                                className="w-11/12 px-5 py-3 rounded-md shadow-md ph:text-sm ph:px-3 ph:py-2"
                            />
                        </div>

                        <div className="input flex flex-col w-1/2 ph:w-full mb-3">
                            <label
                                htmlFor="lname"
                                className="pl-1 mb-1 font-medium ph:text-sm"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lname"
                                placeholder="Last Name"
                                className="w-11/12 px-5 py-3 rounded-md shadow-md ph:text-sm ph:px-3 ph:py-2"
                            />
                        </div>
                    </div>

                    <div className="inputs w-full flex mb-5 ph:flex-col ph:mb-0">
                        <div className="input flex flex-col w-1/2 ph:w-full mb-3">
                            <label
                                htmlFor="mail"
                                className="pl-1 mb-1 font-medium ph:text-sm"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="mail"
                                placeholder="youremail@domain.com"
                                className="w-11/12 px-5 py-3 rounded-md shadow-md ph:text-sm ph:px-3 ph:py-2"
                            />
                        </div>

                        <div className="input flex flex-col w-1/2 ph:w-full mb-3">
                            <label
                                htmlFor="phone"
                                className="pl-1 mb-1 font-medium ph:text-sm"
                            >
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="1234567890"
                                className="w-11/12 px-5 py-3 rounded-md shadow-md ph:text-sm ph:px-3 ph:py-2"
                                onChange={(eve) => phoneCheck(eve)}
                            />
                        </div>
                    </div>

                    <div className="input flex flex-col mb-10 ph:mb-7">
                        <label className="mb-1 font-medium ph:text-sm">
                            Tentative date of stay:
                        </label>
                        <Calendar
                            onChange={setDate}
                            minDate={new Date()}
                            maxDate={
                                new Date(new Date().getFullYear() + 1, 0, 1)
                            }
                            value={date}
                        />
                    </div>

                    <div className="form-btn-cont pr-8">
                        <button
                            className="rounded-lg bg-blue flex justify-center items-center py-3 w-full text-lg text-white font-medium transition-all hover:bg-sky-900 mt-3"
                            onClick={sendMail}
                            id="sendReg"
                        >
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
