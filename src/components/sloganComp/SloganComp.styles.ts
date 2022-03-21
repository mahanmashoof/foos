import styled from "styled-components";
import background from "../../img/starBg.png";
import * as s from '../Global/Global.styles'

export const Frame = styled(s.Frame)`
width: 426px;
height: 280px;
`;

export const FrameInner = styled(s.FrameInner)`
  background-image: url(${background});
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  text-align: center;
  `;

export const UpperText = styled.div`
    font-size: 20px;
    line-height: 36px;
    color: #ffffff;
    font-style: italic;
    font-weight: 600;
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif;
    `;

export const LowerText = styled.div`
    font-size: 72px;
    line-height: 72px;
    color: #ef50a8;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.02em;
    font-family: 'Queen of Camelot';
`;