import styled from "styled-components";
import * as s from '../Global/Global.styles'

export const Row = styled.div`
    display: flex;
    margin-bottom: 56px;
`;

export const FrameNumber = styled(s.Frame)`
    margin-right: 16px;
    text-align: center;
`;

export const FrameRules = styled(s.Frame)`
    width: -webkit-fill-available;
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
    font-family: 'Queen of Camelot';
    font-style: italic;
    font-weight: normal;
    font-size: 72px;
    line-height: 72px;
    color: #EF5DA8;
    width: 80px;
    `;

export const Heading = styled.div`
    font-size: 20px;
    line-height: 36px;
    color: #0200a4;
    font-style: italic;
    font-weight: 600;
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 16px;
    `;

export const Text = styled.div`
    font-size: 16px;
    line-height: 22px;
    color: #0200a4;
    font-weight: 400;
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif;
`;