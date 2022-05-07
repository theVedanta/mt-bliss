import Calendar from "react-calendar";
import { useEffect, useState } from "react";

const Booking = () => {
    const [booking, setBooking] = useState([new Date(), new Date()]);

    useEffect(() => {
        console.log(booking);
    }, [booking]);

    return (
        <section className="booking mt-36 px-36" id="booking">
            <h1 className="text-5xl font-semibold text-center mb-20">
                Book stay at Mt. Bliss
            </h1>

            <div className="booking-frame flex w-full">
                <div className="inps w-1/2">
                    <div className="input flex flex-col mb-10">
                        <label
                            htmlFor="people"
                            className="mb-2 text-xl font-semibold"
                        >
                            No. of People
                        </label>
                        <select
                            name="people"
                            id="people"
                            className="px-5 py-3 text-lg cursor-pointer rounded-lg"
                        >
                            <option value="8">Upto 8</option>
                            <option value="8">Upto 8</option>
                            <option value="8">Upto 8</option>
                            <option value="8">Upto 8</option>
                        </select>
                    </div>
                    <Calendar
                        selectRange={true}
                        onChange={setBooking}
                        minDate={new Date()}
                        maxDate={new Date(new Date().getFullYear() + 1, 0, 1)}
                        value={booking}
                    />
                </div>

                <div className="price w-1/2">
                    <div className="priceCard"></div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
