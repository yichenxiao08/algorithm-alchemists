import { motion, useReducedMotion } from "motion/react";
import { courses } from "@/data/courses";

export default function Register() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-12 pt-16 text-white lg:pb-16 lg:pt-24">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/25 to-[#0f0f23]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-white/40">
            Enroll
          </p>
          <h2 className="mb-4 text-[clamp(1.75rem,4.5vw,3rem)] font-bold tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
            Choose a course to open the Google Form — name, email, and grade —
            and we&apos;ll follow up with next steps.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeOut",
            duration: 0.55,
            delay: reduceMotion ? 0 : 0.1,
          }}
          viewport={{ once: true }}
        >
          <div className="rounded-xl border border-white/12 bg-white/[0.04] p-7 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:p-9">
            <ul className="mx-auto grid max-w-sm gap-2.5 text-left">
              {courses.map((course) => (
                <li key={course.title}>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white/85 transition-[border-color,background-color,transform] duration-200 hover:border-blue-400/40 hover:bg-blue-500/10 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5"
                  >
                    <span className="font-medium">{course.title}</span>
                    <span className="text-sm text-white/40" aria-hidden>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/45">
              Not sure which class?{" "}
              <a
                href="/sign-up"
                className="text-blue-400 underline-offset-2 transition-colors hover:text-blue-300 hover:underline"
              >
                Find your child&apos;s level
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
