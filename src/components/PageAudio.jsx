import React, { useState, useRef, useEffect } from "react";
import audioFile from "../assets/audio/Alva Noto, Ryuichi Sakamoto - Uoon I myfreemp3.vip .mp3";
import styled from "styled-components";

const LoaderAudio = styled.div`

  height: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 60px;
  left: 50px;
  z-index: 1
  ;

  .stroke{
    display: block;
    position: relative;
    background: #f1f1f1;
    height: 100%;
    width: 3px;
    border-radius: 50px;
    margin: 0 3px;
    animation: animate 2s linear infinite;

  }

  @keyframes animate {
    50%{
      height: 20%;
    }
    100%{
      height: 100%;
    }
  }

  .stroke:nth-child(1){
    animation-delay: 0s;
  }
  .stroke:nth-child(2){
    animation-delay: 0.4s;
  }

  .stroke:nth-child(3){
    animation-delay: 0.4s;
  }

  .stroke:nth-child(5){
    animation-delay: 0.1s;
  }

`


const PageWithAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <>
    <LoaderAudio>
        <span className='stroke'></span>
        <span className='stroke'></span>
        <span className='stroke'></span>
        <span className='stroke'></span>
        
      </LoaderAudio>
    <div>
      <audio ref={audioRef} src={audioFile} />
    </div>
    </>
    
    
  );
};

export default PageWithAudio;