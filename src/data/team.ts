import brandonLam from "@/assets/pfps/brandon lam.avif";
import brianGe from "@/assets/pfps/brian ge.avif";
import chloeChu from "@/assets/pfps/chloe chu.avif";
import elinaKhan from "@/assets/pfps/elina khan.avif";
import elizabethSoboleva from "@/assets/pfps/elizabeth soboleva.avif";
import ericWangPfp from "@/assets/pfps/eric wang new.avif";
import ethanGuan from "@/assets/pfps/ethan guan.avif";
import ethanLeung from "@/assets/pfps/ethan leung.avif";
import evelynDam from "@/assets/pfps/evelyn dam.avif";
import jeffreyWang from "@/assets/pfps/jeffrey wang.avif";
import justinChou from "@/assets/pfps/justin chou.avif";
import justinWu from "@/assets/pfps/justin wu.avif";
import kaleyWu from "@/assets/pfps/kaley wu.avif";
import kyleZhou from "@/assets/pfps/kyle zhou.avif";
import patrickZhang from "@/assets/pfps/patrick zhang.avif";
import soroushPaidar from "@/assets/pfps/soroush paidar new.avif";
import siddhMistry from "@/assets/pfps/siddh mistry.avif";
import garyFu from "@/assets/pfps/gary fu.avif";
import weizhongXia from "@/assets/pfps/weizhong xia.avif";
import yichenXiao from "@/assets/pfps/yichen xiao.avif";
import zongqiaoZhou from "@/assets/pfps/zongqiao zhou.avif";
import danielGuo from "@/assets/pfps/danielGuo (2).png";
import jaydenFu from "@/assets/pfps/jaydenFu (1).png";
import jonathanGu from "@/assets/pfps/jonathanGu (1).png";
import lucasChan from "@/assets/pfps/lucasChan (1).png";
import samitHegde from "@/assets/pfps/samitHegde.png";

export type TeamMember = {
  name: string;
  title: string;
  description?: string;
  image: string;
};

export const ontarioTeam: TeamMember[] = [
  {
    name: "Patrick Zhang",
    title: "Co-President / Web Development Teacher",
    image: patrickZhang,
  },
  {
    name: "Ethan Guan",
    title: "Co-President / Senior Class Lead / Marketing",
    description:
      "Canadian Computing Competition (CCC) Junior Division Honour Roll",
    image: ethanGuan,
  },
  {
    name: "Justin Wen Hao Wu",
    title: "Vice President / Senior Class Teacher",
    description:
      "Canadian Computing Competition (CCC) Junior Division Honour Roll",
    image: justinWu,
  },
  {
    name: "Samit Hegde",
    title: "Web Dev Lead Teacher / Marketing",
    image: samitHegde,
  },
  {
    name: "Daniel Guo",
    title: "Intermediate Class Teacher",
    image: danielGuo,
  },
  {
    name: "Jayden Fu",
    title: "Intermediate Class Teacher",
    image: jaydenFu,
  },
  {
    name: "Lucas Chan",
    title: "Junior Class Teacher / Marketing",
    image: lucasChan,
  },
  {
    name: "Jonathan Gu",
    title: "Junior Class Teacher",
    image: jonathanGu,
  },
  {
    name: "Eric Wang",
    title: "Mentor / Former President & Founder",
    description:
      "United States of America Computing Olympiad (USACO) Silver Division",
    image: ericWangPfp,
  },
  {
    name: "Jeffrey Wang",
    title:
      "Former Vice-President & Founder / Junior Class Lead / Outreach Coordinator",
    description:
      "Canadian Computing Competition (CCC) Junior Division Distinction",
    image: jeffreyWang,
  },
  {
    name: "Ethan Leung",
    title: "Former Vice-President / Intermediate Class Teacher / Marketing",
    image: ethanLeung,
  },
  {
    name: "Brian Ge",
    title:
      "Former Senior Class Lead Teacher / Intermediate Teacher / Outreach Coordinator",
    description:
      "Canadian Computing Competition (CCC) Senior Division Distinction",
    image: brianGe,
  },
  {
    name: "Yichen Xiao",
    title: "Former Web Dev Lead Teacher / Website Developer",
    description:
      "Canadian Computing Competition (CCC) Senior Division Distinction",
    image: yichenXiao,
  },
  {
    name: "Elina Khan",
    title: "Former Head Public Relations Officer",
    image: elinaKhan,
  },
  {
    name: "Chloe Chu",
    title: "Former Public Relations Officer",
    image: chloeChu,
  },
  {
    name: "Kaley Wu",
    title: "Former Junior Class Teacher",
    image: kaleyWu,
  },
  {
    name: "Soroush Paidar",
    title: "Former Junior Class Teacher",
    image: soroushPaidar,
  },
  {
    name: "Siddh Mistry",
    title: "Former Intermediate Class Teacher",
    image: siddhMistry,
  },
  {
    name: "Gary Fu",
    title: "Former Intermediate Class Teacher",
    image: garyFu,
  },
  {
    name: "Brandon Lam",
    title: "Former Senior Class Teacher",
    description:
      "Canadian Computing Competition (CCC) Senior Division Group 3 Honour Roll (top 3% of competitors)",
    image: brandonLam,
  },
  {
    name: "Kyle Zhou",
    title: "Former Senior Class Teacher",
    description:
      "Perfect Score on Canadian Computing Competition (CCC) Junior Division",
    image: kyleZhou,
  },
  {
    name: "Justin Chou",
    title: "Former Junior Class Teacher",
    description:
      "Canadian Computing Competition (CCC) Junior Division Distinction",
    image: justinChou,
  },
  {
    name: "Elizabeth Soboleva",
    title: "Former Junior Class Teacher",
    image: elizabethSoboleva,
  },
];

export const quebecTeam: TeamMember[] = [
  {
    name: "Zongqiao Zhou",
    title: "Junior Class Teacher",
    image: zongqiaoZhou,
  },
  {
    name: "Weizhong Xia",
    title: "Junior Class Teacher",
    image: weizhongXia,
  },
];

export const bcTeam: TeamMember[] = [
  {
    name: "Evelyn Dam",
    title: "Junior Teacher",
    image: evelynDam,
  },
];
