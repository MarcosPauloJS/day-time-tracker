import styled from "styled-components";
import { dynamicPropsCSS } from "../../../utils";

export const Container = styled.div`
  ${(props) => dynamicPropsCSS("width", "100%", props)}
  ${(props) => dynamicPropsCSS("height", "100%", props)}
  ${(props) => dynamicPropsCSS("display", null, props)}
  ${(props) => dynamicPropsCSS("flex-direction", null, props)}
  ${(props) => dynamicPropsCSS("align-items", null, props)}
  ${(props) => dynamicPropsCSS("flex-direction", null, props)}
  ${(props) =>
    dynamicPropsCSS("color", `${props.theme.colors.text.main}`, props)}
  ${(props) => dynamicPropsCSS("background-color", null, props)}
  ${(props) => dynamicPropsCSS("background", null, props)}
  ${(props) => dynamicPropsCSS("border", null, props)}
  ${(props) => dynamicPropsCSS("padding-left", null, props)}
  ${(props) => dynamicPropsCSS("padding-rigth", null, props)}
  ${(props) => dynamicPropsCSS("padding-top", null, props)}
  ${(props) => dynamicPropsCSS("padding-bottom", null, props)}
  ${(props) => dynamicPropsCSS("padding", `${props.theme.sizes[2]}`, props)}
`;
