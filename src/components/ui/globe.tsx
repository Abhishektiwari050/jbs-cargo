"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, AmbientLight, DirectionalLight, PointLight } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: any;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}

let numbersOfRings = [0];

function GlobeComponent({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<any>(null);
  const { scene } = useThree();

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (!globeRef.current) {
      globeRef.current = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
      });
    }

    const globe = globeRef.current;

    globe
      .hexPolygonsData([])
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    const globeMaterial = globe.globeMaterial() as any;
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
    globeMaterial.shininess = defaultProps.shininess;

    scene.fog = new Fog(0x000000, 400, 2000);

    if (groupRef.current) {
      groupRef.current.add(globe);
    }

    return () => {
      if (groupRef.current && globe) {
        groupRef.current.remove(globe);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!globeRef.current || !data) return;
    const globe = globeRef.current;

    globe
      .arcsData(data)
      .arcStartLat((d: any) => d.startLat)
      .arcStartLng((d: any) => d.startLng)
      .arcEndLat((d: any) => d.endLat)
      .arcEndLng((d: any) => d.endLng)
      .arcColor((d: any) => d.color)
      .arcAltitude((d: any) => d.arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((d: any) => d.order)
      .arcDashGap(15)
      .arcDashAnimateTime(defaultProps.arcTime);

    globe
      .pointsData(data)
      .pointColor((d: any) => d.color)
      .pointsMerge(true)
      .pointAltitude(0.07)
      .pointRadius(0.05);

    globe
      .ringsData([])
      .ringColor(() => (t: number) => `rgba(255,100,50,${1 - t})`)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (!globeRef.current || !data) return;
    const globe = globeRef.current;

    const interval = setInterval(() => {
      if (!data || data.length === 0) return;
      numbersOfRings = genRandomNumbers(
        0,
        data.length - 1,
        Math.floor((data.length * 4) / 5)
      );
      globe.ringsData(
        data
          .filter((_, i) => numbersOfRings.includes(i))
          .map((d) => ({
            lat: d.endLat,
            lng: d.endLng,
          }))
      );
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <ambientLight
        color={new Color(defaultProps.ambientLight)}
        intensity={0.6}
      />
      <directionalLight
        color={new Color(defaultProps.directionalLeftLight)}
        position={[-400, 100, 400]}
      />
      <directionalLight
        color={new Color(defaultProps.directionalTopLight)}
        position={[-200, 500, 200]}
      />
      <pointLight
        color={new Color(defaultProps.pointLight)}
        position={[-200, 500, 200]}
        intensity={0.8}
      />
      <group ref={groupRef}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={200}
          maxDistance={500}
          autoRotateSpeed={defaultProps.autoRotateSpeed || 0.5}
          autoRotate={defaultProps.autoRotate !== false}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </group>
    </>
  );
}

export function World({ data, globeConfig }: WorldProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Canvas
      camera={new PerspectiveCamera(50, 1, 180, 1800)}
      style={{ width: "100%", height: "100%" }}
    >
      <GlobeComponent globeConfig={globeConfig} data={data} />
    </Canvas>
  );
}
