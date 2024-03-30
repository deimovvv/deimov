import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";


const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  padding-bottom: 50px;
  align-items: center;

  @media only screen and (min-width:320px){
  grid-gap: 30px;
  padding-bottom: 40px;
  grid-gap: 30px;
  }
`;

const IMG = styled.img`
  width: 340px;
  height: 340px;

  @media only screen and (max-width: 600px){
    width:200px;
    height:200px;
    margin-top:0px;
  }
`;
const Card = styled.div`
  .nameSong{
    margin:0px;
    padding-bottom:50px;
  
    @media only screen and (min-width: 320px){
      padding-bottom:10px;
      }
  }
  .sello{
    @media only screen and (max-width: 600px){
      font-size:.7em;
  
  }
  }
  
`;
const CardLinks = styled.div`
  display: flex;
  flex-direction:row;
  grid-gap: 20px;
  

  @media only screen and (max-width: 320px){
  flex-direction:column;
  grid-gap: 0px;
  }
`;

const MusicCard = ({ id, name, soundcloud, sello, spotify, youtube }) => {
  const musicURL = `/assets/musicimages/${id}.jpg`;

  return (
    <motion.div
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0, ease: "circOut", duration: 0.8 }}
  >
    <Container animate__animated animate__fadeIn>
      <div>
        {" "}
        <IMG src={musicURL} alt="Music" />{" "}
      </div>

      <Card>
        <div className="nameSong">
          {" "}
          {name}
          <p className="sello">by {sello} </p>
        </div>

        <CardLinks>
        <Link to={soundcloud} target="_blank">
          <img src="/icons8-soundcloud-24.png" />
        </Link>
        <Link to={spotify} target="_blank">
          {" "}
          <img src="/icons8-spotify-24.png" />{" "}
        </Link>
        <Link to={youtube} target="_blank">
          {" "}
          <img src="/icons8-youtube-play-24.png" />{" "}
        </Link>
        </CardLinks>
      </Card>
    </Container>
   </motion.div>
  );
};

export default MusicCard;
