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
width: 660px;
`;

export const FrameInnerGroupStage = styled(s.FrameInner)`
  background-color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  `;

interface ActiveGroup {
  activeButton: boolean;
}

export const TextGroupStage = styled.div<ActiveGroup>`
  font-size: 40px;
  line-height: 52px;
  font-style: italic;
  font-weight: 400;
  font-family: 'Queen of Camelot';
  text-shadow: 2px 4px 4px #0200A4;
  color: ${(props) => (props.activeButton ? '#EF5DA8' : '#ffffff')};
  text-decoration: ${(props) => (props.activeButton ? 'underline' : 'none')};
  cursor: pointer;
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

export const TextBigButton = styled.div<ActiveGroup>`
font-size: 32px;
line-height: 42px;
color: ${(props) => (props.activeButton ? '#EF5DA8' : '#ffffff')};
text-decoration: ${(props) => (props.activeButton ? 'underline' : 'none')};
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


export const TextSmallButton = styled.div<ActiveGroup>`
font-size: 20px;
line-height: 36px;
color: ${(props) => (props.activeButton ? '#EF5DA8' : '#ffffff')};
text-decoration: ${(props) => (props.activeButton ? 'underline' : 'none')};
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

export const TableExplanation = styled(TextResults)`
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
`;

export const Playoff3Teams = styled.div`
display: flex;
justify-content: space-between;
margin: 2rem 9.5rem;
`

export const Playoff4Teams = styled.div`
display: flex;
justify-content: space-between;
margin: 2rem 0;
`