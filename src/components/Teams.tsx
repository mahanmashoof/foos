import { TEAMS_CONSTANTS } from "../types/constant/copy";
import Footer from "./footer/Footer"
import Header from "./header/Header"
import * as s from "./Teams.styles";

const Teams = () => {
    return (
        <s.Main>
            <Header />
            <s.Content>
                <s.Heading>Teams</s.Heading>
                <s.TextFrame>
                    <s.TextBox>{TEAMS_CONSTANTS.FIRST_BOX}</s.TextBox>
                </s.TextFrame>
            </s.Content>
            <Footer />
        </s.Main>
    )
}

export default Teams