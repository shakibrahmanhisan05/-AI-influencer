// === ADDED: libra.dev Features Visuals — Animated Wireframe Sphere with Orbiting Rings ===
import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';

// === Wireframe Sphere with slow Y-axis rotation ===
function WireframeSphere() {
    const meshRef = useRef();

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.25;
            meshRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2.2, 28, 20]} />
            <meshBasicMaterial
                wireframe
                color="#d4a050"
                transparent
                opacity={0.5}
            />
        </mesh>
    );
}

// === Glow shell — slightly larger sphere to simulate bloom ===
function GlowShell() {
    const meshRef = useRef();

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.25;
            meshRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} scale={1.03}>
            <sphereGeometry args={[2.2, 28, 20]} />
            <meshBasicMaterial
                wireframe
                color="#f5c060"
                transparent
                opacity={0.12}
            />
        </mesh>
    );
}

// === Orbiting ring as a Torus ===
function OrbitingRing({ radius, tubeRadius, speed, tilt, color, opacity }) {
    const meshRef = useRef();

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * speed;
        }
    });

    return (
        <mesh ref={meshRef} rotation={tilt}>
            <torusGeometry args={[radius, tubeRadius, 8, 100]} />
            <meshBasicMaterial
                color={color}
                transparent
                opacity={opacity}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

// === Particle sparkle ring ===
function SparkleRing({ radius, count, speed, tilt }) {
    const groupRef = useRef();

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            pos[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
            pos[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.15;
        }
        return pos;
    }, [radius, count]);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * speed;
        }
    });

    return (
        <group ref={groupRef} rotation={tilt}>
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color="#f5c542"
                    size={0.035}
                    transparent
                    opacity={0.65}
                    sizeAttenuation
                />
            </points>
        </group>
    );
}

// === Center glow sphere ===
function CenterGlow() {
    return (
        <>
            <pointLight position={[0, 0, 0]} color="#d4a050" intensity={0.6} distance={6} />
            <mesh>
                <sphereGeometry args={[0.06, 12, 12]} />
                <meshBasicMaterial color="#f5c542" transparent opacity={0.5} />
            </mesh>
        </>
    );
}

// === Main scene composition ===
function SphereScene() {
    return (
        <>
            <ambientLight intensity={0.03} />

            <CenterGlow />
            <WireframeSphere />
            <GlowShell />

            {/* Orbiting rings at various tilts — using Torus geometry */}
            <OrbitingRing
                radius={3.0}
                tubeRadius={0.008}
                speed={0.3}
                tilt={[0.4, 0, 0.2]}
                color="#d4a050"
                opacity={0.5}
            />
            <OrbitingRing
                radius={3.2}
                tubeRadius={0.006}
                speed={-0.2}
                tilt={[-0.6, 0.3, -0.1]}
                color="#c8956a"
                opacity={0.4}
            />
            <OrbitingRing
                radius={2.8}
                tubeRadius={0.007}
                speed={0.4}
                tilt={[0.8, -0.2, 0.5]}
                color="#f0c070"
                opacity={0.45}
            />

            {/* Sparkle trails */}
            <SparkleRing
                radius={3.1}
                count={80}
                speed={0.35}
                tilt={[0.5, 0.1, 0.3]}
            />
            <SparkleRing
                radius={2.9}
                count={60}
                speed={-0.25}
                tilt={[-0.7, 0.2, -0.2]}
            />
        </>
    );
}

// === Exported canvas wrapper component ===
export function FeaturesSphere() {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
        >
            <Canvas
                camera={{ position: [0, 0.5, 7], fov: 45 }}
                style={{ background: 'transparent' }}
                dpr={[1, 1.5]}
                gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            >
                <Suspense fallback={null}>
                    <SphereScene />
                </Suspense>
            </Canvas>
        </div>
    );
}
