import { motion } from "motion/react";
import type { Course } from "@/data/courses";

type CourseCardProps = {
  course: Course;
  variant: "mobile" | "desktop";
};

function CourseDetails({ course }: { course: Course }) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-xl lg:text-2xl font-bold mb-3">Why parents choose this</h4>
        <p className="text-base lg:text-lg text-gray-200">{course.details.parentBenefit}</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-1">
          Who is this for?
        </h4>
        <p className="text-sm lg:text-base text-gray-300">{course.details.whoIsThisFor}</p>
      </div>

      <div>
        <h4 className="text-xl lg:text-2xl font-bold mb-3">Course Description</h4>
        <p className="text-base lg:text-lg text-gray-300">{course.details.description}</p>
      </div>
    </div>
  );
}

export default function CourseCard({ course, variant }: CourseCardProps) {
  if (variant === "mobile") {
    return (
      <div className="space-y-6">
        <div
          className="p-6 rounded-xl border-2 bg-gray-600/10"
          style={{
            borderColor: course.color,
            boxShadow: `0 10px 20px -5px ${course.color}60, 0 4px 6px -1px ${course.color}80`,
          }}
        >
          <h2 className="text-2xl font-bold mb-4">{course.title}</h2>

          <div className="space-y-3 mb-6">
            <div>
              <span className="font-semibold">Level:</span> {course.level}
            </div>
            <div>
              <span className="font-semibold">Duration:</span> {course.duration}
            </div>
            <div>
              <span className="font-semibold">Schedule:</span>
              <p className="mt-1">{course.schedule}</p>
            </div>
            <div>
              <span className="font-semibold">Start Date:</span>
              <p className="mt-1">{course.startDate}</p>
            </div>
          </div>
          <div>
            <img
              className="w-full rounded-xl shadow-md shadow-gray-500 border mb-8"
              src={course.img}
              alt={course.title}
            />
          </div>
          <div className="space-y-6">
            <CourseDetails course={course} />

            <div>
              <h4 className="text-xl font-bold mb-3">What You'll Learn</h4>
              <ul className="space-y-2">
                {course.details.whatYouLearn.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            Enroll Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-[1fr_2fr] gap-16">
        <div className="h-fit">
          <div
            className="p-8 rounded-xl border-2 bg-gray-600/10"
            style={{
              borderColor: course.color,
              boxShadow: `0 20px 40px -10px ${course.color}80, 0 10px 20px -5px ${course.color}60, 0 4px 6px -1px ${course.color}90`,
            }}
          >
            <h2 className="text-4xl font-bold mb-4">{course.title}</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div>
                  <b className="font-semibold">Level</b>: {course.level}
                </div>
              </div>

              <div className="flex items-center">
                <span>
                  <b className="font-semibold">Duration</b>: {course.duration}
                </span>
              </div>

              <div>
                <span className="font-semibold">Schedule:</span>
                <p className="mt-1">{course.schedule}</p>
              </div>

              <div>
                <span className="font-semibold">Start Date:</span>
                <p className="mt-1">{course.startDate}</p>
              </div>
            </div>

            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </a>
          </div>
        </div>

        <div>
          <section className="mb-8">
            <CourseDetails course={course} />
          </section>

          <section>
            <div className="grid grid-cols-[auto_1fr] gap-24 h-fit">
              <div>
                <h4 className="text-2xl font-bold mb-4">What You'll Learn</h4>
                <motion.ul
                  className="space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.075,
                      },
                    },
                  }}
                >
                  {course.details.whatYouLearn.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <img
                className="rounded-xl shadow-md shadow-gray-500 border self-center"
                src={course.img}
                alt={course.title}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
