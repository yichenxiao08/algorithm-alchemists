import { useEffect, useState } from "react";

export function useNavbarVisibility() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMouseNearTop, setIsMouseNearTop] = useState(false);
  const [lastTrigger, setLastTrigger] = useState("scroll");
  const [lastScrollDirection, setLastScrollDirection] = useState<
    "up" | "down" | null
  >(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsScrolled(scrollTop > 50);

      if (isMobile) {
        setIsVisible(true);
        setLastScrollY(scrollTop);
        return;
      }

      let scrollDirection: "up" | "down" | null = null;
      if (scrollTop > lastScrollY) {
        scrollDirection = "down";
      } else if (scrollTop < lastScrollY) {
        scrollDirection = "up";
      }

      if (scrollDirection) {
        setLastScrollDirection(scrollDirection);
      }

      if (scrollTop <= 100) {
        setIsVisible(true);
        setLastTrigger("scroll");
      } else {
        if (scrollDirection === "down") {
          if (!isMouseNearTop) {
            setIsVisible(false);
            setLastTrigger("scroll");
          }
        } else if (scrollDirection === "up") {
          setIsVisible(true);
          setLastTrigger("scroll");
        }
      }

      setLastScrollY(scrollTop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;

      const scrollTop = window.scrollY;
      const mouseY = e.clientY;
      const isNearTop = mouseY <= 80;

      setIsMouseNearTop(isNearTop);

      if (scrollTop > 100) {
        if (isNearTop) {
          setIsVisible(true);
          setLastTrigger("mouse");
        } else if (!isNearTop && lastTrigger === "mouse") {
          if (lastScrollDirection === "down") {
            setIsVisible(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY, isMouseNearTop, lastScrollDirection, lastTrigger]);

  return { isScrolled, isVisible };
}
