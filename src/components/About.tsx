import about from "@/assets/about.png";
import mission from "@/assets/mission.png";
import approach from "@/assets/our_approach.jpg";
import { motion } from "motion/react";
export default function About() {
  return (
    <div className="grid gap-8 px-8 lg:px-16 xl:px-24 lg:pt-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-4">
          <img
            src={about}
            alt="About Us"
            className="rounded-xl border-gray-500 border h-64 lg:h-96 w-full max-w-md lg:max-w-none object-cover order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <div className="text-2xl font-semibold mb-4 text-center lg:text-left">About Us</div>
            <div className="text-center lg:text-left">
              Algorithm Alchemists is a student-run non-profit (registered under
              Hack Club) offering high-tier competitive programming prep —
              normally reserved for expensive corporate academies — at an
              accessible level for elementary and high school families. Our
              teachers are accomplished high schoolers with CCC and USACO
              credentials: near-peer role models who assign the right amount of
              homework so students master Python, then advance to harder
              languages and contest concepts.
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-4">
          <div className="order-1 lg:order-1">
            <div className="text-2xl font-semibold mb-4 text-center lg:text-left">Our Mission</div>
            <div className="text-center lg:text-left">
              At Algorithm Alchemists, our mission is to inspire and empower the
              next generation of coders. We believe that coding is an essential
              skill that can unlock limitless opportunities for students.
            </div>
          </div>
          <img
            src={mission}
            alt="Our Mission"
            className="rounded-xl border border-gray-500 h-64 lg:h-96 w-full max-w-md lg:max-w-none object-cover order-2 lg:order-2"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <img
            src={approach}
            alt="Our Approach"
            className="rounded-xl border border-gray-500 h-64 lg:h-96 w-full max-w-md lg:max-w-none object-cover order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <div className="text-2xl font-semibold mb-4 text-center lg:text-left">Our Approach</div>
            <div className="text-center lg:text-left">
              We take a hands-on approach to learning, with interactive lessons
              and coding challenges that keep students engaged and motivated.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
