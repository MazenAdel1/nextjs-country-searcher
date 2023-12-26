import Card from "../Card";
import data from "@/public/data.json";

export default function HomePageCards() {
  let countriesNames = [
    "Germany",
    `United States of America`,
    `Brazil`,
    `Iceland`,
    `Afghanistan`,
    `Åland Islands`,
    `Albania`,
    `Algeria`,
  ];

  return (
    <>
      {countriesNames.map((name) => {
        return data.map((country) => {
          if (name === country.name) {
            return (
              <Card
                key={country.alpha3Code}
                flag={country.flags.svg}
                countryName={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                alpha3Code={country.alpha3Code}
              />
            );
          }
        });
      })}
    </>
  );
}
