import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PageLayout from "@/layouts/PageLayout";
import { courses, type Course } from "@/data/courses";

type Grade = "4-7" | "8-10" | "11-12";
type Experience = "none" | "basic" | "competitive";
type Goal = "learn" | "ccc-junior" | "ccc-senior" | "websites";

type Answers = {
  grade: Grade | null;
  experience: Experience | null;
  goal: Goal | null;
};

function recommendCourse(answers: Answers): Course {
  const { grade, experience, goal } = answers;

  if (goal === "websites") {
    return courses.find((c) => c.title === "Web Development Course")!;
  }
  if (goal === "ccc-senior" || experience === "competitive") {
    return courses.find((c) => c.title === "Senior Course")!;
  }
  if (
    goal === "ccc-junior" ||
    (experience === "basic" && grade === "8-10")
  ) {
    return courses.find((c) => c.title === "Intermediate Course")!;
  }
  return courses.find((c) => c.title === "Junior Course")!;
}

const gradeOptions: { value: Grade; label: string }[] = [
  { value: "4-7", label: "Grade 4–7" },
  { value: "8-10", label: "Grade 8–10" },
  { value: "11-12", label: "Grade 11–12" },
];

const experienceOptions: { value: Experience; label: string }[] = [
  { value: "none", label: "Little or no coding" },
  { value: "basic", label: "Basic Python" },
  { value: "competitive", label: "Competitive programming experience" },
];

const goalOptions: { value: Goal; label: string }[] = [
  { value: "learn", label: "Learn to code" },
  { value: "ccc-junior", label: "Prepare for CCC Junior" },
  { value: "ccc-senior", label: "Prepare for CCC Senior" },
  { value: "websites", label: "Build websites" },
];

function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
        selected
          ? "border-blue-500 bg-blue-600/25 shadow-[0_0_0_1px_rgba(59,130,246,0.4)]"
          : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    grade: null,
    experience: null,
    goal: null,
  });
  const [result, setResult] = useState<Course | null>(null);

  const steps = [
    {
      title: "What grade is your child in?",
      key: "grade" as const,
      options: gradeOptions,
    },
    {
      title: "What's their coding experience?",
      key: "experience" as const,
      options: experienceOptions,
    },
    {
      title: "What's the main goal?",
      key: "goal" as const,
      options: goalOptions,
    },
  ];

  const current = steps[step];
  const currentValue = answers[current.key];
  const canContinue = currentValue !== null;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
      return;
    }
    setResult(recommendCourse(answers));
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({ grade: null, experience: null, goal: null });
    setResult(null);
  };

  return (
    <PageLayout contentClassName="flex flex-col pt-24">
      <div className="flex justify-center px-4 pb-20">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-blue-300 font-semibold mb-3">
                  Find your child&apos;s level
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                  {current.title}
                </h1>
                <p className="text-gray-400 mb-8">
                  Step {step + 1} of {steps.length} ·{" "}
                  <a href="/" className="text-blue-400 hover:text-blue-300">
                    Back to home
                  </a>
                </p>

                <div className="h-1.5 rounded-full bg-white/10 mb-8 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300 ease-out"
                    style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                  />
                </div>

                <div className="space-y-3 mb-8">
                  {current.options.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      selected={currentValue === opt.value}
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [current.key]: opt.value,
                        }))
                      }
                    >
                      <span className="font-medium text-base lg:text-lg">
                        {opt.label}
                      </span>
                    </OptionButton>
                  ))}
                </div>

                <div className="flex gap-3">
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 font-semibold transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    disabled={!canContinue}
                    onClick={handleNext}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {step === steps.length - 1 ? "See recommendation" : "Continue"}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 lg:p-8"
                style={{
                  boxShadow: `0 20px 40px -12px ${result.color}55`,
                  borderColor: `${result.color}66`,
                }}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-blue-300 font-semibold mb-2">
                  Recommended for your child
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  {result.title}
                </h1>
                <p className="text-lg text-gray-200 mb-4">
                  {result.details.parentBenefit}
                </p>
                <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 mb-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-1">
                    Who is this for?
                  </p>
                  <p className="text-gray-300">{result.details.whoIsThisFor}</p>
                </div>

                <a
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors mb-3"
                >
                  Enroll in {result.title}
                </a>
                <div className="flex flex-col sm:flex-row gap-3 text-center sm:justify-between text-sm">
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="text-gray-400 hover:text-white transition-colors py-2"
                  >
                    Retake quiz
                  </button>
                  <a
                    href="/#classes"
                    className="text-blue-400 hover:text-blue-300 transition-colors py-2"
                  >
                    See all classes →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageLayout>
  );
}
