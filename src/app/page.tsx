/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";

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
      let newScale1 = Math.max(0, (v - 0.1) * 130 - 15);
      let newScale2 = Math.max(0, 60 - (v - 0.1) * 190);
      let newScale = v > 0.35 ? newScale2 : newScale1;
      setScale(newScale);
      setX(Math.max(-1000, (v - 0.1) * 7000 - 1600));
    });
  }, [scrollYProgress]);
  return (
    <motion.div
      className="left  absolute  -z-20  rounded-full   bg-yellow blur-[20px] "
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
      let newScale1 = Math.max(0, (v - 0.5) * 130 - 15);
      let newScale2 = Math.max(0, 60 - (v - 0.5) * 190);
      let newScale = v > 0.75 ? newScale2 : newScale1;
      setScale(newScale);
      setX(Math.max(-1000, (v - 0.5) * 7000 - 1600));
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
  return (
    <>
    
      <Blob1 />
      <Blob2 />
      <Blob3 />
      <Navbar />

      <main className="scroll-smooth" >
      <section id="one" className="">
        <div className=" items-center  justify-center  pt-12 md:flex   md:pt-36">
          <div className="z-10 order-1 flex justify-center  p-10  drop-shadow-2xl md:order-2 ">
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
            <div className=" z-30 max-w-md p-5 ">
              <h1 className="p-3 text-center text-7xl font-extrabold text-black/90 ">
                Full-Stack Developer
              </h1>
              <p className="p-5 text-center text-xl text-black/90 ">
                Hi, I'm Alper Dedeoglu. A passionate Full-Stack Developer based
                in Turkey.
              </p>
              <div className="flex  justify-center ">
                <Image
                  src="/icons8-javascript.svg"
                  alt="ts"
                  className=" m-3 rounded-md hover:scale-125 hover:bg-yellow hover:shadow-lg transition duration-700 ease-in-out"
                  width={50}
                  height={50}
                  priority
                />
                <Image
                  src="/icons8-typescript.svg"
                  alt="ts"
                  className=" m-3 rounded-md transition duration-700 ease-in-out  hover:scale-125 hover:bg-blue hover:shadow-lg "
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
                  className="m-3 rounded-md p-1  hover:scale-125 hover:bg-green hover:shadow-lg transition duration-700 ease-in-out"
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
</section>

        <div className=" items-center  justify-center  pt-96   md:flex">
          <div className=" order-2 flex justify-center md:order-1">
            <div className=" z-30  p-5 max-w-2xl">
            <section id="two" className="pb-20" />

              <h1 className="p-5 text-center text-7xl font-extrabold text-black/90">
                About Me
              </h1>

              <div className="shadow-inner  rounded-xl">
                <p className="p-3 text-xl text-black/90">
                  Hello, I am a full-stack developer who loves to use AI assist
                  tools to create innovative and dynamic applications. I
                  have a passion for coding and learning new technologies, and I
                  enjoy solving complex problems with elegant solutions.
                </p>
                <p className="p-3 text-xl text-black/90">
                  I started my journey as a developer when I learned how to
                  write “Hello world!” type of code. Since then, I have worked
                  on various projects that involved different languages,
                  frameworks, and tools. One of my first projects was a social
                  media content generator app that used an API to fetch relevant
                  data and create engaging posts for different platforms. This
                  project taught me how to use APIs, work with data, and design
                  user interfaces.
                </p>
                <p className="p-3 text-xl text-black/90">
                  I also have a background in graphic design, which gives me an
                  edge in creating good looking and user-friendly interfaces. I
                  have experience in using tools like Photoshop, Illustrator,
                  and Figma to create logos, icons, illustrations, and mockups.
                  I can also apply the principles of design, color theory,
                  typography, and layout to my web development projects.
                </p>
                <p className="p-3 text-xl text-black/90">
                  I am always eager to learn new things and improve my skills. I
                  am currently working on a personal project that uses AI assist
                  tools to create a web app that can generate code from natural
                  language. I am also interested in learning more about cloud
                  computing, machine learning, and blockchain. I am looking for
                  opportunities to work on challenging and exciting web
                  development projects that can make a positive impact on the
                  world. I am open to collaborating with other developers,
                  designers, and clients who share my vision and values.
                </p>

              </div>
            </div>
          </div>
        </div>
        <div className=" items-center  justify-center pt-96   md:flex">
          <div className="z-10 order-1 flex justify-center  p-10  drop-shadow-2xl md:order-2 ">
            <Image
              src="/profilep.png"
              alt="Profile Picture"
              className="rounded-full  "
              width={250}
              height={250}
              priority
            />
          </div>

          <div className=" order-2 flex justify-center md:order-1 ">
            <div className=" z-30 max-w-md p-5">
              <h1 className="p-3 text-7xl font-extrabold text-black/90 ">
                Full-Stack Developer
              </h1>
              <p className="p-3 text-xl text-black/90">
                Hi, I'm Alper Dedeoglu. A passionate Full-Stack Developer based
                in Turkey.
              </p>
              <div className="flex ">
                <Image
                  src="/icons8-javascript.svg"
                  alt="ts"
                  className=" m-2 rounded-md transition-transform hover:scale-125 hover:bg-yellow hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />
                <Image
                  src="/icons8-typescript.svg"
                  alt="ts"
                  className=" m-2 rounded-md transition-transform hover:scale-125 hover:bg-blue hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />

                <Image
                  src="/icons8-react.svg"
                  alt="ts"
                  className=" m-2 rounded-md transition-transform hover:scale-125 hover:bg-greenish hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />
                <Image
                  src="/next-js.svg"
                  alt="ts"
                  className="m-2 rounded-md p-1 transition-transform hover:scale-125 hover:bg-green hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />
                <Image
                  src="/icons8-python.svg"
                  alt="ts"
                  className=" m-2 rounded-md transition-transform hover:scale-125 hover:bg-yellow hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" items-center  justify-center  pt-96   md:flex">
          <div className="z-10 order-1 flex justify-center  p-10  drop-shadow-2xl md:order-2 ">
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
            <div className=" z-30 max-w-md p-5">
              <h1 className="p-3 text-7xl font-extrabold text-black/90 ">
                Full-Stack Developer
              </h1>
              <p className="p-3 text-xl text-black/90">
                Hi, I'm Alper Dedeoglu. A passionate Full-Stack Developer based
                in Turkey.
              </p>
              <div className="flex ">
                <Image
                  src="/icons8-javascript.svg"
                  alt="ts"
                  className=" m-2 rounded-md transition-transform hover:scale-125 hover:bg-yellow hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />
                <Image
                  src="/icons8-typescript.svg"
                  alt="ts"
                  className=" m-2 rounded-md transition-transform hover:scale-125 hover:bg-blue hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />

                <Image
                  src="/icons8-react.svg"
                  alt="ts"
                  className=" m-2 rounded-md transition-transform hover:scale-125 hover:bg-greenish hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />
                <Image
                  src="/next-js.svg"
                  alt="ts"
                  className="m-2 rounded-md p-1 transition-transform hover:scale-125 hover:bg-green hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />
                <Image
                  src="/icons8-python.svg"
                  alt="ts"
                  className=" m-2 rounded-md transition-transform hover:scale-125 hover:bg-yellow hover:shadow-lg hover:ease-in-out"
                  width={50}
                  height={50}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
