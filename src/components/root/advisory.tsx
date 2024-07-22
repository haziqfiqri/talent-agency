import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Advisory() {
  return (
    <section className="font-inter pt-16 lg:pt-24">
      <div className="flex flex-row border-y w-full border-black px-0 py-2.5 md:py-6 lg:py-9 lg:px-0">
        <Marquee
          className="overflow-hidden"
          pauseOnHover={true}
          speed={100}
          direction={"right"}
        >
          {[...Array(10)].map((_, index) => {
            return (
              <div
                className="flex flex-row items-center gap-6 flex-shrink-0 pr-6"
                key={index}
              >
                <h1 className="text-black font-normal whitespace-nowrap text-3xl md:text-4xl lg:text-5xl hover:border-b hover:border-[#F97316]">
                  <Link href={"/contact"}>Let's Talk</Link>
                </h1>
                <img src="./star.svg" alt="" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
