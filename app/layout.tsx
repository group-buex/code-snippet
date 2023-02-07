import clsx from "clsx";
import { Inter } from "@next/font/google";

import "./globals.css";
import RootProvider from "#/src/components/provider/RootProvider";
const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body
        className={clsx(
          inter.className,
          "bg-white dark:bg-black text-black dark:text-white"
        )}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
