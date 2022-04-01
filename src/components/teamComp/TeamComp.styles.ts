import styled from "styled-components";
import * as s from "../Global/Global.styles";

export const Main = styled.div`
    width: 660px;
    margin-top: 32px;
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