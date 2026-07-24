import type { CSSProperties } from "react";
import img1 from "@/assets/event-pics/img1.jpg";
import img2 from "@/assets/event-pics/img2.jpg";
import img3 from "@/assets/event-pics/img3.jpg";
import img4 from "@/assets/event-pics/img4.jpg";
import img5 from "@/assets/event-pics/img5.jpg";
import img6 from "@/assets/event-pics/img6.jpg";
import img7 from "@/assets/event-pics/img7.png";
import img8 from "@/assets/event-pics/img8.jpg";
import img9 from "@/assets/event-pics/img9.webp";
import img10 from "@/assets/event-pics/img10.webp";
import webinarScreenshot from "@/assets/event-pics/Webinar Screenshot.png";

export type EventImage = {
  src: string;
  alt: string;
  style?: CSSProperties;
  wrapScale?: boolean;
  /** overrides default fixed crop box (use for screenshots that must stay uncropped) */
  className?: string;
};

export type EventItem = {
  title: string;
  body: string;
  images: EventImage[];
  /** textFirst = copy then images; imagesFirst = images then copy (with mobile copy above) */
  layout: "textFirst" | "imagesFirst";
};

export const events: EventItem[] = [
  {
    title: "College Application Experience Webinar",
    body: "On July 17, 2026, Algorithm Alchemists hosted a free online webinar for parents of students interested in CS, math, or engineering. Three former instructors who recently completed their own application seasons shared firsthand advice: Eric Wang (CS + Economics at Yale; offers from CMU CS, UC Berkeley CS, and Waterloo CS/SE), Soroush Paidar (Math & Physics at the University of Toronto; offers from U of T Math and Waterloo AFM), and Yichen Xiao (Engineering at the University of Waterloo; offers from U of T Engineering and U of T CS). The session covered essay writing, extracurricular planning, how they chose their schools, what they would do differently in high school, balancing academics with activities, and how parents can best support their kids—followed by an open Q&A.",
    layout: "imagesFirst",
    images: [
      {
        src: webinarScreenshot,
        alt: "College application webinar with Eric Wang, Soroush Paidar, and Yichen Xiao",
        // ponytail: h-auto so the wide screenshot isn't cropped by the fixed event thumb box
        className: "w-72 md:w-96 lg:w-[28rem] xl:w-[32rem] max-w-full h-auto rounded-md",
      },
    ],
  },
  {
    title:
      "Minds on Climate Symposium hosted by Human Nature Projects Canada",
    body: "On September 27, 2025, Algorithm Alchemists attended the Minds on Climate Symposium hosted by Human Nature Projects Canada in Etobicoke, Ontario. The event focused on turning eco-anxiety into meaningful action. As a nonprofit teaching kids to code, we led an interactive session showing how technology and education can empower youth to address climate change. Through hands-on activities, students learned to use coding to track environmental data, raise awareness, and promote sustainability—transforming climate anxiety into creativity and action.",
    layout: "textFirst",
    images: [
      { src: img1, alt: "Event 1" },
      { src: img2, alt: "Event 2" },
    ],
  },
  {
    title: "YRES x Ignite Volunteer Fair 2025",
    body: "On October 25, 2025, Algorithm Alchemists participated in the 2025 YRES Volunteer Fair hosted by York Region Educational Services, connecting with volunteers and community partners to share our mission of empowering youth through coding education. At the event, we showcased our programs that teach kids how to build tech-for-good projects and recruited new mentors and supporters eager to help inspire the next generation of young innovators.",
    layout: "imagesFirst",
    images: [
      { src: img3, alt: "Event 3" },
      { src: img4, alt: "Event 4" },
    ],
  },
  {
    title: "CUTC x Caffeine.ai Promptathon",
    body: "On November 22, 2025, Algorithm Alchemists attended the CUTC x Caffeine.ai Promptathon showcased on Luma. As a nonprofit that teaches younger students how to code, we led an introductory session showing participants how AI-assisted coding can make building apps more accessible. We taught students how to structure effective prompts, turn ideas into functional prototypes, and understand the logic behind the code generated for them. By bringing guidance, mentorship, and easy-to-use tools, we helped students gain confidence in using modern coding workflows—transforming curiosity into real, hands-on creation.",
    layout: "textFirst",
    images: [
      { src: img5, alt: "Event 5" },
      { src: img6, alt: "Event 6" },
    ],
  },
  {
    title: "Learning For Our Future Podcast",
    body: "On November 24, 2025, Algorithm Alchemists were featured on the Leaders For Our Future podcast, supported by Ocean Wise. The podcast highlights stories of conservation, innovation, and leadership across Canada, raising awareness of ocean and water issues. During the episode, we discussed how technology can be used to protect ecosystems, the environmental impact of AI, and how youth can leverage coding skills for positive change. Our conversation covered topics including sustainable AI practices, the hidden water and energy costs of data centers, and practical ways students can use technology to address environmental challenges. By sharing insights from our work teaching coding to youth, we emphasized how technology can empower the next generation to turn curiosity into meaningful action for the planet.",
    layout: "imagesFirst",
    images: [
      {
        src: img7,
        alt: "Event 7",
        style: { objectPosition: "center 90%" },
      },
      {
        src: img8,
        alt: "Event 8",
        style: { objectPosition: "center 40%", transform: "scale(1.075)" },
        wrapScale: true,
      },
    ],
  },
  {
    title: "Facilitating on Purpose Podcast",
    body: "On March 4, 2026, Algorithm Alchemists founder Eric Wang joined the Facilitating on Purpose podcast hosted by learning designer Beth Cougler Blom. He shared the story behind Algorithm Alchemists and how it delivers engaging, peer-led coding workshops for elementary and high school students. The conversation highlighted how purposeful facilitation (through hands-on activities and active participation) makes programming more accessible and motivating. Eric also emphasized the organization's mentorship culture, where former students return as volunteer instructors, fostering a supportive and sustainable learning community.",
    layout: "textFirst",
    images: [
      { src: img9, alt: "Event 9" },
      { src: img10, alt: "Event 10" },
    ],
  },
];
