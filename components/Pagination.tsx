"use client";
import { skills } from "@/constants";
import { useState } from "react";
import PaginationNumber from "./PaginationNumber";
import Image from "next/image";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image
          src="/images/previous.svg"
          alt="next-icon"
          width={28}
          height={28}
          className="contrast-50"
        />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;

        if (
          pageNumber === 1 ||
          pageNumber === totalPages ||
          (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
        ) {
          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={pageNumber === currentPage ? "text-green-600" : ""}
            >
              {pageNumber}
            </button>
          );
        } else if (
          pageNumber === currentPage - 2 ||
          pageNumber === currentPage + 2
        ) {
          return <span key={pageNumber}>*****</span>;
        }

        return null;
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image
          src="/images/next.svg"
          alt="next-icon"
          width={32}
          height={32}
          className="contrast-50"
        />
      </button>
    </div>
  );
};

export default Pagination;
