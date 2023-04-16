import React from "react";
import { CircularTextFullStack } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 
    flex items-center justify-center overflow-hidden"
    >
      <div className="w-48 h-48 flex items-center justify-center relative">
        <CircularTextFullStack className={"fill-dark animate-spin-slow"} />

        <Link
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pavank.bit@gmail.com"
          className="flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
        text-light shadow-md border border-solid border-dark
        w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
