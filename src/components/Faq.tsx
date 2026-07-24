import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqItems } from "@/data/faq";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(".faq-heading, .faq-item", { opacity: 1, y: 0 });
        return;
      }

      gsap.from(".faq-heading", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".faq-item", {
        opacity: 0,
        y: 22,
        duration: 0.55,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative overflow-hidden px-8 py-16 lg:px-16 lg:py-24 xl:px-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="faq-heading mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-white/40">
          Parents ask
        </p>
        <h2 className="mb-3 text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight text-white">
          FAQ
        </h2>
        <p className="mx-auto max-w-xl text-base text-white/55 sm:text-lg">
          Safety, scheduling, and what you need to get started.
        </p>
      </div>

      <div className="faq-list mx-auto max-w-2xl space-y-1">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="faq-item group border-b border-white/10 transition-colors open:bg-white/[0.03]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left font-semibold tracking-tight marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
              <span className="pr-2 text-white/90 transition-colors group-open:text-white">
                {item.question}
              </span>
              <span
                className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/50 transition-transform duration-300 ease-out group-open:rotate-45 group-open:border-white/30 group-open:text-white/80 motion-reduce:transition-none"
                aria-hidden
              >
                <span className="absolute h-px w-3 bg-current" />
                <span className="absolute h-3 w-px bg-current" />
              </span>
            </summary>
            <p className="pb-5 pr-10 text-[0.95rem] font-light leading-relaxed text-white/60 sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
