"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { createContext, useContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const AppContext = createContext<any>(undefined);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [strr, setStrr] = useState("darkmode");

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContext.Provider value={{ strr, setStrr }}>
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
