import styled from "styled-components";
import background from "../../img/starBg.png";
import * as s from '../Global/Global.styles'

export const Frame = styled(s.Frame)``;

export const Main = styled(s.FrameInner)`
  background-image: url(${background});
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-size: cover;
  flex-direction: column;
`;

export const FooterText = styled.div`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
`;