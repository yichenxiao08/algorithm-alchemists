import { useRef, type ReactNode, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/** Pulls toward cursor on fine pointers. No-op on touch / reduced motion. */
export default function Magnetic({
  children,
  className,
  strength = 0.35,
}: MagneticProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = root.current;
      if (!el) return;

      const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (!fine.matches || reduce.matches) return;

      const onMove = contextSafe((e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, {
          x: x * strength,
          y: y * strength,
          duration: 0.35,
          ease: "power3.out",
        });
      });

      const onLeave = contextSafe(() => {
        gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.4)" });
      });

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: root },
  );

  const style: CSSProperties = { willChange: "transform", display: "inline-flex" };

  return (
    <div ref={root} className={className} style={style}>
      {children}
    </div>
  );
}
