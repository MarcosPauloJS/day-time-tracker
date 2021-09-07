import React from "react";
import { node } from "prop-types";
import { Container } from "./style";

export default function Box({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Box.propTypes = {
  children: node.isRequired,
};
