import Header from "@/components/layout/header/Header";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} bg-light pb-6 font-nunito dark:bg-dark`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
