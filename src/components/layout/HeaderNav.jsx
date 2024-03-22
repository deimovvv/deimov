import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  max-width:100%;
  height: 132px;
`;

const Wrapper = styled.div`
padding: 20px 20px;
display: flex;
flex: 2 1 auto;
align-items: flex-end;

@media only screen and (max-width: 320px){
  padding: 20px 0px;
  background-color: rgba(0,0,0,0.65);

}
`


const Nav = styled.nav`
  z-index: 999999;
  flex: 1 1 auto;
  
  
`;

const Ul = styled.ul`
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
 


  @media (max-width: 700px) {

  } 
`;

const Li = styled.li`
  text-transform: uppercase;
  margin-left: 15px;


  a{
      color: #ffffff;
  font-size: 1rem;

  @media (max-width: 700px) {
    font-size: 14px;
    padding:20px 0px;

   

  }
 

  }

  a:hover {
    color: #b3b6ba;
  }

 
  
`;


const Span = styled.span`
margin-top: 15px;
color: whitesmoke;

@media (max-width: 700px) {
  margin-top: 0px;
}
`

const HeaderNav = () => {
  return (
    <Header>
      <Wrapper>
        <Span>
          {" "}
          <Link to="/"> /// </Link>{" "}
        </Span>
        <Nav>
        <Ul>
          <Li>
            {" "}
            <Link to="/projects"> Projects </Link>{" "}
          </Li>

          <Li>
            {" "}
            <Link to="/music">Music</Link>{" "}
          </Li>

          {/* <Li>
            {" "}
            <Link to="/presskit">Presskit</Link>{" "}
          </Li> */}

        {/*   <Li>
            {" "}
            <Link to="/presskit">Shop</Link>{" "}
          </Li>
 */}

          <Li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </Li>
          <Li>
            {" "}
            <Link to="/contact">Contact</Link>{" "}
          </Li>
        </Ul>
      </Nav>
     
     
      </Wrapper>

     
    </Header>
  );
};

export default HeaderNav;
