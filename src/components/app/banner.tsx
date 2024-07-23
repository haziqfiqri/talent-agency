"use client";

import Link from "next/link";
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <section className="font-inter bg-gradient-to-b from-[#f7f7f7] to-[#ffffff]">
      <div className="container mx-auto px-2.5 pt-20 lg:pt-24 lg:px-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-28">
            <div className="flex flex-col gap-6 lg:w-3/5">
              <div className="flex flex-col font-semibold">
                <h1 className="text-black text-3xl md:text-4xl lg:text-5xl">
                  Provide Brands With
                </h1>
                <h1 className="text-3xl md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed bg-gradient-to-r from-[#a7a7a7] via-[#5a5a5a] to-[#000000] text-transparent bg-clip-text">
                  Compelling{" "}
                  <ReactTyped
                    showCursor={false}
                    strings={["Talent", "Concept", "Content"]}
                    typeSpeed={80}
                    backSpeed={80}
                    loop
                  />
                </h1>
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-pretty">
                  From film productions, artist and campaigns management, or
                  marketing, our experienced team will work closely with you to
                  ensure that your project is delivered.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-2/5 lg:mt-auto">
              <div className="flex flex-col items-start md:flex-row gap-4 md:items-center">
                <div className="flex flex-row -space-x-2 overflow-hidden">
                  {[
                    {
                      src: "https://picsum.photos/500/500?random=1",
                    },
                    {
                      src: "https://picsum.photos/500/500?random=2",
                    },
                    {
                      src: "https://picsum.photos/500/500?random=3",
                    },
                    {
                      src: "https://picsum.photos/500/500?random=4",
                    },
                  ].map((item, index) => {
                    return (
                      <img
                        key={index}
                        className="inline-block h-10 w-10 rounded-full"
                        src={item.src}
                        alt=""
                      />
                    );
                  })}
                </div>
                <div className="flex flex-row w-full md:w-1/2 lg:w-1/2">
                  <p className="text-base text-pretty font-light">
                    Trusted by Over 30+ Customers & Clients.
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <Link href={"/service"}>
                  <button className="text-center bg-black py-2.5 px-6 rounded-xl text-white">
                    Explore Services{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row-reverse gap-6 md:gap-0 lg:gap-28">
            <div className="flex flex-col font-semibold w-full md:w-2/5">
              <h1 className="text-black text-lg md:text-xl lg:text-2xl lg:self-start">
                &#8220; Reshaping{" "}
                <span className="bg-gradient-to-l from-[#a7a7a7] via-[#5a5a5a] to-[#000000] text-transparent bg-clip-text">
                  Entertainment &#8221;
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-3/5 lg:mt-auto">
              <div className="flex flex-row flex-wrap md:flex-nowrap font-semibold gap-6 sm:gap-8 md:gap-6 lg:gap-10">
                {[
                  {
                    value: "98%",
                    label: "Client Satisfaction",
                  },
                  {
                    value: "30+",
                    label: "Happy Customers",
                  },
                  {
                    value: "98%",
                    label: "Revenue Increased",
                  },
                ].map((item, index) => {
                  return (
                    <div
                      className="flex flex-col-reverse md:flex-col gap-1"
                      key={index}
                    >
                      <h1 className="text-[#F97316] text-left text-lg md:text-2xl lg:text-4xl ">
                        {item.value}
                      </h1>
                      <p className="text-black text-sm">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
