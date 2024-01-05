"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = (): React.JSX.Element => {
  const [navColor, setNavColor] = useState(false);
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
  return (
    <nav
      className={`b fixed top-0 z-10 flex w-full max-w-[1440px] items-center justify-between transition-all ease-in-out ${
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
      <ul className="mr-8 hidden md:block">
        <li className="space-x-5 font-semibold uppercase text-[#68696e]">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
