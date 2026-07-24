"use client";

import {
  type ElementType,
  useEffect,
  useRef,
  useState,
  createElement,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  constText?: string;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  constText = "",
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [constDisplayedText, setConstDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [constCharIndex, setConstCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [constTextComplete, setConstTextComplete] = useState(!constText);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Key by content so parent re-renders with a fresh inline array
  // (e.g. Header's countdown tick) don't restart the typing loop.
  const textKey = Array.isArray(text) ? text.join("\0") : text;
  const textArray = useMemo(
    () => (textKey.includes("\0") ? textKey.split("\0") : [textKey]),
    [textKey],
  );

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // Handle const text typing (once only)
  useEffect(() => {
    if (!isVisible || !constText || constTextComplete) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (constCharIndex < constText.length) {
      timeout = setTimeout(() => {
        setConstDisplayedText((prev) => prev + constText[constCharIndex]);
        setConstCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      // Const text is complete, start main text immediately
      timeout = setTimeout(() => {
        setConstTextComplete(true);
      }, 0); // Just a brief pause to feel natural
    }

    return () => clearTimeout(timeout);
  }, [
    constCharIndex,
    constText,
    constTextComplete,
    isVisible,
    typingSpeed,
    pauseDuration,
  ]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible || !constTextComplete) return;

    let timeout: ReturnType<typeof setTimeout>;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex]
              );
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    constTextComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    ((!constTextComplete && constCharIndex < constText.length) ||
      (constTextComplete &&
        (currentCharIndex < textArray[currentTextIndex].length || isDeleting)));

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    constText && (
      <span className="inline text-white">{constDisplayedText}</span>
    ),
    constTextComplete && (
      <span className="inline" style={{ color: getCurrentTextColor() }}>
        {displayedText}
      </span>
    ),
    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block opacity-100 ${
          shouldHideCursor ? "hidden" : ""
        } ${cursorClassName}`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
