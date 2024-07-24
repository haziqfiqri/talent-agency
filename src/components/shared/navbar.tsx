import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex flex-row justify-between p-2.5 md:py-6 lg:py-6 lg:px-10 ">
      <div className="flex flex-row items-center">
        <Link href={"/"}>
          <img src="./logo.svg" className="w-full h-full" />
        </Link>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:gap-9 lg:items-center lg:text-black lg:text-md lg:font-medium">
        <button className="hover:cursor-pointer hover:border-b hover:border-black">
          <Link href={"/"}>Home</Link>
        </button>
        <button className="hover:cursor-pointer hover:border-b hover:border-black">
          <Link href={"/service"}>Services</Link>
        </button>
        <button className="hover:cursor-pointer hover:border-b hover:border-black">
          <Link href={"/talent"}>Talents</Link>
        </button>
        <button className="hover:cursor-pointer hover:border-b hover:border-black">
          Blogs
        </button>
        <button className="hover:cursor-pointer hover:border-b hover:border-black">
          Projects
        </button>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:gap-4 lg:items-center lg:text-black lg:text-md lg:font-medium">
        <button className="flex flex-row items-center bg-black py-2.5 px-6 rounded-xl text-white">
          Reach Us{" "}
        </button>
      </div>
      <button className="flex flex-row items-center lg:hidden">
        <span className="material-symbols-outlined text-black text-4xl">
          menu
        </span>
      </button>
    </nav>
  );
}
