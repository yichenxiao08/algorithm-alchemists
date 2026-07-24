import Magnetic from "@/components/Magnetic";
import Reveal from "@/components/Reveal";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Register() {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 text-foreground lg:pt-24 lg:pb-16">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-background"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-8 lg:px-12">
        <Reveal className="mb-10 text-center">
          <Badge variant="secondary" className="mb-4">
            Enroll
          </Badge>
          <h2 className="mb-4 text-[clamp(1.75rem,4.5vw,3rem)] font-bold tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Choose a course to open the Google Form — name, email, and grade —
            and we&apos;ll follow up with next steps.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="border-white/12 bg-card/50 text-center ring-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="sr-only">Course enrollment links</CardTitle>
              <CardDescription className="sr-only">
                Pick a class to enroll
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2.5">
              <ul className="mx-auto grid w-full max-w-sm gap-2.5 text-left">
                {courses.map((course) => (
                  <li key={course.title}>
                    <Magnetic strength={0.2} className="w-full">
                      <Button
                        asChild
                        variant="outline"
                        className="h-auto w-full justify-between px-4 py-3 text-left whitespace-normal"
                      >
                        <a
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="font-medium">{course.title}</span>
                          <ArrowRight data-icon="inline-end" />
                        </a>
                      </Button>
                    </Magnetic>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Not sure which class?{" "}
                <Button variant="link" asChild className="h-auto px-0">
                  <a href="/sign-up">Find your child&apos;s level</a>
                </Button>
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
