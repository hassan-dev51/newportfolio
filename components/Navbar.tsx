"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = (): React.JSX.Element => {
  const [home, setHome] = useState<boolean>(true);
  const [about, setAbout] = useState<boolean>(false);
  const [project, setProject] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const Home: HTMLElement | null = document.getElementById("home");
      const TopHome: number | undefined = Home?.getBoundingClientRect().top;

      const About: HTMLElement | null = document.getElementById("about");
      const TopAbout: number | undefined = About?.getBoundingClientRect().top;

      const Project: HTMLElement | null = document.getElementById("project");
      const TopProject: number | undefined =
        Project?.getBoundingClientRect().top;

      if (TopHome && TopHome < 100) {
        setHome(true);
        setAbout(false);
        setProject(false);
      }
      if (TopAbout && TopAbout < 100) {
        setHome(false);
        setAbout(true);
        setProject(false);
      }
      if (TopProject && TopProject < 100) {
        setHome(false);
        setAbout(false);
        setProject(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between px-5 py-1">
      <Image
        src={"/images/logo.png"}
        alt="logo"
        width={380}
        height={380}
        priority
        className="h-[65px] w-auto object-contain"
      />
      <ul className="mr-8 hidden md:block">
        <li className="space-x-5 font-semibold uppercase">
          <a
            href="#home"
            className={home ? `text-[#2493D4]` : `text-[#68696E]`}
          >
            Home
          </a>
          <a
            href="#about"
            className={about ? `text-[#2493D4]` : `text-[#68696E]`}
          >
            About
          </a>
          <a
            href="#project"
            className={project ? `text-[#2493D4]` : `text-[#68696E]`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={project ? `text-[#2493D4]` : `text-[#68696E]`}
          >
            Contact
          </a>
        </li>
      </ul>
      {/* 
      <button className="border-gradient hidden px-4 py-1 font-semibold  text-[#68696E] hover:text-[#2493d4] md:block ">
        <a href="#contact">Contact</a>
      </button> */}
    </nav>
  );
};

export default Navbar;
