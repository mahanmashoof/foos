import styled from "styled-components";
import background from "./../img/starBg.png";


export const Main = styled.div`
  background-image: url(${background});
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-size: cover;
`

export const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  align-items: center;
  background: #ffffff;
  height: fit-content;
  width: fit-content;
`

export const LogoMob = styled.img`
  height: 90px;
  background: transparent;
  margin-right: 120px;
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
margin-right: 30px;
`