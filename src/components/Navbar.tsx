import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" fixed top-0 z-40 flex w-full items-center justify-between bg-opacity-50 p-6">
      <div className=" absolute left-2 right-2  top-2 flex h-[70px] rounded-2xl  bg-whiteD/40 shadow-xl   backdrop-blur-sm " />
      <div className="z-50 rounded-full bg-blackL/5 px-4 py-2 transition duration-700 ease-in-out hover:shadow-inner-lg ">
        <a href="#one" className="font-bold text-blackL ">
          Alper
        </a>
      </div>
      <div className="z-50 space-x-4 rounded-full bg-blackL/5 px-4 py-2 transition duration-700  ease-in-out hover:shadow-inner-lg  ">
        <a href="#About" className="font-bold text-blackL ">
          About
        </a>
        <a href="#Projects" className="font-bold text-blackL ">
          Projects
        </a>
        <a href="#Contact" className="font-bold text-blackL ">
          Contact
        </a>
      </div>
    </nav>
  );
}
