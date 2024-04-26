import React, { useCallback, useEffect, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Background from "./Background";
import "../../css/style.css";
import gsap from "gsap";
import FadingImageDisplacement from "./FadingImageDisplacement";
import { useLocation } from "react-router";

const Container = styled.section`
  position: fixed;
  pointer-events: all;

  z-index: ${({ isHome }) => isHome ? '9999' : '-1'};
/*   position: relative; // */
  

  
  /* max-height: 100%; */
  inset: 0 !important;
`;

const experience = ({ isInteractive = false, isHome }) => {



  return (
    <Container isHome={isHome}>
      <Canvas id="canvas" className="canvas" camera={{ position: [0, 0, 6] }}  >
    {/*   <OrbitControls updateDefaultCamera={true} enableZoom={true} />
   */}

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        {/* BACKGROUND SPHERE  */}
        <Background />

        {isInteractive && <FadingImageDisplacement />}

        {/*     <Environment preset={"night"} /> */}
      </Canvas>
    </Container>
  );
};

export default experience;
