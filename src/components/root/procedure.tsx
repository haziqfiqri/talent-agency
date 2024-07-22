export default function Procedure() {
  return (
    <section className="font-inter container mx-auto pl-2.5 pr-2.5 pt-16 lg:pt-24 lg:px-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <h1 className="font-semibold text-black text-3xl md:text-4xl lg:text-5xl text-center">
            How It Works
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row md:gap-10 lg:gap-20">
            <div className="hidden md:flex md:flex-row md:w-1/2">
              <img
                className="w-full h-fit object-cover rounded-xl"
                src="./misc/discuss.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10 w-full md:w-1/2">
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: "frame_inspect",
                    title: "Browse Our Talents",
                    description:
                      "Explore our diverse talent pool to find the perfect match for your project needs.",
                  },
                  {
                    icon: "support_agent",
                    title: "Contact Our Teams",
                    description:
                      "Reach out to our dedicated support team for personalized assistance and inquiries.",
                  },
                  {
                    icon: "check_circle",
                    title: "Confirm Your Picks",
                    description:
                      "Finalize your talent selection and book your chosen professionals for your project.",
                  },
                ].map((item, index, array) => (
                  <div className="flex flex-row gap-6" key={index}>
                    <div className="flex flex-col gap-2.5">
                      <span className="material-symbols-outlined text-5xl text-[#F97316]">
                        {item.icon}
                      </span>
                      {index !== array.length - 1 && (
                        <div className="flex flex-col items-center">
                          <div className="h-20 w-1 border-l-4 border-gray-400">
                            {""}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-full gap-4">
                      <h1 className="font-semibold text-black text-xl md:text-2xl lg:text-3xl">
                        {item.title}
                      </h1>
                      <p className="text-base lg:text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-col lg:mt-auto">
                <button className="text-center bg-black py-2.5 px-6 rounded-xl text-white">
                  Book Your Talents{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:hidden">
          <button className="text-center bg-black py-2.5 px-6 rounded-xl text-white">
            Book Your Talents{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
