import TextType from "@/components/TextType";
import Magnetic from "@/components/Magnetic";
import { motion, useReducedMotion } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import {
  enrollment,
  getCountdownParts,
  type CountdownParts,
} from "@/data/enrollment";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
    document.getElementById("proof")?.scrollIntoView({ behavior: "smooth" });
  };

  const pad = (n: number) => String(n).padStart(2, "0");
  const fade = (delay: number) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { ease: "easeOut" as const, duration: 0.6, delay },
        };

  return (
    <>
      <div className="relative mb-8 flex h-full flex-col items-center justify-center pt-28 pb-16 text-center sm:pt-32">
        <motion.div {...fade(0)} className="mb-5">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1" asChild>
            <a
              href="https://forms.gle/NuWATf1Ci1S7ykKz7"
              target="_blank"
              rel="noopener noreferrer"
            >
              🏆 Also happening: Algorithm Alchemists Coding Competition — August
              2026 ⚡
            </a>
          </Badge>
        </motion.div>

        <div className="mb-6 text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] font-extrabold tracking-tight">
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
            className="text-foreground"
          />
        </div>

        <motion.div {...fade(0.2)}>
          <div className="mb-5 text-[clamp(1.25rem,3vw,2.25rem)] font-bold tracking-tight">
            at Algorithm Alchemists
          </div>
        </motion.div>

        <motion.div {...fade(0.4)} className="w-full max-w-3xl">
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Specialized Canadian Computing Competition prep from near-peer
            mentors with CCC Honour Roll, Distinction, and top university
            acceptances.
          </p>

          <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2">
            <p className="text-sm text-muted-foreground sm:text-[0.95rem]">
              <span className="font-semibold text-foreground">100,000+</span>{" "}
              people reached
            </p>
            <Separator
              orientation="vertical"
              className="hidden h-3 sm:block"
            />
            <p className="text-sm text-muted-foreground sm:text-[0.95rem]">
              <span className="font-semibold text-foreground">30+</span> CCC
              distinctions (2025)
            </p>
            <Separator
              orientation="vertical"
              className="hidden h-3 sm:block"
            />
            <a
              href="https://hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.06] hover:text-foreground"
            >
              <img
                src={HACK_CLUB_ICON}
                alt=""
                className="size-5 rounded-sm"
              />
              <span>Hack Club registered</span>
            </a>
          </div>

          <div className="mx-auto mb-8 max-w-lg">
            <p className="text-sm text-muted-foreground">
              Next cohort starts{" "}
              <span className="text-foreground/85">
                {enrollment.cohortStartLabel}
              </span>{" "}
              — closes{" "}
              <span className="text-foreground/85">
                {enrollment.enrollmentClosesLabel}
              </span>
              <span className="text-foreground/35"> · </span>
              Limited to {enrollment.maxStudentsPerClass} per class
            </p>

            {!countdown.expired && (
              <p
                className="mt-3 font-mono text-sm tracking-wide text-muted-foreground tabular-nums sm:text-base"
                aria-live="polite"
                aria-label="Enrollment countdown"
              >
                {countdown.days}d {pad(countdown.hours)}h{" "}
                {pad(countdown.minutes)}m {pad(countdown.seconds)}s
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center">
            <Magnetic>
              <Button asChild size="lg" className="h-11 px-8 text-base font-semibold">
                <a href="#classes">
                  Explore Summer Classes
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
            </Magnetic>
          </div>

          <p className="mt-5 text-sm text-muted-foreground/50">
            Thanks to Jukebox for our{" "}
            <a
              href="https://www.jukeboxprint.com/custom-stickers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 underline-offset-2 transition-colors hover:text-foreground/80 hover:underline"
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
            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              className="text-muted-foreground hover:text-foreground motion-safe:animate-bounce"
              onClick={handleLearnMoreClick}
              aria-label="Scroll to proof"
            >
              <ChevronDown strokeWidth={1.75} />
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
