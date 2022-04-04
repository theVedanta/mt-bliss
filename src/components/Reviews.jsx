import OwlCarousel from "react-owl-carousel2";
import { useEffect, useRef, useState } from "react";
import Review from "./Review";

const options = {
    items: 1,
    nav: false,
    autoplay: true,
    loop: true,
    dots: true,
    rewind: true,
    autoplayTimeout: 10000,
};

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const revRef = useRef("test");

    useEffect(() => {
        setReviews([
            {
                id: 1,
                name: "Ishaan",
                img: "/assets/sample/3.png",
                desc: `lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.`,
            },
            {
                id: 2,
                name: "Ishaan",
                img: "/assets/sample/3.png",
                desc: `lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.`,
            },
            {
                id: 3,
                name: "Ishaan",
                img: "/assets/sample/3.png",
                desc: `lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum est q quaerat. Reiciendis est in mollitia, impedit culpa voluptates vitae ipsa id accusamus quaerat.`,
            },
        ]);
    }, []);

    return (
        <div className="px-40">
            <h3 className="text-5xl font-semibold text-center">Reviews</h3>
            <OwlCarousel ref={revRef} options={options}>
                {reviews.map((review) => {
                    return <Review review={review} key={review.id} />;
                })}
            </OwlCarousel>
        </div>
    );
};

export default Reviews;
