import { motion, easeOut, useReducedMotion } from "motion/react";
import SpotlightCard from "@/components/SpotlightCard";
import fivestars from "@/assets/5_stars.png";
import { reviews, reviewInitials } from "@/data/reviews";

export default function Reviews() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.14,
      },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: easeOut },
    },
  };

  return (
    <div className="px-8 py-8 lg:px-16 lg:py-12 xl:px-24">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <h2 className="mb-3 text-center text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight">
          What Students & Parents Say
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-white/55 sm:text-lg">
          Voices from families who&apos;ve learned with us.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-8%" }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.name}
            variants={itemVariants}
            className="h-full [@media(hover:hover)_and_(pointer:fine)]:transition-transform [@media(hover:hover)_and_(pointer:fine)]:duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1"
          >
            <SpotlightCard className="h-full justify-start border-white/20 bg-white/[0.03] shadow-none backdrop-blur-[2px]">
              <div className="mb-5 flex justify-center">
                {review.image ? (
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-[4.5rem] w-[4.5rem] rounded-full object-cover ring-2 ring-white/20 ring-offset-2 ring-offset-[#0f0f23]"
                  />
                ) : (
                  <div
                    className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-gradient-to-br from-blue-500/50 to-blue-900/40 text-lg font-semibold tracking-wide ring-2 ring-white/15 ring-offset-2 ring-offset-[#0f0f23]"
                    aria-hidden
                  >
                    {reviewInitials(review.name)}
                  </div>
                )}
              </div>
              <div className="mb-1 text-center text-lg font-bold tracking-tight lg:text-xl">
                {review.name}
              </div>
              <div className="mb-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                {review.role}
              </div>
              <div className="mb-4 flex justify-center">
                <img src={fivestars} alt="" className="h-5 opacity-90" />
              </div>
              <blockquote className="text-center text-[0.95rem] font-light leading-relaxed text-white/75 lg:text-base">
                “{review.review}”
              </blockquote>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
