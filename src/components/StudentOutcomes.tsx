import { motion, useReducedMotion } from "motion/react";

const outcomes = [
  {
    name: "Jonathan Chen",
    accent: "from-blue-400/80 to-blue-600/20",
    bar: "bg-blue-500",
    result: "CCC distinction · Junior 2024 & Senior 2025",
    detail:
      "After our competitive programming class, Jonathan earned distinction in both the Junior and Senior divisions of the Canadian Computing Competition.",
  },
  {
    name: "2025 CCC cohort",
    accent: "from-amber-300/70 to-amber-700/20",
    bar: "bg-amber-500",
    result: "30+ distinction certificates",
    detail:
      "We guided over 30 students to certificates of distinction — top 25% of participants across junior and senior divisions.",
  },
];

export default function StudentOutcomes() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-8 py-16 lg:px-16 lg:py-24 xl:px-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[50%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_65%)]"
        aria-hidden
      />

      <motion.div
        className="relative z-10"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-white/40">
          Results
        </p>
        <h2 className="mb-3 text-center text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight">
          Student Outcomes
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-base text-white/55 sm:text-lg">
          Competition results from students in our programs.
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
        {outcomes.map((item, i) => (
          <motion.article
            key={item.name}
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.55,
              delay: reduceMotion ? 0 : 0.1 + i * 0.12,
            }}
            viewport={{ once: true, margin: "-8%" }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
          >
            <div
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${item.accent}`}
              aria-hidden
            />
            <div className={`mb-5 h-1 w-10 rounded-full ${item.bar}`} />
            <h3 className="mb-2 text-xl font-bold tracking-tight sm:text-2xl">
              {item.name}
            </h3>
            <p className="mb-3 font-mono text-sm tracking-wide text-blue-300/90">
              {item.result}
            </p>
            <p className="text-[0.95rem] leading-relaxed text-white/65 sm:text-base">
              {item.detail}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
