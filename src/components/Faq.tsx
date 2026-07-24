import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqItems } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(".faq-heading, .faq-panel", { opacity: 1, y: 0 });
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

      gsap.from(".faq-panel", {
        opacity: 0,
        y: 22,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-panel",
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
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Parents ask
        </p>
        <h2 className="mb-3 text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight">
          FAQ
        </h2>
        <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
          Safety, scheduling, and what you need to get started.
        </p>
      </div>

      <div className="faq-panel mx-auto max-w-2xl rounded-xl border border-white/10 bg-card/40 p-2 backdrop-blur-md sm:p-3">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="border-white/10 px-2"
            >
              <AccordionTrigger className="py-4 text-left text-base font-semibold tracking-tight hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
