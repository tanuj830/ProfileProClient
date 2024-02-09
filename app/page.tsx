"use client";
import Image from "next/image";
import Hero from "../components/Hero";
import Loader from "@/components/Loader";
import React from "react";
export default function Home() {
  const [showLoader, setShowLoader] = React.useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 2000);
  return (
    <div className="relative">
      {showLoader ? <Loader /> : null}
      <Hero />
    </div>
  );
}
