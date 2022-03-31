import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const slideImages = [
    {
        url: "/assets/bung/1.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/2.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/3.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/4.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/5.jpeg",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/6.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/7.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/8.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/9.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/10.jpeg",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/11.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/12.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/13.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/14.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/15.webp",
        caption: "Slide 1",
    },
    {
        url: "/assets/bung/16.jpeg",
        caption: "Slide 1",
    },
];

const SlideShow = () => {
    const mainRef = useRef("slide");

    return (
        <section className="slideshow relative" id="slideshow">
            <div
                className="slide-prev absolute top-0 left-0 h-full px-10 text-5xl flex justify-center items-center text-black opacity-50 cursor-pointer transition-all hover:opacity-90 ph:text-3xl ph:px-5"
                onClick={() => mainRef.current.goBack()}
            >
                <FaChevronLeft />
            </div>
            <div
                className="slide-next absolute top-0 right-0 h-full px-10 text-5xl flex justify-center items-center text-black opacity-50 cursor-pointer transition-all hover:opacity-90 ph:text-3xl ph:px-5"
                onClick={() => mainRef.current.goNext()}
            >
                <FaChevronRight />
            </div>
            <Slide
                infinite={true}
                easing="ease-in"
                transitionDuration="800"
                duration={3000}
                arrows={false}
                ref={mainRef}
            >
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <img
                            src={slideImage.url}
                            alt={slideImage.caption}
                            style={{
                                width: "100vw",
                                maxHeight: "100vh",
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
