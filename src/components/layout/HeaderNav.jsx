import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`

  height: 132px;
`;

const Wrapper = styled.div`
padding: 20px 20px;
display: flex;
flex: 2 1 auto;


@media only screen and (max-width: 320px){
  padding: 20px 0px;
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
  align-items: center;


  @media (max-width: 700px) {
   
  } 
`;

const Li = styled.li`
  text-transform: uppercase;
  margin-left: 15px;

  a{
      color: #ffffff;
  font-size: 13px;

  @media (max-width: 700px) {
    font-size: 9px;
    padding:20px 0px;
  }
 

  }

  a:hover {
    color: #b3b6ba;
  }

 
  
`;

const HeaderNav = () => {
  return (
    <Header>
      <Wrapper>
        <span>
          {" "}
          <Link to="/"> /// </Link>{" "}
        </span>
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
