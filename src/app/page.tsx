/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion, useViewportScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function Blob1() {
  const { scrollYProgress } = useViewportScroll();
  const [scale, setScale] = useState(20);
  const [x, setX] = useState(500);
  const spring = useSpring(x);

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      let newScale = 20 - v * 100;
      newScale = newScale < 0 ? 0 : newScale;
      setScale(newScale);
      setX(500 + v * 4000);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      className=" absolute  -z-20 rounded-full bg-purple blur-[30px]"
      style={{
        scale,
        width: 100,
        height: 100,
        position: "fixed",
        top: "50%",
        left: "50",
        x,
      }}
      animate={{ scale, x }}
    />
  );
}

function Blob2() {
  const { scrollYProgress } = useViewportScroll();
  const [scale, setScale] = useState(0);
  const [x, setX] = useState(0);
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const newScale1 = Math.max(0, Math.min((v - 0.1) * 100 - 15, 20));
      const newScale2 = Math.max(0, Math.min(60 - (v - 0.45) * 350, 20));
      const newScale = v > 0.45 ? newScale2 : newScale1;
      setScale(newScale);
      setX(Math.max(-1000, (v - 0.1) * 4000 - 1400));
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      className="left absolute -z-20 rounded-full bg-yellow blur-[20px]"
      style={{
        scale,
        width: 100,
        height: 100,
        position: "fixed",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
      }}
      animate={{ scale, x }}
    />
  );
}
function Blob3() {
  const { scrollYProgress } = useViewportScroll();
  const [scale, setScale] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const newScale1 = Math.max(0, Math.min((v - 0.55) * 100 - 15, 20));
      const newScale2 = Math.max(0, Math.min(60 - (v - 0.8) * 350, 20));
      const newScale = v > 0.8 ? newScale2 : newScale1;
      setScale(newScale);
      setX(Math.max(-1000, (v - 0.55) * 5000 - 1600));
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      className="left absolute  -z-20  rounded-full   bg-greenish blur-[30px] "
      style={{
        scale,
        width: 100,
        height: 100,
        position: "fixed",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
      }}
      animate={{ scale, x }}
    />
  );
}

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // reset after 2s
  };
  return (
    <>
      <Blob1 />
      <Blob2 />
      <Blob3 />
      <Navbar />

      <main className="scale-90 scroll-smooth sm:scale-100">
        <section id="one" className="">
          <div className=" items-center  justify-center  pt-0  sm:pt-24 md:flex  md:pt-44 ">
            <div className="z-10 order-1 flex justify-center p-0 drop-shadow-2xl  sm:p-10 md:order-2 ">
              <Image
                src="/profilep.png"
                alt="Profile Picture"
                className="rounded-full  "
                width={250}
                height={250}
                priority
              />
            </div>

            <div className=" order-2 flex justify-center md:order-1">
              <div className=" z-30  max-w-md ">
                <h1 className="p-10 text-center text-7xl font-bold text-black ">
                  Front-end Developer
                </h1>
                <div className="rounded-xl  bg-white/50 shadow-xl">
                  <p className="p-5 text-center text-xl text-black ">
                    Hi, I'm Alper Dedeoglu. A passionate Front-end Developer
                    based in Turkey.
                  </p>
                  <div className="flex  justify-center ">
                    <Image
                      src="/icons8-javascript.svg"
                      alt="ts"
                      className=" m-3 rounded-md transition duration-700 ease-in-out hover:scale-125 hover:bg-yellow hover:shadow-lg"
                      width={50}
                      height={50}
                      priority
                    />
                    <Image
                      src="/icons8-typescript.svg"
                      alt="ts"
                      className="  m-3 rounded-md transition duration-700 ease-in-out  hover:scale-125 hover:bg-blue hover:shadow-lg "
                      width={50}
                      height={50}
                      priority
                    />

                    <Image
                      src="/icons8-react.svg"
                      alt="ts"
                      className=" m-3 rounded-md transition duration-700 ease-in-out hover:scale-125 hover:bg-greenish hover:shadow-lg "
                      width={50}
                      height={50}
                      priority
                    />
                    <Image
                      src="/next-js.svg"
                      alt="ts"
                      className="  m-3 rounded-md p-1  transition duration-700 ease-in-out hover:scale-125 hover:bg-green hover:shadow-lg"
                      width={50}
                      height={50}
                      priority
                    />
                    <Image
                      src="/icons8-python.svg"
                      alt="ts"
                      className=" m-3 rounded-md transition duration-700 ease-in-out hover:scale-125 hover:bg-yellow hover:shadow-lg "
                      width={50}
                      height={50}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className=" items-center  justify-center  pt-96   md:flex">
          <div className=" order-2 flex justify-center md:order-1">
            <div className=" z-30  max-w-2xl p-5">
              <section id="About" className="pb-20" />

              <h1 className="p-10 text-center text-7xl font-bold text-black">
                About Me
              </h1>
              <div className="rounded-2xl bg-white/50 shadow-xl">
  <p className="p-3 text-xl text-black">
    Hello, I am a Front-end developer who loves to use innovative tools to create dynamic applications. I have a passion for coding and learning new technologies, and I enjoy solving complex problems with elegant solutions.
  </p>
  <p className="p-3 text-xl text-black">
    I started my journey as a developer when I learned how to write “Hello world!” type of code. Since then, I have worked on various projects that involved different languages, frameworks, and tools. One of my first projects was a social media content generator app that used an API to fetch relevant data and create engaging posts for different platforms. This project taught me how to use APIs, work with data, and design user interfaces.
  </p>
  <p className="p-3 text-xl text-black">
    I also have a background in graphic design, which gives me an edge in creating good looking and user-friendly interfaces. I have experience in using tools like Photoshop, Illustrator, and Figma to create logos, icons, illustrations, and mockups. I can also apply the principles of design, color theory, typography, and layout to my web development projects.
  </p>
  <p className="p-3 text-xl text-black">
    I am always eager to learn new things and improve my skills. I am currently working on a personal project that uses innovative tools to create a web app that can generate code from natural language. I am also interested in learning more about cloud computing, machine learning, and blockchain. I am looking for opportunities to work on challenging and exciting web development projects that can make a positive impact on the world. I am open to collaborating with other developers, designers, and clients who share my vision and values.
  </p>
</div>

            </div>
          </div>
        </div>

        <div className=" items-center  justify-center pt-96   md:flex">
          <div className=" order-2 flex justify-center md:order-1 ">
            <div className=" z-30 max-w-md p-5">
              <section id="Projects" className="pb-20" />

              <h1 className="p-10 text-7xl   font-bold text-black ">
                Projects
              </h1>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/alperddev/influiq"
              >
                <div className="flex rounded-2xl bg-white/50 shadow-xl transition duration-700 ease-in-out hover:scale-110 hover:shadow-2xl">
                  <Image
                    src="/influiqlogo.png"
                    alt="influiq"
                    className=" m-5 rounded-2xl "
                    width={120}
                    height={120}
                    priority
                  />

                  <div className="">
                    <h1 className="mb-2 ml-5 mt-5 text-4xl font-bold">
                      influiq
                    </h1>
                    <p className="ml-5 font-medium text-black ">
                      Influiq is an app that I developed for generating YouTube
                      video content.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex  items-center  justify-center   pt-96">
          <div className=" z-30 mb-16 flex max-w-md items-center rounded-xl bg-white/50 p-5  shadow-xl ">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/alperddev"
            >
              <div className="">
                <Image
                  src="/icons8-github.svg"
                  alt="ts"
                  className=" mr-3 rounded-md  transition duration-700 ease-in-out hover:scale-125 hover:bg-purple hover:shadow-lg"
                  width={50}
                  height={50}
                  priority
                />
              </div>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/alperddev/"
            >
              <div className="">
                <Image
                  src="/icons8-instagram.svg"
                  alt="ts"
                  className=" ml-6 mr-8 rounded-md p-1  transition duration-700 ease-in-out hover:scale-125 hover:bg-pink hover:shadow-lg"
                  width={50}
                  height={50}
                  priority
                />
              </div>
            </Link>
            <CopyToClipboard text="alperd.dev@gmail.com" onCopy={onCopy}>
              <div className="flex h-14 items-center justify-center rounded-md transition duration-700 ease-in-out hover:scale-110 hover:bg-blue hover:shadow-lg">
                <Image
                  src="/email-svgrepo-com.svg"
                  alt="ts"
                  className="ml-3"
                  width={50}
                  height={50}
                  priority
                />
                <p className="pl-2 pr-3 font-medium">
                  alperd.dev@gmail.com {isCopied ? "Copied!" : ""}
                </p>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <section id="Contact" className="" />
      </main>
    </>
  );
}
