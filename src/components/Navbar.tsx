import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" fixed top-0 z-40 flex w-full items-center justify-between bg-opacity-0 p-6">
      <div className=" absolute left-2 right-2  top-2 flex h-[70px] rounded-2xl border-2 border-white/50   backdrop-blur-sm " />
      <div className=" z-50 rounded-full  px-4 py-2 transition duration-700 ease-in-out  shadow-inner hover:shadow-green ">
        <a href="#one" className="font-bold text-black ">
          Alper
        </a>
      </div>
      <div className="z-50 space-x-4 rounded-full px-4 py-2 transition duration-700 ease-in-out shadow-inner hover:shadow-green  ">
        <a href="#two" className="font-bold text-black ">
          About
        </a>
        <a href="/contact" className="font-bold text-black ">
          Contact
        </a>
      </div>
    </nav>
  );
}
