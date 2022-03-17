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
`;