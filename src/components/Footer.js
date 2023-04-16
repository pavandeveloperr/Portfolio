import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full font-medium text-lg border-t-2 border-solit border-dark">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Made with&nbsp;{" "}
          <span className="mt-1">{<AiFillHeart color="red" />}</span>&nbsp;by
          &nbsp;
          <Link
            href={"https://github.com/pavandeveloperr"}
            className={"underline"}
            target="_blank"
          >
            {" "}
            Pavan
          </Link>
        </div>
        <Link
          href={"/https://www.linkedin.com/in/pavankulkarnii"}
          className={"underline"}
        >
          Say Hello <span className="no-underline">👋🏻</span>{" "}
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
