// En tu archivo Background.js

import React, { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import fragmentShader from "../../shaders/fragment.glsl";
import vertexShader from "../../shaders/vertex.glsl";
import * as THREE from "three";


const mousePosition = new THREE.Vector2();
window.addEventListener("mousemove", (event) => {
    mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
});


const BackgroundMaterial = shaderMaterial(
  {
    time: 0,
    mouse: new THREE.Vector2(),
    mousePosition: new THREE.Vector2(),
    resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    randomFactor: 0.1, // Ajusta este valor según tus preferencias
  },
  vertexShader,
  fragmentShader
);

extend({ BackgroundMaterial });

const Background = () => {
  const mat = useRef();

  useFrame((state, delta) => {
    mat.current.time += delta;
    mat.current.mousePosition.copy(mousePosition); // Actualiza la uniforme 'mousePosition' con las coordenadas del mouse
  });

  return (
    <mesh rotationZ={10} position={[0, 0, 5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <backgroundMaterial ref={mat} side={THREE.DoubleSide} />
      {}
    </mesh>
  );
};

export default Background;
