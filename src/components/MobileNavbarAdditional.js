import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import cross from "../images/icon-close-menu.svg";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 220ms ease-in-out;
`;
const List = styled.ul`
  background: white;
  height: 201px;
  width: 85%;
  margin-top: 0.2rem;
  border-radius: 7px;
  transition: all 220ms ease-in-out;
  hr {
    background-color: white;
    border: none;
    border-top: 0.5px solid hsl(0, 0%, 90%);
    width: 100%;
  }
`;
const ListItem = styled.li`
  color: black;
  list-style: none;
  padding: 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  transition: all 220ms ease-in-out;
  a {
    text-decoration: none;
    color: black;
  }
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  margin-top: 10px;
  .logo {
    padding: 2.2rem;
    cursor: pointer;
  }
  .cross {
    height: 0.9rem;
    width: 0.9rem;
    margin-top: 2.4rem;
    margin-right: 2rem;
    cursor: pointer;
  }
`;
const MobileNavbarAdditional = (props) => {
  return props.isClicked ? (
    <Container>
      <NavBar>
        <img src={logo} alt="Crowd Fund" className="logo" />
        <img src={cross} alt="Close" onClick={props.cross} className="cross" />
      </NavBar>
      <List>
        <ListItem>
          <a href="#about" onClick={() => props.crossNavbar(false)}>
            About
          </a>
        </ListItem>
        <hr />
        <ListItem>
          <a href="#discover" onClick={() => props.crossNavbar(false)}>
            Discover
          </a>
        </ListItem>
        <hr />
        <ListItem>
          <a href="#getStarted" onClick={() => props.crossNavbar(false)}>
            Get Started
          </a>
        </ListItem>
      </List>
    </Container>
  ) : (
    ""
  );
};
export default MobileNavbarAdditional;