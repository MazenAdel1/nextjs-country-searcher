import data from "@/public/data.json";

export default function InfoListItem({
  title,
  countryData,
  json,
  isArray,
}: {
  title: string;
  countryData: (typeof data)[0];
  json: string;
  isArray: boolean;
}) {
  return (
    <li className="font-light">
      <span className="w-max text-base font-semibold">{title}:</span>{" "}
      {isArray
        ? `${(
            countryData[`${json}` as keyof (typeof data)[0]] as {
              name: string;
            }[]
          )?.map((item) => ` ${item.name}`)}`
        : typeof countryData[`${json}` as keyof (typeof data)[0]] == "number"
          ? `${countryData[
              `${json}` as keyof (typeof data)[0]
            ]?.toLocaleString()}`
          : `${countryData[`${json}` as keyof (typeof data)[0]]}`}
    </li>
  );
}
