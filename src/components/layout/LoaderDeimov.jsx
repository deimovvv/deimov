import styled from "styled-components";
import PuffLoader from "react-spinners/ClipLoader";

const Div = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  /* background-color: rgba(0, 0, 0, 1); */
 
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
