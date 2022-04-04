const Review = ({ review }) => {
    return (
        <div className="review w-full flex flex-col cursor-grab mb-10 px-20 lap:mb-0">
            <div className="text-name flex items-center">
                <img
                    src={review ? review.img : ""}
                    alt="text-img"
                    className="w-20 h-20 rounded-full blap:w-24 blap:h-24 lap:w-20 lap:h-20 tab:w-14 tab:h-14 ph:w-12 ph:h-12"
                />
                <h3 className="text-4xl font-medium ml-10 blap:text-3xl lap:text-2xl tab:text-xl ph:text-base ph:ml-5">
                    {review ? review.name : ""}
                </h3>
            </div>
            <i className="text-xl h-full font-normal mt-10 text-justify lap:text-base tab:text-sm tab:pr-6 ph:pr-0 ph:mt-5">
                "{review ? review.desc : ""}"
            </i>
        </div>
    );
};

export default Review;
