import { motion } from "motion/react";
import PageLayout from "@/layouts/PageLayout";
import EmblaCarousel from "@/components/EmblaCarousel";
import SpotlightCard from "@/components/SpotlightCard";
import { ontarioTeam, quebecTeam, bcTeam } from "@/data/team";

export default function OurTeamPage() {
  return (
    <PageLayout contentClassName="flex flex-col pt-24">
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
            Since our founding, we have reached over 100,000 people through our
            programs, resources, and outreach initiatives. Our team of dedicated
            teachers has consistently excelled in prestigious competitions, such
            as the Canadian Computing Competition (CCC) and the United States
            Computing Olympiad (USACO).{" "}
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
            skills necessary to become fluent coders. We believe that coding will
            emerge as an essential skill in the new century, much like reading
            is today. Our expertise ranges from the fundamentals of Python to
            high-level competitive programming, ensuring thorough preparation
            for a variety of programming contests. Get to know our talented team
            of professionals and discover how we make learning to code both fun
            and engaging!
          </div>
        </motion.div>
        <div className="mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          Ontario
        </div>
        <EmblaCarousel slides={ontarioTeam} />
        <div className="mt-8 lg:mt-16 mb-4 text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
          Québec
        </div>
        <div className="gap-4 py-4 mb-8 hidden sm:flex justify-center">
          {quebecTeam.map((member) => (
            <SpotlightCard
              key={member.name}
              className="flex flex-col mx-2 w-64 lg:w-72 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0 h-full select-none"
            >
              <div className="text-center text-2xl font-semibold mb-4">
                {member.name}
              </div>
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg w-40 lg:w-48"
              />
              <div className="text-center text-md lg:text-lg font-medium mt-2">
                {member.title}
              </div>
            </SpotlightCard>
          ))}
        </div>
        <div className="sm:hidden">
          <EmblaCarousel slides={quebecTeam} />
        </div>
        <div className="mt-8 mb-4 text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
          British Columbia
        </div>
        <div className="p-4 flex justify-center">
          {bcTeam.map((member) => (
            <SpotlightCard
              key={member.name}
              className="flex flex-col mx-2 w-64 lg:w-72 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0 h-full select-none"
            >
              <div className="text-center text-2xl font-semibold mb-4">
                {member.name}
              </div>
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg w-40 lg:w-48"
              />
              <div className="text-center text-md lg:text-lg font-medium mt-2">
                {member.title}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
