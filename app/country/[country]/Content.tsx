"use client";

import { useParams } from "next/navigation";

import Image from "next/image";

import data from "@/public/data.json";
import BackButton from "@/components/country/BackButton";
import Info from "@/components/country/Info";

export default function Content() {
  const { country } = useParams();

  return (
    <>
      <section className="container">
        <BackButton />
        {data.map((countryData) => {
          if (countryData.alpha3Code === country) {
            return (
              <main
                key={country}
                className="flex flex-col gap-12 text-light lg:flex-row lg:gap-20 dark:text-dark"
              >
                <div className="relative max-h-[500px] min-h-[250px] w-full sm:min-h-[400px] lg:w-1/2">
                  <Image
                    src={countryData.flags.svg}
                    alt={countryData.name}
                    fill
                    unoptimized
                    className="block object-contain"
                  />
                </div>
                <Info countryData={countryData} />
              </main>
            );
          }
        })}
      </section>
    </>
  );
}
