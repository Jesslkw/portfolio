"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const TAP_TARGET = 5;
const TAP_RESET_MS = 2400;

type MoonSecretContextValue = {
  registerMoonTap: () => void;
};

const MoonSecretContext = createContext<MoonSecretContextValue | null>(null);

export function useMoonSecret() {
  return useContext(MoonSecretContext);
}

function ExplosionLayer({
  reduceMotion,
  onRestore,
}: {
  reduceMotion: boolean;
  onRestore: () => void;
}) {
  const particles = useMemo(
    () =>
      Array.from({ length: reduceMotion ? 24 : 140 }, (_, i) => ({
        id: i,
        angle: Math.random() * Math.PI * 2,
        dist: 35 + Math.random() * 95,
        size: 3 + Math.random() * 16,
        delay: Math.random() * 0.12,
        duration: reduceMotion ? 0.45 : 0.55 + Math.random() * 0.95,
        hue: 195 + Math.random() * 90,
      })),
    [reduceMotion],
  );

  return (
    <motion.div
      role="dialog"
      aria-modal
      aria-labelledby="moon-secret-title"
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-[#020308]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.35 }}
    >
      {/* Shock rings */}
      {!reduceMotion && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute left-1/2 top-[42%] h-[min(120vw,120vh)] w-[min(120vw,120vh)] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-400/60"
              initial={{ scale: 0, opacity: 0.9 }}
              animate={{ scale: 2.8, opacity: 0 }}
              transition={{
                duration: 1.25,
                delay: i * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </>
      )}

      {/* Initial flash */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-white"
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: "easeOut" }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 1, scale: 0.2 }}
        animate={{ opacity: 0, scale: 2.2 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.9, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(56,189,248,0.9) 0%, rgba(99,102,241,0.35) 35%, transparent 65%)",
        }}
      />

      {/* Flying debris / sparks */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "42%",
              width: p.size,
              height: p.size,
              marginLeft: -p.size / 2,
              marginTop: -p.size / 2,
              background: `hsl(${p.hue} 95% 62%)`,
              boxShadow: `0 0 ${Math.round(p.size * 2.2)}px hsl(${p.hue} 100% 70%)`,
            }}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: [0, 1.4, 0.6],
              x: `${Math.cos(p.angle) * p.dist}vmin`,
              y: `${Math.sin(p.angle) * p.dist}vmin`,
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: [0.12, 0.85, 0.22, 1],
            }}
          />
        ))}
      </div>

      {/* Scanlines + vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.45) 2px, rgba(0,0,0,0.45) 4px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_20%,rgba(0,0,0,0.85)_100%)]"
        aria-hidden
      />

      <motion.div
        className="relative z-10 flex max-w-md flex-col items-center px-6 text-center"
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: reduceMotion ? 0.05 : 0.35,
          duration: reduceMotion ? 0.2 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.5em] text-sky-400/90">
          signal lost
        </p>
        <h2
          id="moon-secret-title"
          className="bg-gradient-to-br from-sky-100 via-cyan-300 to-indigo-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent drop-shadow-[0_0_28px_rgba(56,189,248,0.45)] sm:text-4xl"
          style={{ fontSize: "clamp(1.75rem, 6vw, 2.75rem)" }}
        >
          LUNAR BREACH
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          You tapped the moon {TAP_TARGET} times. The portfolio briefly ceased
          to exist.
        </p>
        <motion.button
          type="button"
          onClick={onRestore}
          className="mt-10 rounded-full border border-sky-500/50 bg-sky-500/15 px-8 py-3 text-sm font-semibold text-sky-100 shadow-[0_0_24px_rgba(56,189,248,0.35)] transition-colors hover:border-sky-400 hover:bg-sky-500/25"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Restore reality
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export function MoonSecretProvider({ children }: { children: ReactNode }) {
  const [exploding, setExploding] = useState(false);
  const countRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (exploding) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [exploding]);

  const registerMoonTap = useCallback(() => {
    if (exploding) return;

    if (timerRef.current) clearTimeout(timerRef.current);
    countRef.current += 1;
    timerRef.current = setTimeout(() => {
      countRef.current = 0;
    }, TAP_RESET_MS);

    if (countRef.current >= TAP_TARGET) {
      countRef.current = 0;
      if (timerRef.current) clearTimeout(timerRef.current);
      setExploding(true);
    }
  }, [exploding]);

  const restore = useCallback(() => setExploding(false), []);

  const value = useMemo(
    () => ({ registerMoonTap }),
    [registerMoonTap],
  );

  return (
    <MoonSecretContext.Provider value={value}>
      <motion.div
        className="min-h-dvh"
        initial={false}
        animate={exploding ? "boom" : "idle"}
        variants={{
          idle: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            filter: "blur(0px) saturate(1) hue-rotate(0deg)",
          },
          boom: {
            scale: reduceMotion ? 0.96 : 0.03,
            rotate: reduceMotion ? 0 : 11,
            opacity: reduceMotion ? 0.35 : 0,
            filter: reduceMotion
              ? "blur(10px) saturate(1.2)"
              : "blur(32px) saturate(2.1) hue-rotate(-28deg)",
          },
        }}
        transition={{
          duration: reduceMotion ? 0.4 : 1.25,
          ease: [0.65, 0.02, 0.23, 1],
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {exploding ? (
          <ExplosionLayer
            key="boom"
            reduceMotion={!!reduceMotion}
            onRestore={restore}
          />
        ) : null}
      </AnimatePresence>
    </MoonSecretContext.Provider>
  );
}
