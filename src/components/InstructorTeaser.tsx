import { motion, useReducedMotion } from "motion/react";
import { ontarioTeam } from "@/data/team";

const FEATURED_NAMES = [
  "Ethan Guan",
  "Eric Wang",
  "Brandon Lam",
  "Kyle Zhou",
] as const;

const featured = FEATURED_NAMES.map((name) =>
  ontarioTeam.find((m) => m.name === name),
).filter((m): m is NonNullable<typeof m> => Boolean(m));

export default function InstructorTeaser() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-8 py-16 lg:px-16 lg:py-24 xl:px-24">
      <motion.div
        className="mx-auto mb-12 max-w-3xl text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-white/40">
          Near-peer mentors
        </p>
        <h2 className="mb-4 text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold tracking-tight">
          Learn from students who&apos;ve done it
        </h2>
        <p className="text-base leading-relaxed text-white/60 sm:text-lg">
          Our teachers are high schoolers with CCC Honour Roll, Distinction, and
          USACO credentials — role models your child can actually relate to.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.12,
            },
          },
        }}
      >
        {featured.map((member) => (
          <motion.div
            key={member.name}
            variants={{
              hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.07]"
          >
            <div className="mb-4 aspect-square overflow-hidden rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
              />
            </div>
            <h3 className="text-lg font-bold tracking-tight">{member.name}</h3>
            <p className="mb-2 text-sm text-white/45">{member.title}</p>
            {member.description && (
              <p className="text-sm leading-snug text-blue-200/85">
                {member.description}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 text-center"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 0.25, duration: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="/our-team"
          className="inline-flex text-lg font-semibold text-blue-400 transition-colors hover:text-blue-300"
        >
          Meet the full team →
        </a>
      </motion.div>
    </section>
  );
}
