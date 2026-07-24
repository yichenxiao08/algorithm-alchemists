import { motion } from "motion/react";
import type { EventItem } from "@/data/events";

const imgBaseClass =
  "w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md object-cover";

type EventBlockProps = {
  event: EventItem;
};

export default function EventBlock({ event }: EventBlockProps) {
  const { title, body, images, layout } = event;
  const isImagesFirst = layout === "imagesFirst";

  const imageRow = (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
      {images.map((image) =>
        image.wrapScale ? (
          <div
            key={image.alt}
            className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              style={image.style}
            />
          </div>
        ) : (
          <img
            key={image.alt}
            src={image.src}
            alt={image.alt}
            className={image.className ?? imgBaseClass}
            style={image.style}
          />
        )
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      {isImagesFirst && (
        <div className="mb-12 xl:hidden">
          <div className="text-md lg:text-xl xl:text-2xl font-bold mb-4">
            {title}
          </div>
          <div className="text-sm lg:text-md">{body}</div>
        </div>
      )}

      <div
        className={`grid gap-12 mb-12 sm:mb-24 items-center ${
          isImagesFirst
            ? "xl:grid-cols-[auto_1fr]"
            : "xl:grid-cols-[1fr_auto]"
        }`}
      >
        {isImagesFirst ? (
          <>
            {imageRow}
            <div className="hidden xl:block">
              <div className="text-md lg:text-xl xl:text-2xl font-bold mb-4">
                {title}
              </div>
              <div className="text-sm lg:text-md">{body}</div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="text-md lg:text-xl xl:text-2xl font-bold mb-4">
                {title}
              </div>
              <div className="text-sm lg:text-md">{body}</div>
            </div>
            {imageRow}
          </>
        )}
      </div>
    </motion.div>
  );
}
