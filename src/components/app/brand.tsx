import Marquee from "react-fast-marquee";

export default function Brand() {
  return (
    <section className="font-inter pt-16 lg:pt-24">
      <div className="flex flex-row w-full px-0 py-2.5 md:py-6 lg:py-9 lg:px-0">
        <Marquee className="overflow-hidden" pauseOnHover={true} speed={100}>
          {[
            {
              src: "./brand/tourism.svg",
            },
            {
              src: "./brand/mas.svg",
            },
            {
              src: "./brand/energizer.svg",
            },
            {
              src: "./brand/chip.svg",
            },
            {
              src: "./brand/oral-b.svg",
            },
            {
              src: "./brand/panasonic.svg",
            },
            {
              src: "./brand/m-series.svg",
            },
            {
              src: "./brand/mars.svg",
            },
            {
              src: "./brand/snickers.svg",
            },
          ].map((item, index) => {
            return (
              <div
                className="flex flex-row items-center flex-shrink-0 mr-20 max-w-36 max-h-12"
                key={index}
              >
                <img className="w-full h-full" src={item.src} alt="" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
