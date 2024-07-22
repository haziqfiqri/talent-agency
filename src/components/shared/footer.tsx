export default function Footer() {
  return (
    <footer className="font-inter bg-gradient-to-b from-[#ffffff] to-[#f7f7f7]">
      <div className="container mx-auto flex flex-col gap-9 md:flex-row justify-between px-2.5 py-8 md:py-16 lg:py-24 lg:px-10 ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-row">
              <img src="./logo.svg" className="w-fill h-full" />
            </div>
            <h1 className="flex flex-row md:flex-col md:self-start lg:flex-row items-center gap-1.5 text-black text-xl md:text-base lg:text-xl font-semibold">
              Lorem Ipsum Sdn Bhd
              <span className="font-light text-sm self-auto md:self-baseline lg:self-auto">
                (123456-A)
              </span>
            </h1>
          </div>
          <div className="flex flex-col mt-auto">
            <h1 className="text-black text-sm font-normal">
              Lorem © 2024. All rights reserved.
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-row gap-1">
              <h1 className="text-black text-base font-semibold">
                Main Office
              </h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-black text-sm font-light">
                27-G (Ground Floor, Dataran Mutiara, Jalan 7/4 <br />
                Taman Serdang Jaya, 43300 Seri Kembangan
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-row gap-1">
              <h1 className="text-black text-base font-semibold">
                Main Hotline
              </h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-black text-sm font-light">
                +03-123456789 | lorem@help.com
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-row gap-1">
              <h1 className="text-black text-base font-semibold">
                Sales Hotline
              </h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-black text-sm font-light">
                +03-123456789 | lorem@sales.com
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col font-medium gap-6">
            <button className="text-left md:text-start">
              <span className="hover:cursor-pointer hover:border-b hover:border-black">
                Services
              </span>
            </button>
            <button className="text-left md:text-start">
              <span className="hover:cursor-pointer hover:border-b hover:border-black">
                Talents
              </span>
            </button>
            <button className="text-left md:text-start">
              <span className="hover:cursor-pointer hover:border-b hover:border-black">
                News
              </span>
            </button>
            <button className="text-left md:text-start ">
              <span className="hover:cursor-pointer hover:border-b hover:border-black">
                Showcase
              </span>
            </button>
          </div>
          <div className="flex flex-col font-medium gap-6">
            <button className="flex flex-row-reverse md:flex-row self-start md:self-end items-center gap-2.5 text-left md:text-start">
              <span className=" hover:cursor-pointer hover:border-b hover:border-black">
                Facebook
              </span>
              <span className="material-symbols-outlined text-md">
                north_east
              </span>
            </button>
            <button className="flex flex-row-reverse md:flex-row self-start md:self-end items-center gap-2.5 text-left md:text-start">
              <span className=" hover:cursor-pointer hover:border-b hover:border-black">
                Instagram
              </span>
              <span className="material-symbols-outlined text-md">
                north_east
              </span>
            </button>
            <button className="flex flex-row-reverse md:flex-row self-start md:self-end items-center gap-2.5 text-left md:text-start">
              <span className=" hover:cursor-pointer hover:border-b hover:border-black">
                TikTok
              </span>
              <span className="material-symbols-outlined text-md ">
                north_east
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
