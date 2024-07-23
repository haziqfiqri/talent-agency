export default function Discover() {
  return (
    <section className="font-inter container mx-auto pl-2.5 pr-2.5 pt-16 lg:pt-24 lg:px-10">
      <div className="flex flex-col gap-14 md:gap-20">
        <div className="flex flex-col">
          <h1 className="font-semibold text-black text-3xl md:text-4xl lg:text-5xl text-center">
            Discover Talents
          </h1>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 gap-3 relative">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./model/model4.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./model/model1.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./model/model2.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./model/model5.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./model/model3.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./model/model6.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./model/model7.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./model/model9.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./model/model8.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-sm flex items-center justify-center backdrop-opacity-5">
            <button className="bg-black text-white py-2.5 px-6  rounded-xl transition duration-300">
              Explore Our Talents
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
