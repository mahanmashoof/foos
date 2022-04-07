import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ffffff;
    margin: 16px 0 24px;
    padding-bottom: 24px;
    :nth-of-type(3) {
        border-bottom: 4px solid #ffffff;
    }
    `;

export const Flag = styled.img`
    height: 54px;
    width: 80px;
    `;

export const Text = styled.div`
    font-size: 20px;
    line-height: 36px;
    color: #ffffff;
    font-style: italic;
    font-weight: 600;
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    `;

export const PosText = styled(Text)`
  line-height: 26px;
  font-weight: 400;
  font-family: 'Queen of Camelot';
`;