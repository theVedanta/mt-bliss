const Features = () => {
    return (
        <section
            className="features px-32 my-24 lap:px-16 lap:my-14 lap:mt-20 ph:px-6"
            id="features"
        >
            <h1 className="text-5xl font-semibold text-center mb-16">
                Features
            </h1>
            <div className="feat-cards w-full flex flex-wrap justify-between items-center">
                {[1, 2, 3, 4, 5, 6].map((i) => {
                    return (
                        <div
                            className="feat-card rounded-2xl px-14 py-10 transition-all bg-slate-200 hover:shadow-xl blap:px-10 blap:py-8"
                            key={i}
                        >
                            <img
                                src="/assets/feats/jacuzzi.png"
                                alt="jacz"
                                className="w-2/12 lap:w-2/12"
                            />
                            <h1 className="text-3xl font-bold mt-7 lap:text-2xl">
                                Jacuzzi
                            </h1>
                            <p className="mt-4 text-justify tab:text-sm">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Consequatur dolorum est, nihil
                                dolore soluta dolores modi aliquid minima?
                                Reiciendis est in mollitia.
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
