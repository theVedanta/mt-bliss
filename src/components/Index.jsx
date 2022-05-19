import SlideShow from "./SlideShow";
import Header from "./Header";
import Features from "./Features";
// import Reviews from "./Reviews";
import Pricing from "./Pricing";
import Footer from "./Footer";
import { useEffect } from "react";

const Index = ({ setShowCont }) => {
    useEffect(() => {
        const audio = document.getElementById("rain");
        audio.volume = "0.4";
        audio.play();
    }, []);

    document.body.addEventListener("mousemove", () => {
        const audio = document.getElementById("rain");
        audio.volume = "0.4";
        audio.play();
    });

    return (
        <>
            <audio
                src="/assets/rain.wav"
                id="rain"
                title="rain"
                loop={true}
                autoPlay={true}
            ></audio>
            <Header setShowCont={setShowCont} />
            <Pricing setShowCont={setShowCont} />
            <SlideShow />
            <Features />
            {/* <Reviews /> */}
            <Footer />
        </>
    );
};

export default Index;
