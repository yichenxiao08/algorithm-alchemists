import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger child `.reveal-item` nodes */
  stagger?: number;
  y?: number;
  delay?: number;
};

/** GSAP ScrollTrigger fade/slide-up. Scope-safe via useGSAP. */
export default function Reveal({
  children,
  className,
  stagger = 0,
  y = 28,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const items = gsap.utils.toArray<HTMLElement>(".reveal-item");
      const targets = items.length > 0 ? items : [ref.current];

      if (reduceMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.7,
        delay,
        stagger: stagger || undefined,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
