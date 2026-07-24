import { motion, useReducedMotion } from "motion/react";
import SpotlightCard from "@/components/SpotlightCard";

export default function StudentSuccess() {
  const reduceMotion = useReducedMotion();
  const fade = (delay = 0) =>
    reduceMotion
      ? { initial: false as const, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: "easeOut" as const, delay },
        };

  return (
    <section className="relative overflow-hidden px-8 py-16 lg:px-16 lg:py-24 xl:px-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.14),transparent_65%)]"
      />

      <motion.div
        className="relative mx-auto mb-10 max-w-5xl text-center"
        {...fade()}
        viewport={{ once: true, margin: "-80px" }}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-white/40">
          Student Success
        </p>
        <h2 className="mb-4 text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold tracking-tight">
          Results that speak for themselves
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Parents enroll for outcomes — CCC Distinction, Honor Roll, and a real
          academic edge. Here&apos;s what that looks like.
        </p>
      </motion.div>

      <div className="relative mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div {...fade(0.08)} viewport={{ once: true }}>
          <SpotlightCard className="h-full border-white/15 bg-white/[0.03] shadow-lg shadow-black/20 backdrop-blur-md">
            <div className="flex h-full flex-col justify-center p-2 text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/90">
                Featured student
              </p>
              <blockquote className="mb-6 text-[clamp(1.15rem,2.5vw,1.75rem)] font-semibold leading-snug tracking-tight">
                &ldquo;I took the competitive programming class and got
                distinction for the{" "}
                <span className="text-blue-400">2024 junior</span> and{" "}
                <span className="text-amber-400">2025 senior CCC</span>.&rdquo;
              </blockquote>
              <div className="text-lg font-bold">Jonathan Chen</div>
              <div className="text-sm text-white/45 sm:text-base">
                Student · CCC Distinction (Jr &amp; Sr)
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          {...fade(0.16)}
          viewport={{ once: true }}
        >
          <div className="flex flex-1 flex-col justify-center rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md lg:p-8">
            <div className="mb-2 text-5xl font-extrabold tracking-tight text-white lg:text-6xl">
              30+
            </div>
            <p className="text-sm leading-relaxed text-white/60 sm:text-base">
              students earned certificates of CCC distinction in 2025 — top 25%
              nationally in Junior or Senior.
            </p>
          </div>

          <a
            href="/sign-up"
            className="group block rounded-xl border border-blue-500/35 bg-blue-600/20 px-6 py-5 backdrop-blur-md transition-colors duration-200 hover:bg-blue-600/35"
          >
            <div className="text-lg font-bold transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none lg:text-xl">
              Find Your Child&apos;s Level →
            </div>
            <p className="mt-1 text-sm text-white/55">
              Three quick questions. We recommend the right class.
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
