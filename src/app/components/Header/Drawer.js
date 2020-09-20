import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import Icon from "../shared/Icon";

import Search from "../../../public/assets/search.svg";

const Drawer = styled(animated.aside)`
  background-color: #3a3a3a;
  border-radius: 5px;
  top: 4rem;
  position: relative;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const DrawerList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const DrawerItem = styled.li`
  color: white;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
`;

const DrawerComponent = ({ sections, open, setOpen }) => {
  const { o, t } = useSpring({
    config: {
      mass: 1,
      tension: 270,
      friction: 30,
    },
    o: open ? 1 : 0,
    t: open ? 0 : 30,
  });

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <Drawer style={{
      opacity: o,
      transform: t.interpolate((y) => `translateY(${y}%)`),
    }}
    >
      <DrawerList>
        {sections.map((section, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <NavLink key={index} to={`/${section.path}`}>
            <DrawerItem>
              {section.label}
            </DrawerItem>
          </NavLink>
        ))}
        <DrawerItem>
          <Icon src={Search} alt="Search icon" height="2rem" width="2rem" />
        </DrawerItem>
      </DrawerList>
    </Drawer>
  );
};

DrawerComponent.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default DrawerComponent;
