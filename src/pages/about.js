import AnimatedText from "@/Components/AnimatedText";
import Education from "@/Components/Education";
import Layout from "@/Components/Layout";
import Skills from "@/Components/Skills";
import Transitions from "@/Components/Transitions";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "../../public/images/profile/profile_pic.png";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionvalue = useMotionValue(1);

  const springvalue = useSpring(motionvalue, { duration: 4200 });

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionvalue.set(value);
    }
  }, [isInView, value, motionvalue]);

  useEffect(() => {
    springvalue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springvalue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Pavan | About Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose! "}
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-4xl sm:!mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 items-center">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase tex-dark/75 dark:text-primary">
                ABOUT ME
              </h2>
              <p className="font-medium">
                Hey there!, I am Pavan, a Full Stack Web Developer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences.I am always looking for new and innovative
                ways to bring my clients visions to life.
              </p>

              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium">
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 rounded-br-xl border-solid border-dark bg-light p-3 dark:bg-dark dark:border-primaryDark xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-primary " />
              <Image
                src={ProfilePic}
                alt="Profile Pic"
                className="w-full h-auto rounded-2xl border-solid border-2 dark:border-primaryDark"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
