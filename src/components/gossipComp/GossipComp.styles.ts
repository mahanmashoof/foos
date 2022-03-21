import styled from "styled-components";
import * as s from '../Global/Global.styles'

export const Frame = styled(s.Frame)`
width: 426px;
`;

export const FrameInner = styled(s.FrameInner)`
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  box-sizing: border-box;
  border-top: 3px solid black;
  border-left: 3px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  `;

export const Image = styled.img`
    width: 100%;
    height: 360px;
    object-fit: cover;
`;

export const Heading = styled.div`
    font-size: 20px;
    line-height: 36px;
    color: #ef50a8;
    font-style: italic;
    font-weight: 600;
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 8px;
    `;

export const Text = styled.div`
    font-size: 22px;
    line-height: 28px;
    color: #0200a4;
    font-weight: 400;
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif;
`;