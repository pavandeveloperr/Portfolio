import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/project1.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl
     rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light px-6 text-lg font-semibold p-2 "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, github, link }) => {
  return (
    <article className=" w-full flex relative shadow-2xl items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light px-6 text-md font-semibold p-2 "
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Pavan | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text="Imagination Trumps Knowlegde!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto-Currency Dashboard"
                summary="Cryptocurrency Dashboard provides information about various cryptocurrency trends and their past price through graphical visualization."
                link="/"
                img={project1}
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto-Currency Dashboard"
                summary="Cryptocurrency Dashboard provides information about various cryptocurrency trends and their past price through graphical visualization."
                link="/"
                img={project1}
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto-Currency Dashboard"
                summary="Cryptocurrency Dashboard provides information about various cryptocurrency trends and their past price through graphical visualization."
                link=""
                img={project1}
                type="Project"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto-Currency Dashboard"
                summary="Cryptocurrency Dashboard provides information about various cryptocurrency trends and their past price through graphical visualization."
                link=""
                img={project1}
                type="Project"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
