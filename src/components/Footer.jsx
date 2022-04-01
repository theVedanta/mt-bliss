import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { Notyf } from "notyf";
import { useState } from "react";

const notyf = new Notyf();
init("2IxWYpOEKTiSWGqQr");

const Footer = () => {
    const [limit, setLimit] = useState(false);

    const sendMail = () => {
        const from = document.querySelector("input[name='from']").value.trim();
        const msg = document.querySelector("textarea[name='msg']").value.trim();

        if (from && msg && !limit) {
            const btn = document.querySelector("button#send");
            btn.disabled = true;
            btn.classList.add("opacity-30");
            document.querySelector("input[name='from']").value = "";
            document.querySelector("textarea[name='msg']").value = "";

            const templateParams = {
                from_name: from,
                message: msg,
            };

            emailjs
                .send(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
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

    return (
        <>
            <footer className="footer flex justify-between mt-32 px-32 py-12 w-screen bg-black lap:mt-0 lap:px-10 lap:py-8 tab:flex-wrap ph:px-0">
                <div className="mt-details flex flex-col w-4/12 justify-between lap:w-1/2 lap:mx-10 lap:justify-center tab:items-center tab:w-full">
                    <img
                        src="/assets/logo-gold.png"
                        className="w-full tab:w-1/3 ph:w-2/3"
                        alt="logo"
                    />
                    <div className="flex w-full">
                        <p className="mt-14 text-gray w-1/2 lap:text-xs">
                            2, Daffodils, The Royal Heights
                            <br />
                            Old Khandala Road, Lonavala
                            <br />
                            Maharashtra - 410401
                        </p>
                        <p className="w-1/2 text-gray mt-14 text-right ph:text-xs">
                            <a href="tel:7428458777">+91 74284 58777</a>
                            <br />
                            <a href="mailto:mtbliss15@gmail.com">
                                mtbliss15@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="write flex w-1/3 flex-col lap:w-1/2 lap:mx-10 tab:w-full tab:mt-10">
                    <h1 className="text-3xl font-semibold text-gray mt-2 mb-5">
                        Write to us
                    </h1>
                    <input
                        type="email"
                        className="footer-name text-lg bg-gray rounded-lg px-5 py-3 w-full mb-3 shadow-lg tab:text-sm"
                        placeholder="Email"
                        name="from"
                        autoComplete="off"
                    />
                    <textarea
                        className="footer-msg text-lg bg-gray rounded-lg px-5 py-3 w-full h-full resize-none shadow-lg tab:text-sm tab:h-32"
                        placeholder="Write your message here"
                        name="msg"
                        autoComplete="off"
                    ></textarea>
                    <button
                        text="Send Message"
                        className="rounded-lg bg-blue flex justify-center items-center py-3 px-7 text-lg text-white font-medium transition-all hover:bg-sky-900 mt-3 tab:text-sm"
                        onClick={sendMail}
                        id="send"
                    >
                        Send message
                    </button>
                </div>
            </footer>
            <div className="cred flex w-full justify-between items-center px-32 py-2 bg-slate-900 lap:px-16 ph:px-6">
                <h1 className="text-gray">
                    Developed by{" "}
                    <a
                        href="https://github.com/theVedanta"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue font-semibold"
                    >
                        theVedanta
                    </a>
                </h1>
                <a
                    href="tel:7428545077"
                    className="text-gray font-semibold text-blue"
                >
                    +91 74285 45077
                </a>
            </div>
        </>
    );
};

export default Footer;
