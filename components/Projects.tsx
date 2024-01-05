"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import PaginationNumber from "./PaginationNumber";
import Pagination from "./Pagination";

import { projectTypes, projects, tags } from "@/constants";
import { MotionSection } from "./MotionSection";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardPerPage: number = 3;
  const totalCards: number = projects.length;
  const totalPages: number = Math.ceil(totalCards / cardPerPage);
  //calculate currentPage range
  const startIndex: number = (currentPage - 1) * cardPerPage;
  const endIndex: number = Math.min(
    startIndex + cardPerPage - 1,
    totalCards - 1,
  );

  const currentCard = projects.slice(startIndex, endIndex + 1);

  const handlePage = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <MotionSection id="project" className="mt-16 text-[#68696e]">
      <h2 className="text-center text-4xl font-bold ">My Work Experience</h2>
      <p className="py-8 text-start text-xl md:text-justify">
        Demonstrating my expertise and proficiency, the showcased projects
        provide tangible illustrations of my skills and experience. Each project
        is succinctly outlined, featuring links to repositories containing the
        code and live demonstrations. This portfolio reflects my adeptness in
        addressing intricate challenges, collaborating with diverse
        technologies, and efficiently overseeing project management.
      </p>
      <div className=" my-12 flex flex-wrap justify-center  gap-6">
        {currentCard.map((currElem: projectTypes) => (
          <div
            className="glassmorphism h-auto w-full max-w-[370px] overflow-y-auto"
            key={currElem.id}
          >
            <div className="relative m-auto w-full p-3 ">
              <Image
                src={currElem.image}
                alt={currElem.description}
                className="h-full w-full rounded-2xl object-cover"
              />

              <Link href={currElem.githublink} target="_blank">
                <div className="grayscale-1 absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/50">
                  <Image
                    src="/images/github-icon.png"
                    alt="git-icon"
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            </div>

            <div className="p-3 ">
              <Link
                href={currElem.url}
                className="rounded-md bg-white/50 px-3 py-2 text-white"
                target="_blank"
              >
                View
              </Link>
              <p className="mt-3 h-[150px] overflow-y-auto text-justify text-sm">
                {currElem.description}
              </p>

              <p className="mt-6 flex flex-row gap-5">
                {currElem.tags.map((tag: tags) => (
                  <span key={tag.id} className={tag.color}>
                    {`#${tag.framework}`}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePage}
      />
    </MotionSection>
  );
};

export default Projects;
