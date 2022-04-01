import styled from "styled-components";
import * as s from "../Global/Global.styles";

export const Main = styled.div`
    width: 660px;
    margin: 32px 40px 0 0;
    :nth-child(even) {
      margin-right: 0;
    }
`;

export const PlyerCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PlayerCardFrame = styled(s.Frame)`
  width: 310px;
  height: 425px;
`;

export const PlayerCrad = styled.img`
    width: -webkit-fill-available;
`;