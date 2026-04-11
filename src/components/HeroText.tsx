"use client";

import { useEffect, useState } from "react";

const TYPING_TEXT = "Hello, I'm";
const TYPE_SPEED = 80;
const ERASE_SPEED = 50;
const PAUSE_AFTER_TYPE = 5000;
const PAUSE_AFTER_ERASE = 400;

export function HeroText() {
  const [displayed, setDisplayed] = useState("");
  const showCursor = true;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const type = (i: number) => {
      if (i <= TYPING_TEXT.length) {
        setDisplayed(TYPING_TEXT.slice(0, i));
        timeout = setTimeout(() => type(i + 1), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => erase(TYPING_TEXT.length), PAUSE_AFTER_TYPE);
      }
    };

    const erase = (i: number) => {
      if (i >= 0) {
        setDisplayed(TYPING_TEXT.slice(0, i));
        timeout = setTimeout(() => erase(i - 1), ERASE_SPEED);
      } else {
        timeout = setTimeout(() => type(0), PAUSE_AFTER_ERASE);
      }
    };

    type(0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <p className="text-sm font-medium tracking-wide text-accent">
        {displayed}
        {showCursor && (
          <span className="ml-0.5 inline-block w-px animate-pulse bg-accent align-middle" style={{ height: "1em" }} aria-hidden />
        )}
      </p>

      <h1 className="mt-2 text-[clamp(1.5rem,6vw+0.5rem,3rem)] font-semibold leading-[1.15] tracking-tight sm:text-4xl sm:leading-tight md:text-5xl">
        <span className="animated-gradient-name">
          Jessie Li Kam Wa
        </span>
      </h1>
    </>
  );
}
