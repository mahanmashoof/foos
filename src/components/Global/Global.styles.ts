import styled from "styled-components";

export const Main = styled.div`
  width: 1440px;
  margin: auto;
`;

export const Content = styled.div`
  padding: 40px 40px 80px;
`

export const Frame = styled.div`
  background: #c4c4c4;
  padding: 12px;
  box-shadow: inset -1px -1px 0px 2px #000000, inset 1px 1px 0px 2px #FFFFFF;
  box-sizing: border-box;
`;

export const FrameInner = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px #ffffff;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface TypeButtonProps {
  pressed: boolean
}

export const Button = styled.button<TypeButtonProps>`
  background: #c4c4c4;
  box-shadow: ${(props) => props.pressed ? '-1px -1px 0px 1px #000000, 1px 1px 0px 1px #FFFFFF' : 'inset -1px -1px 0px 2px #000000, inset 1px 1px 0px 2px #FFFFFF'};
  cursor: pointer;
  & div {
    text-decoration: ${(props) => props.pressed ? 'underline' : 'none'};
    font-weight: ${(props) => props.pressed ? '700' : '400'};
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }
`;

export const TextBox = styled(FrameInner)`
  background-color: white;
`;