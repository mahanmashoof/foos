import styled from "styled-components";
import * as s from "./Global/Global.styles";
import background from "./../img/bg-sky.jpeg";

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

export const TextFrame = styled(s.Frame)`
  width: 1130px;
  margin: 40px auto 8px;
`;

export const TextBox = styled(s.TextBox)`
  text-align: center;
  color: #0200a4;
  padding: 24px 20px;
  border-top: 3px solid black;
  border-left: 3px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  line-height: 29px;
  letter-spacing: -0.02em;
`;

export const Teams = styled.div`
  display: flex;
  flex-wrap: wrap;
`;