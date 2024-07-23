export default function Project() {
  return (
    <section className="font-inter container mx-auto pl-2.5 pr-2.5 pt-16 lg:pt-24 lg:px-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <h1 className="font-semibold text-black text-3xl md:text-4xl lg:text-5xl text-center">
            Past Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div className="flex flex-col gap-3 py-5 px-2.5">
                <h1 className="font-semibold text-black text-xl md:text-2xl lg:text-3xl">
                  RTM Malam Gala
                </h1>
                <p className="text-base lg:text-base text-wrap">
                  Malam Gala by RTM ads production and campaign project.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
