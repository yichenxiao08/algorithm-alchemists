import { enrollment } from "@/data/enrollment";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is the class size limit?",
    answer: `Classes are capped at ${enrollment.maxStudentsPerClass} students so every learner gets personalized attention from their instructor.`,
  },
  {
    question: "What is the refund or cancellation policy?",
    answer:
      "Email algorithm.alchemists@gmail.com before enrolling and we’ll share the current refund and cancellation policy for your cohort.",
  },
  {
    question: "What software or hardware does my child need?",
    answer:
      "A computer with reliable internet and a modern browser. We’ll confirm any course-specific tools (like Python or VS Code) before the first session and help with setup if needed.",
  },
  {
    question: "How are teachers screened?",
    answer:
      "Instructors are vetted student educators with competitive programming and teaching experience — near-peer mentors with CCC and related credentials.",
  },
  {
    question: "What if my child misses a class?",
    answer:
      "Ask when you enroll — we arrange makeups through recordings, office hours, or catch-up sessions depending on the course.",
  },
  {
    question: "Is parental supervision required?",
    answer:
      "Younger students often benefit from a parent nearby for the first few sessions. We’ll confirm age-appropriate expectations when you register.",
  },
];
