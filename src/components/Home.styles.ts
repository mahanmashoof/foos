import styled from "styled-components";
import * as s from "./Global/Global.styles";
import background from "./../img/bg-sky.jpeg";
import footballField from './../img/football-field.jpeg'

export const Main = styled(s.Main)`
  background-image: url(${background});
  `;

export const Content = styled(s.Content)``

export const Row1 = styled(s.Row)`
  height: 570px;
  `;

export const VideoFrame = styled(s.Frame)`
  height: 100%;
  width: 1016px;
  `;

export const Video = styled(s.FrameInner)`
  background: #000000;
  `;

export const FieldFrame = styled(s.Frame)`
  height: 100%;
  width: 328px;
  `;

export const Field = styled(s.FrameInner)`
  background-image: url(${footballField});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CountDownHeading = styled.div`
  font-style: italic;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
  font-family: sans-serif;
  letter-spacing: -0.02em;
  `;

export const CountDownDays = styled.div`
  font-family: 'Queen of Camelot';
  font-size: 112px;
  line-height: 112px;
  margin: 24px 0 0;
  color: #ffffff;
  font-style: italic;
  letter-spacing: -0.02em;
  `;

export const CountDownHours = styled(CountDownDays)`  
  font-size: 64px;
  line-height: 64px;
`;

export const CountDownMin = styled(CountDownDays)`  
  font-size: 36px;
  line-height: 44px;
`;

export const CountDownText = styled.div`
  color: #ffffff;
  letter-spacing: -0.02em;
  font-size: 1rem;
  line-height: 22px;
  font-family: sans-serif;
  `;

export const SloganRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 0;
`;