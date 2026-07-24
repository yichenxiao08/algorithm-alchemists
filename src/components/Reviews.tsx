import { motion, easeOut, useReducedMotion } from "motion/react";
import fivestars from "@/assets/5_stars.png";
import { reviews, reviewInitials } from "@/data/reviews";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Reviews() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.14,
      },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: easeOut },
    },
  };

  return (
    <div className="px-8 py-8 lg:px-16 lg:py-12 xl:px-24">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true, margin: "-10%" }}
        className="mb-10 text-center"
      >
        <Badge variant="secondary" className="mb-4">
          Testimonials
        </Badge>
        <h2 className="mb-3 text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight">
          What Students & Parents Say
        </h2>
        <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
          Voices from families who&apos;ve learned with us.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-8%" }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.name}
            variants={itemVariants}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -6, transition: { duration: 0.25 } }
            }
            className="h-full"
          >
            <Card className="h-full border-white/10 bg-card/50 ring-white/10 backdrop-blur-sm transition-colors hover:bg-card/70">
              <CardHeader className="items-center text-center">
                <Avatar size="lg" className="mb-2 size-[4.5rem]">
                  {review.image ? (
                    <AvatarImage src={review.image} alt={review.name} />
                  ) : null}
                  <AvatarFallback className="bg-primary/30 text-base font-semibold text-foreground">
                    {reviewInitials(review.name)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg lg:text-xl">{review.name}</CardTitle>
                <CardDescription className="text-xs font-medium tracking-[0.16em] uppercase">
                  {review.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <img src={fivestars} alt="" className="h-5 opacity-90" />
                <blockquote className="text-center text-[0.95rem] leading-relaxed font-light text-foreground/75 lg:text-base">
                  “{review.review}”
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
