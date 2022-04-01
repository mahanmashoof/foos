import styled from "styled-components";
import background from "../../img/starBg.png";
import * as s from '../Global/Global.styles'

export const Frame = styled(s.Frame)`
height: 160px;
margin-bottom: 32px;
`;

export const FrameInner = styled(s.FrameInner)`
  background-image: url(${background});
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  text-align: center;
  `;

export const Text = styled.div`
    font-size: 48px;
    line-height: 62px;
    color: #ef50a8;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.02em;
    font-family: 'Queen of Camelot';
`;