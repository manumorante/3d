'use client'

import * as THREE from 'three'

import { useRef, useEffect } from 'react'

export default function Cube() {
  const cubeRef = useRef()

  useEffect(() => {
    // Basic Three.js setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      cubeRef.current.clientWidth / cubeRef.current.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(cubeRef.current.clientWidth, cubeRef.current.clientHeight)

    // Add renderer
    cubeRef.current.appendChild(renderer.domElement)

    // Create a cube
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)

    // Add cube to scene
    scene.add(cube)

    // Move camera back
    camera.position.z = 5

    // Render the scene
    function animate() {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.02
      renderer.render(scene, camera)
    }
    animate()

    // Clean up
    return () => {
      // destroy all the things
      geometry.dispose()
      material.dispose()
      scene.remove(cube)
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={cubeRef} className='Cube w-80 h-80'>
      <h1 className='hidden'>Cube</h1>
    </div>
  )
}
