"use client";

import SearchBar from "@/components/searchAndFilter/SearchBar";
import Filter from "@/components/searchAndFilter/Filter";
import Card from "@/components/Card";

import data from "@/public/data.json";
import { useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function Content() {
  const { region } = useParams();

  const searchParam = useSearchParams();

  const results = useMemo(
    () =>
      data.map((country) => {
        if (searchParam.get(`search`)?.trim()) {
          if (
            country.region == region &&
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
        } else {
          if (country.region == region) {
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
    [searchParam, region],
  );

  return (
    <section className="container">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <SearchBar />
        <Filter />
      </div>

      {!results.every((curr) => curr === undefined) ? (
        <main className="grid grid-cols-1 justify-items-center gap-12 pb-6 sm:grid-cols-2 md:grid-cols-3 md:gap-9 xl:grid-cols-4">
          {results}
        </main>
      ) : (
        <h2 className="text-5xl text-light dark:text-dark">Not Found</h2>
      )}
    </section>
  );
}
