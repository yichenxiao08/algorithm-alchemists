import { GraduationCap, Target, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const POINTS = [
  {
    title: "Proven Outcomes",
    body: "Mentorship from students accepted into top CS and Engineering programs.",
    Icon: GraduationCap,
  },
  {
    title: "Targeted Prep",
    body: "Specialized curriculum designed specifically for the Canadian Computing Competition (CCC).",
    Icon: Target,
  },
  {
    title: "Community Focus",
    body: "Small online classes with personalized homework feedback.",
    Icon: Users,
  },
] as const;

export default function WhyUs() {
  return (
    <section className="px-8 py-16 lg:px-16 lg:py-24 xl:px-24">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center">
        <Badge variant="secondary" className="mb-4">
          Why Us
        </Badge>
        <h2 className="mb-4 text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold tracking-tight">
          Why our approach works
        </h2>
      </Reveal>

      <Reveal
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
        stagger={0.12}
      >
        {POINTS.map(({ title, body, Icon }) => (
          <Card
            key={title}
            className="reveal-item border-white/10 bg-card/40 text-center ring-white/10 backdrop-blur-sm transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1"
          >
            <CardHeader className="items-center">
              <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Icon strokeWidth={1.75} aria-hidden />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {body}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </Reveal>
    </section>
  );
}
