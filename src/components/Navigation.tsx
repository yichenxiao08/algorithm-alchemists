import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#classes", label: "Classes" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/our-team", label: "Our Team" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navigation() {
  const { isScrolled, isVisible } = useNavbarVisibility();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-300",
        isScrolled
          ? "border-b border-white/10 bg-background/55 shadow-lg backdrop-blur-md"
          : "bg-transparent",
      )}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/">
          <img
            src="/favicon.png"
            alt="Algorithm Alchemists"
            className="h-8 w-auto sm:h-12"
          />
        </a>

        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          {LINKS.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              asChild
              className="text-foreground/85 hover:text-foreground"
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <Button asChild size="lg" className="ml-2 rounded-full px-5 font-bold">
            <a href="/sign-up">Sign Up</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-l border-white/10 bg-background/95 backdrop-blur-xl"
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-1 px-2">
              {LINKS.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="justify-start text-base"
                  asChild
                >
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </Button>
              ))}
              <Separator className="my-3" />
              <Button asChild size="lg" className="rounded-full font-bold">
                <a href="/sign-up" onClick={() => setOpen(false)}>
                  Sign Up
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
