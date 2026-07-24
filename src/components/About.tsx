import about from "@/assets/about.png";
import mission from "@/assets/mission.png";
import approach from "@/assets/our_approach.jpg";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

const BLOCKS = [
  {
    title: "About Us",
    image: about,
    alt: "About Us",
    imageFirst: true,
    body: "Algorithm Alchemists is a student-run non-profit (registered under Hack Club) offering high-tier competitive programming prep — normally reserved for expensive corporate academies — at an accessible level for elementary and high school families. Our teachers are accomplished high schoolers with CCC and USACO credentials: near-peer role models who assign the right amount of homework so students master Python, then advance to harder languages and contest concepts.",
  },
  {
    title: "Our Mission",
    image: mission,
    alt: "Our Mission",
    imageFirst: false,
    body: "At Algorithm Alchemists, our mission is to inspire and empower the next generation of coders. We believe that coding is an essential skill that can unlock limitless opportunities for students.",
  },
  {
    title: "Our Approach",
    image: approach,
    alt: "Our Approach",
    imageFirst: true,
    body: "We take a hands-on approach to learning, with interactive lessons and coding challenges that keep students engaged and motivated.",
  },
] as const;

export default function About() {
  return (
    <div className="grid min-h-screen gap-12 px-8 lg:gap-16 lg:px-16 lg:pt-24 xl:px-24">
      {BLOCKS.map((block) => (
        <Reveal key={block.title}>
          <div className="mb-4 flex flex-col items-center gap-6 lg:grid lg:grid-cols-2 lg:gap-12">
            <img
              src={block.image}
              alt={block.alt}
              className={`h-64 w-full max-w-md rounded-xl border border-white/15 object-cover lg:h-96 lg:max-w-none ${
                block.imageFirst
                  ? "order-2 lg:order-1"
                  : "order-2 lg:order-2"
              }`}
            />
            <div
              className={
                block.imageFirst
                  ? "order-1 text-center lg:order-2 lg:text-left"
                  : "order-1 text-center lg:order-1 lg:text-left"
              }
            >
              <Badge variant="secondary" className="mb-3">
                {block.title}
              </Badge>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight">
                {block.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {block.body}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
