"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  GradientTexture,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from "@react-three/drei";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import * as THREE from "three";
import { useMoonSecret } from "@/components/MoonSecretProvider";

export type ChillBlobMode = "moon" | "sun";

const noopRaycast: THREE.Object3D["raycast"] = () => {};

/** Inner surface of a large sphere — read as deep space behind the moon */
function SpaceDome() {
  const meshRef = useRef<THREE.Mesh>(null);
  useLayoutEffect(() => {
    const m = meshRef.current;
    if (m) m.raycast = noopRaycast;
  }, []);
  return (
    <mesh ref={meshRef} renderOrder={-1}>
      <sphereGeometry args={[80, 48, 48]} />
      <meshBasicMaterial side={THREE.BackSide} depthWrite={false}>
        <GradientTexture
          stops={[0, 0.2, 0.5, 0.82, 1]}
          colors={["#02010a", "#060b18", "#0c1428", "#101e35", "#030510"]}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

/** Inner surface — bright zenith → blue sky → warm horizon (daytime) */
function SunSkyDome() {
  const meshRef = useRef<THREE.Mesh>(null);
  useLayoutEffect(() => {
    const m = meshRef.current;
    if (m) m.raycast = noopRaycast;
  }, []);
  return (
    <mesh ref={meshRef} renderOrder={-1}>
      <sphereGeometry args={[80, 48, 48]} />
      <meshBasicMaterial side={THREE.BackSide} depthWrite={false}>
        <GradientTexture
          stops={[0, 0.35, 0.62, 0.88, 1]}
          colors={["#f0f9ff", "#93c5fd", "#38bdf8", "#fcd34d", "#fdba74"]}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

/** Stars must not steal pointer events from the moon */
function MoonStarfield() {
  const ref = useRef<THREE.Points>(null);
  useLayoutEffect(() => {
    const p = ref.current;
    if (p) p.raycast = noopRaycast;
  }, []);
  return (
    <Stars
      ref={ref}
      radius={120}
      depth={70}
      count={6500}
      factor={3.2}
      saturation={0.12}
      fade
      speed={0.35}
    />
  );
}

function MoonSparkles(props: ComponentProps<typeof Sparkles>) {
  const groupRef = useRef<THREE.Group>(null);
  const stripRaycast = () => {
    groupRef.current?.traverse((obj) => {
      if (obj !== groupRef.current) obj.raycast = noopRaycast;
    });
  };
  useLayoutEffect(() => {
    stripRaycast();
    const id = requestAnimationFrame(() => stripRaycast());
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <group ref={groupRef}>
      <Sparkles {...props} />
    </group>
  );
}

function MoonBody() {
  const mesh = useRef<THREE.Mesh>(null);
  const moonSecret = useMoonSecret();

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = t * 0.11;
    mesh.current.rotation.x = Math.sin(t * 0.28) * 0.07;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.24}>
      <mesh
        ref={mesh}
        onPointerDown={(e) => {
          e.stopPropagation();
          moonSecret?.registerMoonTap();
        }}
      >
        <sphereGeometry args={[0.86, 72, 72]} />
        <MeshDistortMaterial
          color="#b4b9c4"
          emissive="#1a2332"
          emissiveIntensity={0.22}
          roughness={0.9}
          metalness={0.05}
          distort={0.34}
          speed={2.05}
        />
      </mesh>
    </Float>
  );
}

function MoonScene() {
  return (
    <>
      <color attach="background" args={["#030510"]} />
      <SpaceDome />

      <MoonStarfield />

      {/* Soft volumetric twinkle near the moon */}
      <MoonSparkles
        count={42}
        scale={[5.5, 2.4, 1.8]}
        size={1.35}
        speed={0.18}
        opacity={0.5}
        color="#d4e4ff"
      />

      {/* Key light: sun-side of the moon (terminator / lunar read) */}
      <ambientLight intensity={0.06} color="#2a3550" />
      <directionalLight
        position={[5, 1.2, 3.5]}
        intensity={1.05}
        color="#e8eef8"
      />
      <directionalLight
        position={[-3.5, -0.8, -2]}
        intensity={0.18}
        color="#6b8cce"
      />
      <pointLight position={[-2, 0.5, 3]} intensity={0.15} color="#a8b8d8" />

      <group position={[0, -0.02, 0]}>
        <MoonBody />
      </group>
    </>
  );
}

function SunBody() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = t * 0.12;
    mesh.current.rotation.x = Math.sin(t * 0.3) * 0.06;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.22}>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.82, 64, 64]} />
        <MeshDistortMaterial
          color="#ffe566"
          emissive="#ff9500"
          emissiveIntensity={1}
          roughness={0.26}
          metalness={0.1}
          distort={0.36}
          speed={2.15}
        />
      </mesh>
    </Float>
  );
}

function SunScene() {
  return (
    <>
      <color attach="background" args={["#bae6fd"]} />
      <SunSkyDome />

      <hemisphereLight
        color="#e0f2fe"
        groundColor="#fde68a"
        intensity={0.55}
      />
      <ambientLight intensity={0.38} color="#fff7ed" />
      <directionalLight
        position={[2.5, 4.5, 3]}
        intensity={0.95}
        color="#fffbeb"
      />
      <pointLight position={[0, 0.35, 1.4]} intensity={1.35} color="#ffcc66" />

      {/* Warm pollen / sun motes in air */}
      <Sparkles
        count={64}
        scale={[6, 2.6, 2]}
        size={2.1}
        speed={0.32}
        opacity={0.58}
        color="#fff8e0"
      />

      <group position={[0, -0.02, 0]}>
        <SunBody />
      </group>
    </>
  );
}

type ChillBlobProps = {
  mode: ChillBlobMode;
};

function useCanvasDpr(): [number, number] {
  const [dpr, setDpr] = useState<[number, number]>([1, 1.35]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => setDpr(mq.matches ? [1, 1.2] : [1, 1.75]);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return dpr;
}

export default function ChillBlob({ mode }: ChillBlobProps) {
  const isMoon = mode === "moon";
  const dpr = useCanvasDpr();

  return (
    <div
      className={
        isMoon
          ? "relative h-40 w-full overflow-hidden rounded-2xl border border-indigo-950/60 bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,#1e1b4b_0%,#0f172a_45%,#020617_100%)] shadow-lg shadow-indigo-950/50 sm:h-48 md:h-52"
          : "relative h-40 w-full overflow-hidden rounded-2xl border border-sky-300/70 bg-[linear-gradient(180deg,#e0f2fe_0%,#7dd3fc_38%,#fef3c7_88%,#fde68a_100%)] shadow-md shadow-sky-300/40 sm:h-48 md:h-52 dark:border-sky-500/25 dark:bg-[linear-gradient(180deg,#0c4a6e_0%,#0369a1_40%,#451a03_95%,#0c0a09_100%)] dark:shadow-sky-950/40"
      }
    >
      <Canvas
        key={mode}
        className={`absolute inset-0 touch-none ${isMoon ? "cursor-pointer" : ""}`}
        camera={{ position: [0, 0.1, 3.5], fov: 40 }}
        dpr={dpr}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        {isMoon ? <MoonScene /> : <SunScene />}
      </Canvas>
      <div
        className={
          isMoon
            ? "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-transparent to-indigo-950/25"
            : "pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-100/30 via-transparent to-sky-100/50 dark:from-amber-950/20 dark:via-transparent dark:to-sky-950/30"
        }
        aria-hidden
      />
      <p className="sr-only">
        {isMoon
          ? "Animated moon and starfield in Three.js"
          : "Animated sun and sky in Three.js"}
      </p>
    </div>
  );
}
