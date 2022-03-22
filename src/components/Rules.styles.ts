import styled from "styled-components";
import * as s from "./Global/Global.styles";
import background from "./../img/bg-sky.jpeg";
import frameBg from "./../img/starBg.png";

export const Main = styled(s.Main)`
  background-image: url(${background});
  `;

export const Content = styled(s.Content)``

export const Frame = styled(s.Frame)``;

export const FrameInner = styled(s.FrameInner)`
  background-image: url(${frameBg});
  height: 100px;
  background-size: cover;

`;

export const Heading = styled.div`
  font-family: 'Queen of Camelot';
  font-style: italic;
  font-weight: normal;
  font-size: 72px;
  line-height: 83px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  text-shadow: 2px 4px 4px #0200A4;
  margin-bottom: 40px;
`;