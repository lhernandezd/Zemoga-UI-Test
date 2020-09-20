import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Icon = styled.img`
  height: ${(props) => props.height};
  transform: ${(props) => (props.flip ? "rotate(180deg)" : "0")};
  width: ${(props) => props.width};
`;

const IconComponent = ({
  alt, src, height, width, flip,
}) => (
  <Icon alt={alt} src={src} height={height} width={width} flip={flip} />
);

IconComponent.propTypes = {
  flip: PropTypes.bool,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

IconComponent.defaultProps = {
  flip: false,
};

export default IconComponent;
