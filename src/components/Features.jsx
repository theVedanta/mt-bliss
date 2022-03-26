const Features = () => {
    return (
        <section className="features px-32 my-20">
            <div className="feat-cards w-full flex flex-wrap justify-between items-center">
                {[1, 2, 3, 4, 5, 6].map(() => {
                    return (
                        <div
                            className="feat-card bg-gray rounded-lg p-12 transition-all hover:shadow-xl"
                            style={{ width: "32%", marginBottom: "2%" }}
                        >
                            <img
                                src="/assets/feats/jacuzzi.png"
                                alt="jacz"
                                className="w-2/12"
                            />
                            <h1 className="text-3xl font-bold mt-7">Jacuzzi</h1>
                            <p className="mt-4">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Consequatur dolorum est, nihil
                                dolore soluta dolores modi aliquid minima?
                                Reiciendis est in mollitia, impedit culpa
                                voluptates vitae ipsa id accusamus quaerat.
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
