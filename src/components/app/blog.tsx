export default function Block() {
  return (
    <section className="font-inter container mx-auto pl-2.5 pr-2.5 pt-16 lg:pt-24 lg:px-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
          <h1 className="font-semibold text-black text-3xl md:text-4xl lg:text-5xl text-center">
            Our Latest News
          </h1>
          <p className="text-lg border-b text-center self-center border-black md:self-end">
            View all articles
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <div
              className="flex flex-col p-2.5 gap-4 bg-gradient-to-b to-[#f7f7f7] from-[#ffffff] rounded-xl"
              key={index}
            >
              <div className="flex flex-col">
                <img
                  className="w-full h-full rounded-xl"
                  src="./misc/production.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1.5 pb-5 px-2.5">
                <p className="font-light text-xs">
                  Author <span className="text-xs"> &#8226;</span>{" "}
                  <span>Jan 29, 2024</span>
                </p>
                <div className="flex flex-row gap-4">
                  <h1 className="font-semibold text-black text-lg">
                    Exploring the different type of marketing
                  </h1>
                  <span className="material-symbols-outlined text-md">
                    north_east
                  </span>
                </div>
                <p className="text-sm text-wrap">
                  Marketing plays an essential role in brand exposure. Follow
                  the advice of key opinion leader.
                </p>
              </div>
              <div className="flex flex-row">
                <button className="text-white text-xs px-3 py-1.5 bg-black rounded-full">
                  Marketing
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
