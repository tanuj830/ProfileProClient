"use client";
import Image from "next/image";
import Hero from "../components/Hero";
import Loader from "@/components/Loader";
import React from "react";
import Navbar from "../components/Navbar";
export default function Home() {
  const [showLoader, setShowLoader] = React.useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 2000);
  return (
    <div className="relative">
      {showLoader ? <Loader /> : null}
      <Navbar />
      <Hero />
    </div>
  );
}
