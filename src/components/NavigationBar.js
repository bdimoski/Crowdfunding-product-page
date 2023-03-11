import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import MobileNavbarAdditional from "./MobileNavbarAdditional";

const Nav = styled.nav`
  width: 111vw;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
  z-index: 4;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const Brand = styled.img`
  text-decoration: none;
  margin-left: 8vw;
  padding: 2.2rem;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 11vw;
  font-weight: 500;
  width: 243px;
  margin-top: 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  li {
    transition: all 220ms ease-in-out;
    &:hover {
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
`;
const Hamburger = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 1rem;
  margin-top: 2.4rem;
  cursor: pointer;
  transition: all 220ms ease-in-out;
  @media (min-width: 768px) {
    display: none;
  }
`;
const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const HamburgerWrapper = styled.div`
  width: 4rem;

  &.isClicked {
    display: none;
  }
`;
const A = styled.a`
  transition: all 220ms ease-in-out;
  &.isClicked {
    display: none;
  }
`;
const NavigationBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const crossNavbarHandler = (value) => {
    setIsClicked(value);
  };
  return (
    <Nav>

      <A href="#titlePage" className={isClicked ? "isClicked" : null}>
        <Brand src={logo} alt="Crowd Fund" />
      </A>
      <HamburgerWrapper className={isClicked ? "isClicked" : null}>
        <Hamburger
          src={hamburger}
          alt="hamburger"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        />
      </HamburgerWrapper>
      <MobileNavbarAdditional
        isClicked={isClicked}
        crossNavbar={crossNavbarHandler}
        cross={() => {
          setIsClicked(false);
        }}
      />
      <ListWrapper>
        <List>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#discover">Discover</a>
          </li>
          <li>
            <a href="#getStarted">Get Started</a>
          </li>
        </List>
      </ListWrapper>
    </Nav>
  );
};
export default NavigationBar;
