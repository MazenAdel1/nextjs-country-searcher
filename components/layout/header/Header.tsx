import Link from "next/link";
import ModeButton from "./ModeButton";

export default function Header() {
  return (
    <header className="mb-12 bg-element py-5 shadow-md dark:bg-element-dark dark:shadow-lg">
      <div className="container flex items-center justify-between">
        <Link
          href={"/"}
          className="text-lg font-bold text-light sm:text-xl dark:text-dark"
        >
          Where in the world?
        </Link>
        <ModeButton />
      </div>
    </header>
  );
}
