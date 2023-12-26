import Image from "next/image";
import Link from "next/link";

export type CardProps = {
  flag: string;
  countryName: string;
  population: number;
  region: string;
  capital?: string;
  alpha3Code: string;
};

export default function Card({
  flag,
  countryName,
  population,
  region,
  capital,
  alpha3Code,
}: CardProps) {
  return (
    <Link
      href={`/country/${alpha3Code}`}
      className="flex min-h-80 w-full max-w-[300px] flex-col rounded-md bg-element text-black shadow-md transition-all duration-200 hover:shadow-lg focus-visible:shadow-lg md:max-w-[auto] dark:bg-element-dark dark:hover:shadow-xl"
    >
      <div className="relative min-h-[150px] basis-1/2 rounded-t-md">
        <Image
          unoptimized
          src={flag}
          alt={countryName}
          fill
          className="rounded-t-md object-cover"
        />
      </div>
      <div className="basis-1/2 p-5 dark:text-dark">
        <h2 className="pb-3 text-lg font-bold">{countryName}</h2>

        <ul className="flex flex-col gap-1 text-sm">
          <li className="font-semibold">
            Population:{" "}
            <span className="font-light">
              {population.toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </span>
          </li>
          <li className="font-semibold">
            Region: <span className="font-light">{region}</span>
          </li>
          <li className="font-semibold">
            Capital: <span className="font-light">{capital}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
}
