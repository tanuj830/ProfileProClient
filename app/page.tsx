"use client";
import Image from "next/image";
import Hero from "../components/Hero";
import Loader from "@/components/Loader";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import WhyUs from "@/components/WhyUs";
import { createContext } from "react";

const AppContext = createContext<any>(undefined);
export function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [strr, setStrr] = useState("darkmode");
  setTimeout(() => {
    setShowLoader(false);
  }, 2000);
  return (
    <AppContext.Provider value={{ strr, setStrr }}>
      <div className="relative">
        {showLoader ? <Loader /> : null}
        <Navbar />
        <Hero />
        <WhyUs />
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
