import styled from "styled-components";
import * as s from "./Global/Global.styles";
import background from "./../img/bg-sky.jpeg";

export const Main = styled(s.Main)`
  background-image: url(${background});
  width: 1440px;
`;

export const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 0;
  align-items: center;
`

export const LogoMob = styled.img`
  width: 359px;
  height: 126px;
`

export const LogoFlamingo = styled.img`
  width: 103px;
`
export const LogoText = styled.div`
font-size: 2rem;
line-height: 36px;
font-style: italic;
font-family: 'Queen of Camelot', sans-serif;
color: darkblue;
`