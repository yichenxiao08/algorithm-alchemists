import Reveal from "@/components/Reveal";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";

export default function Classes() {
  return (
    <div className="px-8 py-12 lg:px-16 lg:py-24 xl:px-24">
      <Reveal className="mb-12 text-center lg:mb-16">
        <Badge variant="secondary" className="mb-4">
          Curriculum
        </Badge>
        <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
          Classes
        </h2>
        <p className="mx-auto max-w-3xl text-base text-muted-foreground lg:text-lg">
          Classes run live on Google Meet. We use the same Google Classroom tools
          your child already uses for school — zero technical setup and zero
          learning curve for parents.
        </p>
      </Reveal>

      <div className="flex flex-col gap-8 lg:hidden">
        {courses.map((course) => (
          <Reveal key={course.title}>
            <CourseCard course={course} variant="mobile" />
          </Reveal>
        ))}
      </div>

      <div className="mt-16 hidden flex-col gap-16 lg:flex">
        {courses.map((course) => (
          <Reveal key={course.title}>
            <CourseCard course={course} variant="desktop" />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
