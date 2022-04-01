import SlideShow from "./SlideShow";
import Header from "./Header";
import Features from "./Features";
// import Reviews from "./Reviews";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Contact from "./Contact";
import { useEffect, useState } from "react";

const Index = () => {
    const [showCont, setShowCont] = useState(false);

    useEffect(() => {
        const audio = document.getElementById("rain");
        audio.volume = "0.4";
        audio.play();
    }, []);

    return (
        <>
            <audio src="/assets/rain.wav" id="rain" loop={true}></audio>
            <Header setShowCont={setShowCont} />
            <Pricing setShowCont={setShowCont} />
            <SlideShow />
            <Features />
            {/* <Reviews /> */}
            {showCont ? <Contact setShowCont={setShowCont} /> : ""}
            <Footer />
        </>
    );
};

export default Index;
