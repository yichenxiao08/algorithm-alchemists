// Drop approved photos into src/assets/reviews/ then import and set `image` below.
// Expected filenames: kenneth-lock, emily-ng, jonathan-chen (.jpg or .png)

export type Review = {
  name: string;
  role: string;
  review: string;
  image?: string;
};

export const reviews: Review[] = [
  {
    name: "Kenneth Lock",
    role: "Student",
    review:
      "I took the junior class for learning Python. The teachers were very smart, helpful, and kind, and I learned a lot even without prior coding experience. I liked the quick homework feedback since I could fix mistakes ASAP. The program made me interested in programming, and I plan to continue with competitive programming classes :P",
  },
  {
    name: "Emily Ng",
    role: "Parent",
    review:
      "I'm very happy with the quality of education here. The teachers are great at helping my grade 2 child when they're confused. They explain things with simple comparisons. Well-spoken and very patient. Thank you for your hard work.",
  },
  {
    name: "Jonathan Chen",
    role: "Student",
    review:
      "I took the competitive programming class and got distinction for the 2024 junior and 2025 senior CCC. I always asked for extra help for homework, and the teachers were super helpful in answering questions. Even my parents are encouraging me to take more classes to prepare for the next CCC. Thanks a lot.",
  },
];

export function reviewInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
