import TextType from "@/components/TextType";
import { motion, useReducedMotion } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  enrollment,
  getCountdownParts,
  type CountdownParts,
} from "@/data/enrollment";

const HACK_CLUB_ICON = "https://assets.hackclub.com/icon-rounded.svg";

// Stable refs — Header re-renders every second for the countdown; inline
// arrays would reset TextType's typing effect on each tick.
const HERO_TYPED_PHRASES = [
  "coding skills",
  "creativity",
  "potential",
  "future",
];
const HERO_TYPED_COLORS = ["#3B82F6", "#E66A9B", "#F59E0B", "#8B5CF6"];

export default function Header() {
  const reduceMotion = useReducedMotion();
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [countdown, setCountdown] = useState<CountdownParts>(() =>
    getCountdownParts(),
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isAtTop && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAtTop, hasAnimated]);

  useEffect(() => {
    const tick = () => setCountdown(getCountdownParts());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleLearnMoreClick = () => {
    const successSection = document.getElementById("success");
    if (successSection) {
      successSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pad = (n: number) => String(n).padStart(2, "0");
  const fade = (delay: number) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { ease: "easeOut" as const, duration: 0.55, delay },
        };

  return (
    <>
      <div className="relative mb-8 flex h-full flex-col items-center justify-center pt-28 pb-16 text-center sm:pt-32">
        <div className="mb-6 text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight">
          <TextType
            constText="Unlock your "
            text={HERO_TYPED_PHRASES}
            typingSpeed={75}
            pauseDuration={2000}
            deletingSpeed={50}
            showCursor={true}
            cursorCharacter="|"
            loop={true}
            textColors={HERO_TYPED_COLORS}
            className="text-white"
          />
        </div>

        <motion.div {...fade(0.2)}>
          <div className="mb-5 text-[clamp(1.25rem,3vw,2.25rem)] font-bold tracking-tight">
            at Algorithm Alchemists
          </div>
        </motion.div>

        <motion.div {...fade(0.4)} className="w-full max-w-3xl">
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Improve your programming skills by building real projects, tackling
            interesting problems, and connecting with a thriving community.
          </p>

          <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2">
            <p className="text-sm text-white/70 sm:text-[0.95rem]">
              <span className="font-semibold text-white">100,000+</span> people
              reached
            </p>
            <span
              className="hidden h-3 w-px bg-white/20 sm:block"
              aria-hidden
            />
            <p className="text-sm text-white/70 sm:text-[0.95rem]">
              <span className="font-semibold text-white">30+</span> CCC
              distinctions (2025)
            </p>
            <span
              className="hidden h-3 w-px bg-white/20 sm:block"
              aria-hidden
            />
            <a
              href="https://hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-white/75 backdrop-blur-sm transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              <img
                src={HACK_CLUB_ICON}
                alt=""
                className="h-5 w-5 rounded-sm"
              />
              <span>Hack Club registered</span>
            </a>
          </div>

          <div className="mb-8 mx-auto max-w-lg">
            <p className="text-sm text-white/55">
              Next cohort starts{" "}
              <span className="text-white/85">
                {enrollment.cohortStartLabel}
              </span>{" "}
              — closes{" "}
              <span className="text-white/85">
                {enrollment.enrollmentClosesLabel}
              </span>
              <span className="text-white/35"> · </span>
              Limited to {enrollment.maxStudentsPerClass} per class
            </p>

            {!countdown.expired && (
              <p
                className="mt-3 font-mono text-sm tabular-nums tracking-wide text-white/70 sm:text-base"
                aria-live="polite"
                aria-label="Enrollment countdown"
              >
                {countdown.days}d {pad(countdown.hours)}h{" "}
                {pad(countdown.minutes)}m {pad(countdown.seconds)}s
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="/sign-up"
              className="inline-flex rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-[0_0_0_1px_rgba(59,130,246,0.35)] transition-[background-color,transform] duration-200 ease-out hover:bg-blue-500 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 motion-reduce:transform-none"
            >
              Find Your Child&apos;s Level
            </a>
            <a
              href="https://forms.gle/smo5FH8unWtaScy57"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-blue-500/80 bg-transparent px-8 py-3 font-semibold text-blue-400 transition-[color,background-color,transform] duration-200 ease-out hover:bg-blue-600 hover:text-white [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 motion-reduce:transform-none"
            >
              Volunteer With Us!
            </a>
          </div>

          <p className="mt-3 text-sm text-white/50">
            Not sure which class fits? Answer three questions — we&apos;ll
            recommend the right track.
          </p>

          <p className="mt-5 text-sm text-white/35">
            Thanks to Jukebox for our{" "}
            <a
              href="https://www.jukeboxprint.com/custom-stickers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 underline-offset-2 transition-colors hover:text-white/80 hover:underline"
            >
              custom stickers
            </a>
            .
          </p>
        </motion.div>

        <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center">
          <motion.div
            initial={false}
            animate={{
              opacity: isAtTop && hasAnimated ? 1 : 0,
              y: isAtTop && hasAnimated ? 0 : -8,
            }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
          >
            <button
              type="button"
              className="p-1 text-white/40 transition-colors hover:text-white/70 motion-safe:animate-bounce"
              onClick={handleLearnMoreClick}
              aria-label="Scroll to about"
            >
              <ChevronDown size={28} strokeWidth={1.75} />
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
