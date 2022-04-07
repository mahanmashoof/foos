import styled from "styled-components";
import * as s from "./Global/Global.styles";
import background from "./../img/bg-sky.jpeg";
import backgroundFrame from "./../img/starBg.png";

export const Main = styled(s.Main)`
  background-image: url(${background});
`;

export const Content = styled(s.Content)``;

export const Heading = styled.div`
  font-family: 'Queen of Camelot';
  font-style: italic;
  font-weight: normal;
  font-size: 72px;
  line-height: 94px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  text-shadow: 2px 4px 4px #0200A4;
  margin-bottom: 40px;
`;

export const FrameGroupStage = styled(s.Frame)`
height: 100px;
width: 580px;
`;

export const FrameInnerGroupStage = styled(s.FrameInner)`
  background-color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  `;

export const TextGroupStage = styled.div`
  font-size: 40px;
  line-height: 52px;
  color: #ffffff;
  font-style: italic;
  font-weight: 400;
  font-family: 'Queen of Camelot';
  text-shadow: 2px 4px 4px #0200A4;
`;

export const FrameMain = styled(s.Frame)`
  margin-top: 2rem;
  `;

export const FrameInnerMain = styled(s.FrameInner)`
  background-image: url(${backgroundFrame});
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-size: cover;
  padding: 64px;
  `;

export const FrameBigButton = styled(s.Frame)`
  height: 68px;
  width: 572px;
  cursor: pointer;
`;

export const FrameInnerBigButton = styled(s.FrameInner)`
  background-color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  `;

export const TextBigButton = styled.div`
font-size: 32px;
line-height: 42px;
color: #ffffff;
text-decoration: none;
font-style: italic;
font-weight: 400;
font-family: 'Queen of Camelot';
letter-spacing: -0.02em;
`;

export const FrameSmallButton = styled(s.Frame)`
  height: 68px;
  width: 202px;
  cursor: pointer;
`;

export const FrameInnerSmallButton = styled(s.FrameInner)`
  background-color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  `;

export const TextSmallButton = styled.div`
font-size: 20px;
line-height: 36px;
color: #ffffff;
text-decoration: none;
font-style: italic;
font-weight: 400;
font-family: 'Queen of Camelot';
letter-spacing: -0.02em;
`;

export const FrameResults = styled(s.Frame)``;

export const FrameInnerResults = styled(s.FrameInner)`
  background-color: #0200a4;
  padding: 20px;
  `;

export const TextResults = styled.div`
font-size: 20px;
line-height: 36px;
color: #ffffff;
font-style: italic;
font-weight: 400;
font-family: 'Queen of Camelot';
letter-spacing: -0.02em;
`;

export const HeadingLine = styled.hr`
  border-top:  2px solid #ffffff;
  margin: 16px 0 24px;
`;