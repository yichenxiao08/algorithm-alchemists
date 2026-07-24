import { motion } from "motion/react";
import PageLayout from "@/layouts/PageLayout";
import EventBlock from "@/components/EventBlock";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <PageLayout contentClassName="flex flex-col pt-24">
      <div className="px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
            Events
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-lg lg:text-xl xl:text-2xl font-semibold mb-8 lg:mb-16 text-center">
            Check out the events we've been to!
          </div>
        </motion.div>
        {events.map((event) => (
          <EventBlock key={event.title} event={event} />
        ))}
      </div>
    </PageLayout>
  );
}
