"use client";

import Image from "next/image";
import arrowLeft from "@/assets/arrowLeft.svg";
import darkArrowLeft from "@/assets/darkArrowLeft.svg";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="mb-12 flex w-fit items-center gap-2 rounded-md bg-element px-8 py-2 text-light drop-shadow-md transition-all duration-200 hover:drop-shadow-lg dark:bg-element-dark dark:text-dark dark:hover:shadow-md"
      onClick={() => router.back()}
    >
      <Image src={arrowLeft} alt="Arrow left" className="block dark:hidden" />
      <Image
        src={darkArrowLeft}
        alt="Arrow left"
        className="hidden dark:block"
      />
      Back
    </button>
  );
}
