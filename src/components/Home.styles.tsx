import styled from "styled-components";
import { g_Main } from "./Global/Global.styles";
import background from "./../img/bg-sky.jpeg";

export const Main = styled(g_Main)`
  background-image: url(${background});
  width: 1440px;
`;

export const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 0;
`

export const LogoMob = styled.img`
  width: 359px;
  height: 126px;
`

export const LogoFlamingo = styled.img`
  width: 103px;
`
