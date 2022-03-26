import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const slideImages = [
    {
        url: "/assets/sample/1.jpg",
        caption: "Slide 1",
    },
    {
        url: "/assets/sample/2.jpg",
        caption: "Slide 2",
    },
    {
        url: "/assets/sample/3.png",
        caption: "Slide 3",
    },
];

const SlideShow = () => {
    const mainRef = useRef("slide");

    return (
        <section className="slideshow relative">
            <div
                className="slide-prev absolute top-0 left-0 h-full px-10 text-5xl flex justify-center items-center text-black opacity-50 cursor-pointer transition-all hover:opacity-90"
                onClick={() => mainRef.current.goBack()}
            >
                <FaChevronLeft />
            </div>
            <div
                className="slide-next absolute top-0 right-0 h-full px-10 text-5xl flex justify-center items-center text-black opacity-50 cursor-pointer transition-all hover:opacity-90"
                onClick={() => mainRef.current.goNext()}
            >
                <FaChevronRight />
            </div>
            <Slide
                infinite={true}
                easing="ease-in"
                transitionDuration="800"
                arrows={false}
                ref={mainRef}
            >
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <img
                            src={slideImage.url}
                            alt={slideImage.caption}
                            style={{
                                height: "70vh",
                            }}
                            className="w-screen"
                        />
                    </div>
                ))}
            </Slide>
        </section>
    );
};

export default SlideShow;
