import advanced from "@/assets/advanced.jpg";
import webdev from "@/assets/webdev.jpg";
import intermediate from "@/assets/intermediate.jpg";
import beginner from "@/assets/beginner.jpg";

export type Course = {
  title: string;
  link: string;
  img: string;
  color: string;
  level: string;
  duration: string;
  schedule: string;
  startDate: string;
  details: {
    parentBenefit: string;
    whoIsThisFor: string;
    description: string;
    whatYouLearn: string[];
  };
};

export const courses: Course[] = [
  {
    title: "Junior Course",
    link: "https://forms.gle/HrZR4UVcb2nkYYNK8",
    img: beginner,
    color: "#3B82F6",
    level: "Beginner",
    duration: "8 weeks",
    schedule: "Sundays, 12:00 PM to 1:30 PM EST",
    startDate: "July 26, 2026",
    details: {
      parentBenefit:
        "Gives your child a confident start in coding — the foundation many students use on the path to CCC Junior Honor Roll and stronger STEM applications.",
      whoIsThisFor:
        "Perfect for elementary and early middle schoolers with little or no coding experience who want to learn Python in a supportive online class.",
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
    startDate: "July 30, 2026",
    details: {
      parentBenefit:
        "Designed to help your child achieve Honor Roll or Distinction in the CCC Junior Division — a prestigious credential for future university applications. We teach this using Python and Java.",
      whoIsThisFor:
        "Perfect for 8th–10th graders who know basic Python and want to start competing nationally in the CCC Junior Division.",
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
    startDate: "July 26, 2026",
    details: {
      parentBenefit:
        "Prepares ambitious students for CCC Senior Distinction — the kind of competitive edge that stands out on applications to programs like Waterloo and UofT Computer Science. Taught in Python, Java, and C++.",
      whoIsThisFor:
        "Ideal for strong high school programmers who have Intermediate-level skills or prior CCC Junior experience and want to compete at the Senior level.",
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
    startDate: "July 27, 2026",
    details: {
      parentBenefit:
        "Helps your child build real, portfolio-ready websites for hackathons and personal projects — tangible proof of skill that goes beyond grades.",
      whoIsThisFor:
        "Great for any student who wants to create polished sites; no prior web experience required.",
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
