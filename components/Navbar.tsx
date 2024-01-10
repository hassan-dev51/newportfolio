"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionDiv } from "./MotionDiv";
import { AnimatePresence } from "framer-motion";

const Navbar = (): React.JSX.Element => {
  const [navColor, setNavColor] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  const links = ["home", "about", "project", "contact"];
  return (
    <>
      <nav
        className={`fixed top-0 z-10 flex w-full max-w-[1440px] items-center justify-between transition-all ease-in-out ${
          navColor && `bg-black/70`
        } px-5 py-1 ${navColor && `backdrop-blur-md `}`}
      >
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={380}
          height={380}
          priority
          className="h-[65px] w-auto object-contain"
        />

        <ul className={`mr-8`}>
          <li className="hidden space-x-5 font-semibold uppercase text-[#68696e] md:flex">
            {links.map((link) => (
              <a key={link} href={`#${link}`} className="capitalize">
                {link}
              </a>
            ))}
          </li>
          <Image
            src={"/images/menu.svg"}
            alt="menu-icon"
            width={20}
            height={20}
            className="md:hidden"
            onClick={() => setToggle(!toggle)}
          />
        </ul>
      </nav>
      <AnimatePresence>
        {toggle && (
          <MotionDiv
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
            className="fixed right-0 top-0 z-10 flex h-screen w-full flex-col items-end bg-black/50"
            onClick={() => setToggle(!toggle)}
          >
            <ul className={`h-screen w-[300px] bg-black p-3`}>
              <div className="m-6 flex justify-end">
                <Image
                  src={"/images/close.svg"}
                  alt="menu-icon"
                  width={18}
                  height={18}
                  className="md:hidden"
                />
              </div>
              <li className="flex flex-col gap-12 font-semibold uppercase text-[#68696e] md:hidden">
                {links.map((link) => (
                  <a key={link} href={`#${link}`} className="capitalize">
                    {link}
                  </a>
                ))}
              </li>
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
