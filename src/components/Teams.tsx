import { useGetTeamsAlph } from "../hooks/api/useApi";
import { TEAMS_CONSTANTS } from "../types/constant/copy";
import Footer from "./footer/Footer"
import Header from "./header/Header"
import TeamComp from "./teamComp/TeamComp";
import * as s from "./Teams.styles";

const Teams = () => {

    const { data: teams } = useGetTeamsAlph()

    return (
        <s.Main>
            <Header />
            <s.Content>
                <s.Heading>Teams</s.Heading>
                <s.TextFrame>
                    <s.TextBox>{TEAMS_CONSTANTS.FIRST_BOX}</s.TextBox>
                </s.TextFrame>
                <s.Teams>
                    {teams && teams.map((team, i) => (
                        <TeamComp
                            key={i}
                            country={team.name}
                            player1={team.players.player1.cardUrl}
                            player2={team.players.player2.cardUrl}
                        />
                    ))}
                </s.Teams>
            </s.Content>
            <Footer />
        </s.Main>
    )
}

export default Teams