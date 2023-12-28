"use client";

import SearchBar from "@/components/searchAndFilter/SearchBar";
import Filter from "@/components/searchAndFilter/Filter";
import HomePageCards from "@/components/homePage/HomePageCards";

import data from "../public/data.json";
import Card from "@/components/Card";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function Content() {
  const searchParam = useSearchParams();

  const results = useMemo(
    () =>
      data.map((country) => {
        if (searchParam.get(`search`)?.trim()) {
          if (
            country.name
              .toLowerCase()
              .includes(`${searchParam.get(`search`)?.trim().toLowerCase()}`)
          ) {
            return (
              <Card
                key={country.alpha3Code}
                flag={country.flags.png}
                countryName={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                alpha3Code={country.alpha3Code}
              />
            );
          }
        }
      }),
    [searchParam],
  );

  return (
    <section className="container">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <SearchBar />
        <Filter />
      </div>
      {!searchParam.get(`search`)?.trim() ? (
        <main className="grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-9 xl:grid-cols-4">
          <HomePageCards />
        </main>
      ) : (
        <>
          {!results.every((curr) => curr === undefined) ? (
            <main className="grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-9 xl:grid-cols-4">
              {results}
            </main>
          ) : (
            <h2 className="text-5xl text-light dark:text-dark">Not Found</h2>
          )}
        </>
      )}
    </section>
  );
}
