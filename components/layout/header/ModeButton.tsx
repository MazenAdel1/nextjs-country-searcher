"use client";

import Image from "next/image";
import moon from "@/assets/moon.svg";
import darkMoon from "@/assets/darkMoon.svg";
import { useEffect, useState } from "react";

export default function ModeButton() {
  const [dark, setDark] = useState<boolean>();

  const handleClick = () => {
    localStorage.dark = !dark;
    setDark(localStorage.getItem(`dark`) === "true");
  };

  useEffect(() => {
    document.children[0].className =
      localStorage.getItem(`dark`) === "true" ? "dark" : "";
  }, [dark]);

  return (
    <button
      onClick={handleClick}
      className="flex cursor-pointer items-center justify-center gap-1 bg-[transparent] text-base font-semibold text-light outline-none dark:text-dark"
    >
      <Image
        src={moon}
        alt="moon"
        className="block w-5 -rotate-[40deg] dark:hidden"
      />{" "}
      <Image
        src={darkMoon}
        alt="moon"
        className="hidden w-5 -rotate-[40deg] dark:block"
      />{" "}
      Dark Mode
    </button>
  );
}
