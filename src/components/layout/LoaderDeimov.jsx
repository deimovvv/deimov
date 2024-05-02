import styled from "styled-components";
import PuffLoader from "react-spinners/PuffLoader";

const Div = styled.div`
position: fixed; /* Se posiciona fijo en la ventana */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1); /* Fondo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Asegura que el loader aparezca encima de otros elementos */
 
`;

const LoaderDeimov = () => {
  return (
    <Div>
      {" "}
      <PuffLoader color="#878a8a" size={50} />{" "}
    </Div>
    
  );
};

export default LoaderDeimov;
