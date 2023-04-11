import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/home-image.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pavan | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt={"DEVELOPER IMAGE"}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in React.js and web
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Soumya_Sootar.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  {/* RESUME <LinkArrow /> */}
                </Link>
                <Link
                  // href={"mailto:soumyaswaroopsootar@gmail.com"}
                  href={
                    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=soumyawaroopsootar@gmail.com"
                  }
                  target="_blank"
                  className="ml-4 flex items-center bg-dark text-light p-2 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  CONTACT
                  {/* <RiContactsBookFill className="ml-2" /> */}
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
