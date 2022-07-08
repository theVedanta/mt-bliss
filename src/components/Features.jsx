const Features = () => {
    const feats = [
        {
            img: "/assets/feats/sp.png",
            name: "Swimming Pool to cool",
            desc: `Beat the heat and enjoy the cool breeze of the pool. Mount Bliss offers a beautiful Swimming pool with plenty of space around for the adults to enjoy too.`,
        },
        {
            img: "/assets/feats/mt.png",
            name: "Scenic View",
            desc: `The beautiful mountains around and a soothing scenery from the villa are really beautiful. The view is breathtaking and the mountain is just a short walk away.`,
        },
        {
            img: "/assets/feats/wifi.png",
            name: "The Modern getaway",
            desc: `The bungalow provides accommodation with free wifi, AC Rooms, a kitchen and a living room. The villa is also equipped with a terrace and a balcony and of course, the swimming pool.`,
        },
        {
            img: "/assets/feats/food.png",
            name: "Delicious delicacies",
            desc: `With prior notice, You can have delicious food to be cooked at the bungalow itself at a very nominal cost. Our caretaker will make sure that there won't be any tummies rumbling.`,
        },
        {
            img: "/assets/feats/tv.png",
            name: "Entertainment",
            desc: `Feeling lazy and want to just enjoy the serenity of the villa? We have you covered with entertainment. The villa has a TV along with WIFI to watch your favorite movies/shows.`,
        },
        {
            img: "/assets/feats/work.png",
            name: "Important work?",
            desc: `In case you would wish to work on your vacation, the bungalow has a Desk with a very comfortable chair for the same. The dedicated workspace is very calm and quiet.`,
        },
    ];

    return (
        <section
            className="features px-32 my-24 lap:px-16 lap:my-14 lap:mt-20 ph:px-6"
            id="features"
        >
            <h3 className="text-5xl font-semibold text-center mb-16">
                Features
            </h3>
            <div className="feat-cards w-full flex flex-wrap justify-between items-center">
                {feats.map((feat) => {
                    return (
                        <div
                            className="feat-card rounded-2xl px-14 py-10 transition-all h-80 bg-slate-200 blap:px-10 blap:py-8 tab:px-8 tab:h-72"
                            key={feats.indexOf(feat)}
                        >
                            <img
                                src={feat.img}
                                alt="jacz"
                                className="w-2/12 lap:w-2/12"
                            />
                            <h3 className="text-2xl font-bold mt-7 lap:text-xl">
                                {feat.name}
                            </h3>
                            <p className="mt-4 text-justify tab:text-sm">
                                {feat.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
