"use client";

import Image from "next/image";
import search from "@/assets/search.svg";
import darkSearch from "@/assets/darkSearch.svg";

import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      router.push(`?search=${inputRef.current?.value.trim()}`, {
        scroll: false,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-12 w-full items-center rounded-md bg-element text-light shadow-md sm:w-1/3 dark:bg-element-dark dark:text-dark"
    >
      <button
        type="submit"
        className="flex h-full items-center bg-[transparent] px-4"
      >
        <Image src={search} alt="search" className="block dark:hidden" />
        <Image src={darkSearch} alt="search" className="hidden dark:block" />
      </button>
      <input
        type="text"
        placeholder="Search for a country..."
        ref={inputRef}
        className="w-full bg-[transparent] text-base outline-none"
      />
    </form>
  );
}
