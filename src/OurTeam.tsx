import LightRays from "./components/LightRays";
import Navigation from "./components/Navigation";
import { motion } from "motion/react";
import brandonLam from "./assets/pfps/brandon lam.avif";
import brianGe from "./assets/pfps/brian ge.avif";
import chloeChu from "./assets/pfps/chloe chu.avif";
import elinaKhan from "./assets/pfps/elina khan.avif";
import elizabethSoboleva from "./assets/pfps/elizabeth soboleva.avif";
import ericWangPfp from "./assets/pfps/eric wang new.avif";
import ethanGuan from "./assets/pfps/ethan guan.avif";
import ethanLeung from "./assets/pfps/ethan leung.avif";
import evelynDam from "./assets/pfps/evelyn dam.avif";
import jeffreyWang from "./assets/pfps/jeffrey wang.avif";
import justinChou from "./assets/pfps/justin chou.avif";
import justinWu from "./assets/pfps/justin wu.avif";
import kaleyWu from "./assets/pfps/kaley wu.avif";
import kyleZhou from "./assets/pfps/kyle zhou.avif";
import patrickZhang from "./assets/pfps/patrick zhang.avif";
import soroushPaidar from "./assets/pfps/soroush paidar new.avif";
import siddhMistry from "./assets/pfps/siddh mistry.avif";
import garyFu from "./assets/pfps/gary fu.avif";
import weizhongXia from "./assets/pfps/weizhong xia.avif";
import yichenXiao from "./assets/pfps/yichen xiao.avif";
import zongqiaoZhou from "./assets/pfps/zongqiao zhou.avif";

import danielGuo from "./assets/pfps/danielGuo.png";
import jaydenFu from "./assets/pfps/jaydenFu.png";
import jonathanGu from "./assets/pfps/jonathanGu.png";
import lucasChan from "./assets/pfps/lucasChan.png";
import samitHegde from "./assets/pfps/samitHegde.png";

import EmblaCarousel from "./components/EmblaCarousel";
import SpotlightCard from "./components/SpotlightCard";
import Footer from "./components/Footer";

export default function OurTeam() {
  return (
    <div className="">
      <div className="z-50">
        <Navigation />
      </div>
      <div className="relative z-10 flex flex-col pt-24">
        <div className="px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-center">
              Our Team
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-lg lg:text-xl xl:text-2xl font-semibold mb-4 text-center">
              Dedication. Expertise. Passion.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 px-8 text-md lg:text-lg text-center">
              Founded and run by St. Theresa of Lisieux CHS students enrolled in
              the Advanced Placement (AP) program in Ontario, International
              Baccalaureate (IB) students at Collège Jean-de-Brébeuf in Québec,
              and others in British Columbia, Algorithm Alchemists embodies
              excellence and innovation.
            </div>
            <div className="mb-4 px-8 text-md lg:text-lg text-center">
              Since our founding, we have reached over 100,000 people through
              our programs, resources, and outreach initiatives. Our team of
              dedicated teachers has consistently excelled in prestigious
              competitions, such as the Canadian Computing Competition (CCC) and
              the United States Computing Olympiad (USACO).{" "}
              <b>
                {" "}
                In the 2025 CCC, we proudly guided over 30 students to earn
                certificates of distinction{" "}
              </b>{" "}
              —a recognition awarded to those ranking in the top 25% of
              participants in both the junior and senior divisions.
            </div>
            <div className="mb-8 lg:mb-16 px-8 text-md lg:text-lg text-center">
              At Algorithm Alchemists, we are driven to equip students with the
              skills necessary to become fluent coders. We believe that coding
              will emerge as an essential skill in the new century, much like
              reading is today. Our expertise ranges from the fundamentals of
              Python to high-level competitive programming, ensuring thorough
              preparation for a variety of programming contests. Get to know our
              talented team of professionals and discover how we make learning
              to code both fun and engaging!
            </div>
          </motion.div>
          <div className="mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
            Ontario
          </div>
          <EmblaCarousel
            slides={[
              {
                name: "Patrick Zhang",
                title: "President / Web Development Teacher",
                image: patrickZhang,
              },
              {
                name: "Ethan Guan",
                title: "Vice President / Senior Class Lead / Marketing",
                description:
                  "Canadian Computing Competition (CCC) Junior Division Honour Roll",
                image: ethanGuan,
              },
              {
                name: "Justin Wen Hao Wu",
                title: "Vice President / Senior Class Teacher",
                description:
                  "Canadian Computing Competition (CCC) Junior Division Honour Roll",
                image: justinWu,
              },
              {
                name: "Samit Hegde",
                title: "Web Dev Lead Teacher / Marketing",
                image: samitHegde,
              },
              {
                name: "Daniel Guo",
                title: "Intermediate Class Teacher",
                image: danielGuo,
              },
              {
                name: "Jayden Fu",
                title: "Intermediate Class Teacher",
                image: jaydenFu,
              },
              {
                name: "Lucas Chan",
                title: "Junior Class Teacher / Marketing",
                image: lucasChan,
              },
              {
                name: "Jonathan Gu",
                title: "Junior Class Teacher",
                image: jonathanGu,
              },
              {
                name: "Eric Wang",
                title: "Mentor / Former President & Founder",
                description:
                  "United States of America Computing Olympiad (USACO) Silver Division",
                image: ericWangPfp,
              },
              {
                name: "Jeffrey Wang",
                title:
                  "Former Vice-President & Founder / Junior Class Lead / Outreach Coordinator",
                description:
                  "Canadian Computing Competition (CCC) Junior Division Distinction",
                image: jeffreyWang,
              },
              {
                name: "Ethan Leung",
                title:
                  "Former Vice-President / Intermediate Class Teacher / Marketing",
                image: ethanLeung,
              },
              {
                name: "Brian Ge",
                title:
                  "Former Senior Class Lead Teacher / Intermediate Teacher / Outreach Coordinator",
                description:
                  "Canadian Computing Competition (CCC) Senior Division Distinction",
                image: brianGe,
              },
              {
                name: "Yichen Xiao",
                title: "Former Web Dev Lead Teacher / Website Developer",
                description:
                  "Canadian Computing Competition (CCC) Senior Division Distinction",
                image: yichenXiao,
              },
              {
                name: "Elina Khan",
                title: "Former Head Public Relations Officer",
                image: elinaKhan,
              },
              {
                name: "Chloe Chu",
                title: "Former Public Relations Officer",
                image: chloeChu,
              },
              {
                name: "Kaley Wu",
                title: "Former Junior Class Teacher",
                image: kaleyWu,
              },
              {
                name: "Soroush Paidar",
                title: "Former Junior Class Teacher",
                image: soroushPaidar,
              },
              {
                name: "Siddh Mistry",
                title: "Former Intermediate Class Teacher",
                image: siddhMistry,
              },
              {
                name: "Gary Fu",
                title: "Former Intermediate Class Teacher",
                image: garyFu,
              },
              {
                name: "Brandon Lam",
                title: "Former Senior Class Teacher",
                description:
                  "Canadian Computing Competition (CCC) Senior Division Group 3 Honour Roll (top 3% of competitors)",
                image: brandonLam,
              },

              {
                name: "Kyle Zhou",
                title: "Former Senior Class Teacher",
                description:
                  "Perfect Score on Canadian Computing Competition (CCC) Junior Division",
                image: kyleZhou,
              },
              {
                name: "Justin Chou",
                title: "Former Junior Class Teacher",
                description:
                  "Canadian Computing Competition (CCC) Junior Division Distinction",
                image: justinChou,
              },
              {
                name: "Elizabeth Soboleva",
                title: "Former Junior Class Teacher",
                image: elizabethSoboleva,
              },
            ]}
          />
          <div className="mt-8 lg:mt-16 mb-4 text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
            Québec
          </div>
          <div className="gap-4 py-4 mb-8 hidden sm:flex justify-center">
            <SpotlightCard className="flex flex-col mx-2 w-64 lg:w-72 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0 h-full select-none">
              <div className="text-center text-2xl font-semibold mb-4">
                Zongqiao Zhou
              </div>
              <img
                src={zongqiaoZhou}
                alt="Zongqiao Zhou "
                className="rounded-lg w-40 lg:w-48"
              />
              <div className="text-center text-md lg:text-lg font-medium mt-2">
                Junior Teacher
              </div>
            </SpotlightCard>
            <SpotlightCard className="flex flex-col mx-2 w-64 lg:w-72 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0 h-full select-none">
              <div className="text-center text-2xl font-semibold mb-4">
                Weizhong Xia
              </div>
              <img
                src={weizhongXia}
                alt="Weizhong Xia "
                className="rounded-lg w-40 lg:w-48"
              />
              <div className="text-center text-md lg:text-lg font-medium mt-2">
                Junior Teacher
              </div>
            </SpotlightCard>
          </div>{" "}
          <div className="sm:hidden">
            <EmblaCarousel
              slides={[
                {
                  name: "Zongqiao Zhou",
                  title: "Junior Class Teacher",
                  image: zongqiaoZhou,
                },
                {
                  name: "Weizhong Xia",
                  title: "Junior Class Teacher",
                  image: weizhongXia,
                },
              ]}
            />{" "}
          </div>
          <div className="mt-8 mb-4 text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
            British Columbia
          </div>
          <div className="p-4 flex justify-center">
            <SpotlightCard className="flex flex-col mx-2 w-64 lg:w-72 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0 h-full select-none">
              <div className="text-center text-2xl font-semibold mb-4">
                Evelyn Dam
              </div>
              <img
                src={evelynDam}
                alt="Evelyn Dam "
                className="rounded-lg w-40 lg:w-48"
              />
              <div className="text-center text-md lg:text-lg font-medium mt-2">
                Junior Teacher
              </div>
            </SpotlightCard>
          </div>
        </div>
        <Footer />
      </div>

      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#9466ff"
          raysSpeed={0.5}
          lightSpread={2}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          saturation={0.5}
          distortion={0.01}
        />
      </div>
    </div>
  );
}
