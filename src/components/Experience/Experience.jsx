import React, { useEffect } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Background from "./Background";
import "../../css/style.css";
import gsap from "gsap";

const Container = styled.section`
  position: fixed;
  pointer-events: all;
  z-index: -1;
  /* max-height: 100%; */
  inset: 0 !important;
`;

const background = () => {
 

  return (
    <Container>
      <Canvas id="canvas" className="canvas" camera={{ position: [0, 0, 6] }}>
      {/* <OrbitControls updateDefaultCamera={true} enableZoom={true} /> */}
  

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        {/* BACKGROUND SPHERE  */}
        <Background />

        {/*     <Environment preset={"night"} /> */}
      </Canvas>
    </Container>
  );
};

export default background;
