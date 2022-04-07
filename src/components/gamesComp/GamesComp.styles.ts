import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ffffff;
    margin: 16px 0 24px;
    padding-bottom: 24px;
    :last-child {
        padding: 0;
        border-bottom: none;
        margin-bottom: 0;
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
  margin: 0 32px;
`;