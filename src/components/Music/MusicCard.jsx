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

  @media only screen and (max-width:320px){
  grid-gap: 30px;
  padding-bottom: 40px;
  }
`;

const IMG = styled.img`
  width: 340px;
  height: 340px;

  @media only screen and (max-width: 320px){
    width:200px;
    height:200px;
    margin-top:0px;
  }
`;
const Card = styled.div`
  .nameSong{
    margin:0px;
    padding-bottom:50px;
    @media only screen and (max-width: 430px){
      padding-bottom:0px;
  
  }
  }

  @media only screen and (max-width: 320px){
    width:200px;
  
  }
`;
const CardLinks = styled.div`
  display: grid;
  flex-direction:column;
  grid-gap: 20px;
  padding-left:30px;

  @media only screen and (max-width: 320px){
  
  }
`;

const MusicCard = ({ id, name, soundcloud, sello, spotify, youtube }) => {
  const musicURL = `/assets/musicimages/${id}.jpg`;

  return (
    <motion.div
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0, ease: "circOut", duration: 1 }}
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
          <p>by {sello} </p>
        </div>

        <CardLinks>
        <Link to={soundcloud} target="_blank">
          <img src="/public/icons8-soundcloud-24.png" />
        </Link>
        <Link to={spotify} target="_blank">
          {" "}
          <img src="/public/icons8-spotify-24.png" />{" "}
        </Link>
        <Link to={youtube} target="_blank">
          {" "}
          <img src="/public/icons8-youtube-play-24.png" />{" "}
        </Link>
        </CardLinks>
      </Card>
    </Container>
   </motion.div>
  );
};

export default MusicCard;
