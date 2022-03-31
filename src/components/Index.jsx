import SlideShow from "./SlideShow";
import Header from "./Header";
import Features from "./Features";
// import Reviews from "./Reviews";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Contact from "./Contact";
import { useState } from "react";

const Index = () => {
    const [showCont, setShowCont] = useState(false);

    return (
        <>
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
