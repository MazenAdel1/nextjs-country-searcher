import Content from "./Content";

export const metadata = {
  title: "Country Searcher",
  description: "Generated by create next app",
};

export default function Page({ params }: { params: { region: string } }) {
  metadata.title = `Country Searcher | ${params.region}`;

  return <Content />;
}