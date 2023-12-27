import data from "@/public/data.json";
import InfoListItem from "./InfoListItem";
import Link from "next/link";

const firstInfoData = [
  {
    title: "Native Name",
    json: "nativeName",
    isArray: false,
  },
  {
    title: "Population",
    json: "population",
    isArray: false,
  },
  {
    title: "Region",
    json: "region",
    isArray: false,
  },
  {
    title: "Sub Region",
    json: "subregion",
    isArray: false,
  },
  {
    title: "Capital",
    json: "capital",
    isArray: false,
  },
];

const secondInfoData = [
  {
    title: "Top Level Domain",
    json: "topLevelDomain",
    isArray: false,
  },
  {
    title: "Currencies",
    json: "currencies",
    isArray: true,
  },
  {
    title: "Languages",
    json: "languages",
    isArray: true,
  },
];

export default function Info({
  countryData,
}: {
  countryData: (typeof data)[0];
}) {
  return (
    <div className="flex w-full flex-col gap-7 lg:w-1/2 lg:py-10">
      <h2 className="text-3xl font-bold">{countryData.name}</h2>
      <div className="flex w-full flex-col justify-between gap-8 sm:flex-row sm:gap-2">
        <ul className="flex-1">
          {firstInfoData.map((el) => (
            <InfoListItem
              key={el.json}
              title={el.title}
              countryData={countryData}
              json={el.json}
              isArray={el.isArray}
            />
          ))}
        </ul>

        <ul className="flex-1">
          {secondInfoData.map((el) => (
            <InfoListItem
              key={el.json}
              title={el.title}
              countryData={countryData}
              json={el.json}
              isArray={el.isArray}
            />
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start gap-3 pt-5 font-semibold sm:flex-row">
        <h3 className="py-1">Borders Countries:</h3>
        <ul className="flex flex-1 flex-wrap gap-2">
          {countryData.borders?.map((item) => {
            return data.map((borderCountry) => {
              if (borderCountry.alpha3Code === item) {
                return (
                  <li key={item}>
                    <Link
                      href={`/country/${item}`}
                      className="block min-w-20 rounded-sm bg-element px-4 py-1 text-center font-light drop-shadow-md transition-all hover:drop-shadow-lg dark:bg-element-dark dark:hover:shadow-md"
                    >
                      {borderCountry.name}
                    </Link>
                  </li>
                );
              }
            });
          })}
        </ul>
      </div>
    </div>
  );
}
