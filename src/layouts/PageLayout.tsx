import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LightRays from "@/components/LightRays";
import SmoothScroll from "@/components/SmoothScroll";

type PageLayoutProps = {
  children: ReactNode;
  contentClassName?: string;
};

export default function PageLayout({
  children,
  contentClassName = "",
}: PageLayoutProps) {
  const reduceMotion = useReducedMotion();

  return (
    <SmoothScroll>
      <div className="dark relative min-h-screen">
        <div className="z-50">
          <Navigation />
        </div>
        <motion.div
          className={`relative z-10 ${contentClassName}`}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {children}
          <Footer />
        </motion.div>
        <div className="fixed inset-0 z-0">
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#9466ff"
            raysSpeed={0.5}
            lightSpread={2}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            saturation={0.5}
            distortion={0.01}
          />
        </div>
        <div className="noise-overlay" aria-hidden />
      </div>
    </SmoothScroll>
  );
}
