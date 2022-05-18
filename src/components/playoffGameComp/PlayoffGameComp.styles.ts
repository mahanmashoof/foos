import styled from "styled-components";

export const Main = styled.div`
padding: 12px 8px;
width: 120px;
border: 1px solid #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Flag = styled.img`
width: 30px;
margin-bottom: 6px;
`

export const TeamName = styled.div`
font-weight: 600;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-style: italic;
line-height: 17px;
letter-spacing: -0.02em;
color: #FFFFFF;
`

export const Score = styled.div`
font-size: 14px;
line-height: 16px;
color: #ffffff;
font-weight: 400;
font-family: 'Queen of Camelot';
letter-spacing: -0.02em;
font-style: italic;
margin: 0.5rem 0;
`

export const Occation = styled(Score)`
color: #EF5DA8;
`