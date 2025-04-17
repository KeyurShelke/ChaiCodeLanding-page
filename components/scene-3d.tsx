"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Float } from "@react-three/drei"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function Model({ position = [0, 0, 0], scale = 1 }) {
  const mesh = useRef()

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <mesh ref={mesh} position={position} scale={[scale, scale, scale]}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="#f97316" roughness={0.3} metalness={0.8} />
    </mesh>
  )
}

function FloatingText() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <Text
        font="/fonts/Inter_Bold.json"
        position={[0, -2.5, 0]}
        fontSize={0.5}
        color="#f97316"
        anchorX="center"
        anchorY="middle"
      >
        LEARN. CODE. GROW.
      </Text>
    </Float>
  )
}

export default function Scene3D() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="h-[50vh] md:h-[60vh] bg-black relative"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} scale={1.5} />
          <FloatingText />
          <Environment preset="night" />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </motion.section>
  )
}
