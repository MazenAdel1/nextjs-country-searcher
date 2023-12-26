"use client";

import arrow from "@/assets/arrow.svg";
import darkArrow from "@/assets/darkArrow.svg";

import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";

export default function Filter() {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            listRef.current?.classList.toggle(`hidden`);
            listRef.current?.classList.toggle(`flex`);
          }}
          className="dark:bg-element-dark relative flex h-full w-52 cursor-pointer items-center justify-between rounded-lg bg-light px-5 py-[14px] text-sm text-light drop-shadow-md dark:text-dark"
        >
          Filter by Region{" "}
          <Image src={arrow} alt="arrow" className="block w-5 dark:hidden" />
          <Image
            src={darkArrow}
            alt="arrow"
            className="hidden w-5 dark:block"
          />
        </button>
        <ul
          ref={listRef}
          className="bg-element dark:bg-element-dark absolute top-[110%] z-50 hidden w-52 flex-col overflow-hidden rounded-lg py-4 text-sm drop-shadow-md"
        >
          {regions.map((region) => (
            <li key={region}>
              <Link
                href={`/region/${region}`}
                className="bg-element dark:bg-element-dark block w-full px-5 py-1 text-light transition duration-200 hover:bg-[#ddd] dark:text-dark dark:hover:bg-[#31485c]"
              >
                {region}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
