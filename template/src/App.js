import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'

export default function App() {
  return (
    <Canvas>
      <color attach="background" args={['black']} />
      <OrbitControls />
      <Thing />
    </Canvas>
  )
}

function Thing() {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log('click')}
      onPointerOver={(e) => console.log('hover')}
      onPointerOut={(e) => console.log('unhover')}
    >
      <boxBufferGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}
