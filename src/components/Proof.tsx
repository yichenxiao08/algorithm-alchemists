import { motion, useReducedMotion } from "motion/react";
import SpotlightCard from "@/components/SpotlightCard";
import Reveal from "@/components/Reveal";
import { ontarioTeam } from "@/data/team";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FEATURED_NAMES = [
  "Eric Wang",
  "Yichen Xiao",
  "Soroush Paidar",
  "Kyle Zhou",
] as const;

const featured = FEATURED_NAMES.map((name) =>
  ontarioTeam.find((m) => m.name === name),
).filter((m): m is NonNullable<typeof m> => Boolean(m));

export default function Proof() {
  const reduceMotion = useReducedMotion();
  const fade = (delay = 0) =>
    reduceMotion
      ? { initial: false as const, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: "easeOut" as const, delay },
        };

  return (
    <section className="relative overflow-hidden px-8 py-16 lg:px-16 lg:py-24 xl:px-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.14),transparent_65%)]"
      />

      <motion.div
        className="relative mx-auto mb-10 max-w-3xl text-center"
        {...fade()}
        viewport={{ once: true, margin: "-80px" }}
      >
        <Badge variant="secondary" className="mb-4">
          The Proof
        </Badge>
        <h2 className="mb-4 text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold tracking-tight">
          A legacy of high achievers
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Alumni instructors at Yale and Waterloo. Students earning CCC
          Distinction. Outcomes parents enroll for.
        </p>
      </motion.div>

      <div className="relative mx-auto mb-14 grid max-w-5xl gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div {...fade(0.08)} viewport={{ once: true }}>
          <SpotlightCard className="h-full border-white/15 bg-card/40 shadow-lg shadow-black/20 backdrop-blur-md">
            <div className="flex h-full flex-col justify-center p-2 text-left">
              <Badge className="mb-3 w-fit" variant="outline">
                Featured student
              </Badge>
              <blockquote className="mb-6 text-[clamp(1.15rem,2.5vw,1.75rem)] leading-snug font-semibold tracking-tight">
                &ldquo;I took the competitive programming class and got
                distinction for the{" "}
                <span className="text-primary">2024 junior</span> and{" "}
                <span className="text-amber-400">2025 senior CCC</span>.&rdquo;
              </blockquote>
              <div className="text-lg font-bold">Jonathan Chen</div>
              <div className="text-sm text-muted-foreground sm:text-base">
                Student · CCC Distinction (Jr &amp; Sr)
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div {...fade(0.16)} viewport={{ once: true }}>
          <Card className="flex h-full flex-col justify-center border-white/10 bg-card/50 ring-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-5xl font-extrabold tracking-tight lg:text-6xl">
                30+
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed sm:text-base">
                students earned certificates of CCC distinction in 2025 — top
                25% nationally in Junior or Senior.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>

      <Reveal className="relative mx-auto mb-6 max-w-6xl">
        <p className="mb-6 text-center text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Our Alumni Instructors
        </p>
      </Reveal>

      <Reveal
        className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.12}
      >
        {featured.map((member) => (
          <Card
            key={member.name}
            className="reveal-item group border-white/10 bg-card/40 ring-white/10 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-card/70"
          >
            <CardContent className="pt-(--card-spacing)">
              <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
                />
              </div>
              <CardTitle className="text-lg font-bold tracking-tight">
                {member.name}
              </CardTitle>
              <CardDescription className="mb-2">{member.title}</CardDescription>
              {member.description && (
                <p className="text-sm leading-snug text-primary/90">
                  {member.description}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </Reveal>

      <motion.div
        className="relative mt-10 text-center"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 0.25, duration: 0.4 }}
        viewport={{ once: true }}
      >
        <Button variant="link" asChild className="text-lg font-semibold">
          <a href="/our-team">Meet the full team →</a>
        </Button>
      </motion.div>
    </section>
  );
}
