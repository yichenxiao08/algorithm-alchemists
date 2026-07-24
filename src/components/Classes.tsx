import { motion } from "motion/react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function Classes() {
  return (
    <div className="px-8 lg:px-16 xl:px-24 py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-8 text-center">
          Classes
        </div>
        <div className="text-md lg:text-lg text-center max-w-3xl mx-auto mb-12 lg:mb-0">
          Classes run live on Google Meet. We use the same Google Classroom tools
          your child already uses for school — zero technical setup and zero
          learning curve for parents.
        </div>
      </motion.div>
      <div className="lg:hidden space-y-8">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} variant="mobile" />
        ))}
      </div>
      <div className="hidden lg:block space-y-16 mt-16">
        {courses.map((course) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <CourseCard course={course} variant="desktop" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
