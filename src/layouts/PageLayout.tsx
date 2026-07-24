import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LightRays from "@/components/LightRays";

type PageLayoutProps = {
  children: ReactNode;
  contentClassName?: string;
};

export default function PageLayout({
  children,
  contentClassName = "",
}: PageLayoutProps) {
  return (
    <div>
      <div className="z-50">
        <Navigation />
      </div>
      <div className={`relative z-10 ${contentClassName}`}>
        {children}
        <Footer />
      </div>
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
    </div>
  );
}
