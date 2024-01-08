"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { projectTypes, projects, tags } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

const PaginationCard = () => {
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

  const variants = (index: number) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: index * 0.2,
      },
    },
  });
  const staggerContainer = (
    staggerChildren: number,
    delayChildren: number,
  ) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });
  return (
    <motion.section
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      transition={{ delay: 0.5, ease: "easeInOut", duration: 1 }}
    >
      <div className=" my-12 flex flex-wrap justify-center  gap-6">
        {currentCard.map((currElem: projectTypes) => (
          <motion.div
            variants={variants(currElem.id)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="glassmorphism  w-full max-w-[370px]"
            key={currElem.id}
          >
            <div className="relative m-auto w-full p-3 ">
              <div className="relative m-auto max-w-full md:h-[200px]">
                <Image
                  src={currElem.image}
                  alt={currElem.description}
                  sizes="(max-width:768px) 70vw"
                  className="h-full rounded-2xl object-fill"
                />
              </div>

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
              <p className="custom-scrollbar mt-3 h-[150px] p-1 text-start text-sm ">
                {currElem.description}
              </p>

              <div className="mt-6 flex flex-row flex-wrap gap-2 md:gap-5">
                {currElem.tags.map((tag: tags) => (
                  <span key={tag.id} className={tag.color}>
                    {`#${tag.framework}`}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePage}
      />
    </motion.section>
  );
};

export default PaginationCard;
