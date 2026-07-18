import advanced from "../assets/advanced.jpg";
import webdev from "../assets/webdev.jpg";
import intermediate from "../assets/intermediate.jpg";
import beginner from "../assets/beginner.jpg";
import { motion } from "motion/react";

export default function Classes() {
  const courses = [
    {
      title: "Junior Course",
      link: "https://forms.gle/HrZR4UVcb2nkYYNK8",
      img: beginner,
      color: "#3B82F6",
      level: "Beginner",
      duration: "8 weeks",
      schedule: "Sundays, 12:00 PM to 1:30 PM EST",
      startDate: "July 19, 2026",
      details: {
        description: "Covers the basics of programming in Python.",
        whatYouLearn: [
          "Print & comments & planning",
          "Input & variables ",
          "Data types & type casting & operators",
          "Conditionals & if/else",
          "Flow charts & IPO & while loops",
          "Lists",
          "For loops",
          "Functions & try…except",
          "Dictionaries",
          "Final Assignment",
          "Intro to comp programming (DMOJ, etc)",
        ],
      },
    },
    {
      title: "Intermediate Course",
      link: "https://forms.gle/DLQGuKsehh7PRQya8",
      img: intermediate,
      color: "#E66A9B",
      level: "Intermediate",
      duration: "Runs until September 2026",
      schedule: "Thursdays, 7:00 PM to 8:30 PM EST",
      startDate: "July 23, 2026",
      details: {
        description:
          "Covers the basics of competitive programming in Python and Java​ in preparation for the CCC Junior Division.",
        whatYouLearn: [
          "Introduction to DMOJ",
          "Fast input",
          "Loops",
          "1D Arrays",
          "2D Arrays",
          "String Manipulation",
          "Maps/Dictionaries",
          "Brute Force",
          "Greedy Algorithms",
          "Ad Hoc",
          "Handling subtasks",
        ],
      },
    },
    {
      title: "Senior Course",
      link: "https://forms.gle/DLQGuKsehh7PRQya8",
      img: advanced,
      color: "#F59E0B",
      level: "Advanced",
      duration: "Runs until September 2026",
      schedule: "Sundays, 12:00 PM to 1:30 PM EST",
      startDate: "July 19, 2026",
      details: {
        description:
          "Covers more advanced competitive programming concepts in Python, Java, C++ in preparation for the CCC Senior Division.",
        whatYouLearn: [
          "Binary search",
          "Backtracking",
          "BFS (breadth-first search)",
          "DFS (depth-first search)",
          "Prefix Sum Array and Difference Sum Array",
          "Dijkstra's",
          "Minimum Spanning Tree (Prim's and Kruskal's)",
          "Disjoint Set Union",
          "Dynamic Programming",
        ],
      },
    },
    {
      title: "Web Development Course",
      link: "https://forms.gle/DLQGuKsehh7PRQya8",
      img: webdev,
      color: "#8B5CF6",
      level: "All",
      duration: "Runs until September 2026",
      schedule: "Every Monday, 7:00 PM to 8:30 PM EST",
      startDate: "July 20, 2026",
      details: {
        description:
          "Covers all you need to create polished, functional websites, which are perfect for hackathons and personal projects!",
        whatYouLearn: [
          "HTML",
          "CSS",
          "Git/GitHub",
          "APIs",
          "React",
          "Node.js",
          "Frontend Development",
          "Backend Development",
        ],
      },
    },
  ];

  // useEffect(() => {
  //   let lastScrollTime = 0;

  //   const handleWheel = (e: any) => {
  //     const container = document.getElementById('classes-container');
  //     if (!container) return;

  //     const rect = container.getBoundingClientRect();
  //     const isInClassesSection = rect.top <= 0 && rect.bottom >= window.innerHeight;

  //     if (isInClassesSection) {
  //       e.preventDefault();

  //       const now = Date.now();
  //       if (now - lastScrollTime < 50) return; // Throttle scroll events
  //       lastScrollTime = now;

  //       // Dampen the scroll by reducing the scroll amount
  //       const dampedScroll = e.deltaY * 0.9; // Reduce scroll speed by 70%
  //       window.scrollBy(0, dampedScroll);
  //     }
  //   };

  //   const handleScroll = () => {
  //     const container = document.getElementById('classes-container');
  //     if (!container) return;

  //     const rect = container.getBoundingClientRect();
  //     const containerHeight = rect.height;
  //     const windowHeight = window.innerHeight;

  //     // Calculate which section should be visible based on scroll position
  //     const scrollProgress = Math.max(0, -rect.top) / (containerHeight - windowHeight);
  //     const sectionIndex = Math.min(
  //       Math.floor(scrollProgress * courses.length),
  //       courses.length - 1
  //     );

  //     setCurrentIndex(Math.max(0, sectionIndex));
  //   };

  //   window.addEventListener('wheel', handleWheel, { passive: false });
  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Initial calculation

  //   return () => {
  //     window.removeEventListener('wheel', handleWheel);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [courses.length]);

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
          All our classes take place online through Google Meet. Assignments and
          course materials will be distributed using Google Classroom.
        </div>
      </motion.div>
      <div className="lg:hidden space-y-8">
        {courses.map((course, index) => (
          <div key={index} className="space-y-6">
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
                  <span className="font-semibold">Duration:</span>{" "}
                  {course.duration}
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
                <div>
                  <h4 className="text-xl font-bold mb-3">Course Description</h4>
                  <p className="text-base">{course.details.description}</p>
                </div>

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
        ))}
      </div>
      <div className="hidden lg:block space-y-16 mt-16">
        {courses.map((course, courseIndex) => {
          return (
            <motion.div
              key={courseIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
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
                      <h2 className="text-4xl font-bold mb-4">
                        {course.title}
                      </h2>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center">
                          <div>
                            <b className="font-semibold">Level</b>:{" "}
                            {course.level}
                          </div>
                        </div>

                        <div className="flex items-center">
                          <span>
                            <b className="font-semibold">Duration</b>:{" "}
                            {course.duration}
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

                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                          Enroll Now
                        </button>
                      </a>
                    </div>
                  </div>

                  <div>
                    <section>
                      <h4 className="text-2xl font-bold mb-4">
                        Course Description
                      </h4>
                      <p className="text-lg mb-8">
                        {course.details.description}
                      </p>
                    </section>

                    <section>
                      <div className="grid grid-cols-[auto_1fr] gap-24 h-fit">
                        <div>
                          <h4 className="text-2xl font-bold mb-4">
                            What You'll Learn
                          </h4>
                          <motion.ul 
                            className="space-y-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                              visible: {
                                transition: {
                                  staggerChildren: 0.075
                                }
                              }
                            }}
                          >
                            {course.details.whatYouLearn.map((item, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start"
                                variants={{
                                  hidden: { opacity: 0, x: -20 },
                                  visible: { opacity: 1, x: 0 }
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <span className="text-green-500 mr-3 mt-1">
                                  ✓
                                </span>
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
