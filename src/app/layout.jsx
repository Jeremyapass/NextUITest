import { Inter } from "next/font/google";
import "./globals.css";
import Navigasi from "../component/navbar/page";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "WareHouse",
  description: "Warehous for Industries Documentation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main >
          <Navigasi />
          {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

/*
-Providers harus pakai 'use client'
-Provider harus dipisah karena File root engga boleh dipakaein 'use client'

*/