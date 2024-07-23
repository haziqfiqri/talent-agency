"use client";

import Link from "next/link";
import { useState } from "react";

export default function Search() {
  const [selectedTab, setSelectedTab] = useState("Child");

  const tabs = [
    { title: "Child" },
    { title: "Teen" },
    { title: "Adult" },
    { title: "Elder" },
  ];

  const images = [
    { title: "Child", src: "./talent/child.png" },
    { title: "Teen", src: "./talent/teen.png" },
    { title: "Adult", src: "./talent/adult.png" },
    { title: "Elder", src: "./talent/elder.jpg" },
  ];

  return (
    <section className="font-inter container mx-auto pl-2.5 pr-2.5 pt-16 lg:pt-24 lg:px-10">
      <div className="flex flex-col md:flex-row md:gap-16 lg:gap-28">
        <div className="flex flex-col w-full gap-10 lg:w-1/2">
          <div className="flex flex-col">
            <h1 className="font-semibold text-black text-3xl md:text-4xl lg:text-5xl">
              Discover Talents
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            <div className="inline-flex">
              <div className="flex flex-row gap-10 border-b border-gray-300">
                {tabs.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`font-medium text-xl pb-2.5 hover:border-b hover:border-[#F97316] ${
                        selectedTab === item.title
                          ? "border-b border-[#F97316]"
                          : ""
                      }`}
                      onClick={() => setSelectedTab(item.title)}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-lg text-pretty">
              At Lorem, we showcase diverse talents poised to make their mark in
              entertainment across all categories and ages.
            </p>
          </div>

          <div className="flex flex-row">
            <button className="text-center bg-black py-2.5 px-6 rounded-xl text-white">
              <Link href={"/talent"}>Find Talents</Link>
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:w-1/2">
          {images
            .filter((item) => item.title === selectedTab)
            .map((item, index) => (
              <div className="flex flex-col max-h-[532px]" key={index}>
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={item.src}
                  alt={item.title}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
