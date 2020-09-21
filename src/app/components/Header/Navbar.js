import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Icon from "../shared/Icon";
import Drawer from "./Drawer";

import Close from "../../../public/assets/white_close.svg";
import Search from "../../../public/assets/search.svg";
import Burger from "../../../public/assets/burger.svg";

const Navbar = styled.nav`
  align-items: center;
  color: white;
  display: flex;
  height: 3.75rem;
  justify-content: space-between;
  margin-bottom: 6.25rem;
  position: relative;
  padding-top: 1.25rem;
  width: 100%;
`;

const NavbarTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  line-height: 3.75rem;
`;

const NavbarMenu = styled.ul`
  display: none;
  width: 40%;
  @media (min-width: 992px) {
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
`;

const NavbarItem = styled.li`
  font-size: 0.875rem;
  padding: 1.5rem 0;
  list-style: none;
  @media (min-width: 992px) {
    padding: 0 1.5rem;
  }
`;
const NavbarResponsive = styled.div`
  display: flex;
  @media (min-width: 992px) {
    display: none;
  }
`;

const NavbarComponent = () => {
  const sections = [
    {
      label: "Past Trials",
      path: "past-trials",
    },
    {
      label: "How it works",
      path: "how",
    },
    {
      label: "Log In / Sign Up ",
      path: "auth",
    },
  ];

  let defaultHeight;
  let defaultWidth;

  if (typeof window !== "undefined") {
    defaultHeight = window.innerHeight;
    defaultWidth = window.innerWidth;
  }

  const [open, setOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: defaultHeight,
    width: defaultWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Navbar>
      <NavLink to="/">
        <NavbarTitle>Rule of Thumb</NavbarTitle>
      </NavLink>
      <NavbarMenu>
        {sections.map((section, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <NavLink key={index} to={`/${section.path}`}>
            <NavbarItem>
              {section.label}
            </NavbarItem>
          </NavLink>
        ))}
        <NavbarItem>
          <Icon src={Search} alt="Search icon" height="2rem" width="2rem" />
        </NavbarItem>
      </NavbarMenu>
      <NavbarResponsive>
        <NavbarItem onClick={() => setOpen(!open)}>
          <Icon
            src={open ? Close : Burger}
            alt="menu-icon"
            height="2rem"
            width="2rem"
          />
        </NavbarItem>
      </NavbarResponsive>
      {dimensions.width <= 992 && <Drawer sections={sections} open={open} setOpen={setOpen} />}
    </Navbar>
  );
};

export default NavbarComponent;
