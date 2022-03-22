import styled from "styled-components";
import * as s from '../Global/Global.styles'

export const Row = styled.div`
    display: flex;
    margin-bottom: 56px;
`;

export const FrameNumber = styled(s.Frame)`
    width: 144px;
    height: 144px;
    margin-right: 16px;
`;

export const FrameRules = styled(s.Frame)`
    height: 144px;
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
  padding: 20px;
  `;

export const RuleNumber = styled.div`
    font-size: 20px;
    line-height: 24px;
    color: #0200a4;
    font-weight: 700;
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif;
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