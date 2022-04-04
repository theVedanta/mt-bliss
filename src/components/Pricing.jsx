import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Button from "./Button";

const prices = {
    weekend: {
        8: "16",
        12: "18",
        16: "21",
        20: "25",
    },
    weekday: {
        8: "10",
        12: "12",
        16: "14",
        20: "16",
    },
};

const Pricing = ({ setShowCont }) => {
    const [persons, setPersons] = useState(8);

    return (
        <section
            className="pricing my-24 px-32 flex flex-col justify-center items-center mb-32 lap:px-16 ph:px-6 ph:mt-64 ph:mb-0"
            id="pricing"
        >
            <h3 className="text-5xl font-semibold text-center mb-16">
                Pricing
            </h3>
            <div className="prices flex w-1/2 blap:w-2/3 lap:w-full ph:flex-wrap">
                <div
                    className="price-box w-1/2 rounded-lg flex flex-col items-center p-10 mx-3 ph:w-full ph:mb-10"
                    style={{ boxShadow: "0 0 20px rgba(0, 0, 10, 0.1)" }}
                >
                    <h3 className="text-3xl font-semibold">Weekdays</h3>
                    <i className="mt-3 text-sm text-blue mb-10 tab:mb-5">
                        All weekdays except Friday
                    </i>
                    <h4 className="text-5xl font-light mb-20 tab:text-4xl tab:mb-14">
                        ₹ {prices.weekday[persons]}K
                        <strong className="font-semibold text-2xl">
                            /Night
                        </strong>
                    </h4>
                    <div className="price-persons flex flex-col w-full items-center px-3 mb-10">
                        {Object.keys(prices.weekday).map((prs) => {
                            return (
                                <button
                                    key={prs}
                                    className={`font-light flex items-center mb-2 transition-all ${
                                        prs.toString() === persons.toString()
                                            ? "py-1 px-3 rounded-full bg-blue text-white"
                                            : ""
                                    }`}
                                    onClick={() => setPersons(prs)}
                                >
                                    <FaChevronRight className="mr-1 text-sm" />
                                    Upto {prs} People
                                </button>
                            );
                        })}
                    </div>

                    <Button
                        text="Book your stay"
                        onClick={() => setShowCont(true)}
                    />
                </div>

                <div
                    className="price-box w-1/2 rounded-lg flex flex-col items-center p-10 mx-3 ph:w-full ph:mb-10"
                    style={{ boxShadow: "0 0 20px rgba(0, 0, 10, 0.1)" }}
                >
                    <h3 className="text-3xl font-semibold">Weekends</h3>
                    <i className="mt-3 text-sm text-blue mb-10 tab:mb-5">
                        Friday, Saturday, Sunday
                    </i>
                    <h4 className="text-5xl font-light mb-20 tab:text-4xl tab:mb-14">
                        ₹ {prices.weekend[persons]}K
                        <strong className="font-semibold text-2xl">
                            {" "}
                            /Night
                        </strong>
                    </h4>
                    <div className="price-persons flex flex-col w-full items-center px-3 mb-10">
                        {Object.keys(prices.weekend).map((prs) => {
                            return (
                                <button
                                    key={prs}
                                    className={`font-light flex items-center mb-2 transition-all ${
                                        prs.toString() === persons.toString()
                                            ? "py-1 px-3 rounded-full bg-blue text-white"
                                            : ""
                                    }`}
                                    onClick={() => setPersons(prs)}
                                >
                                    <FaChevronRight className="mr-3" />
                                    Upto {prs} People
                                </button>
                            );
                        })}
                    </div>

                    <Button
                        onClick={() => setShowCont(true)}
                        text="Book your stay"
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
