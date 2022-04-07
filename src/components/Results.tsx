import { useState } from "react";
import { groupsDropdown } from "../helpers/Dropdown";
import { useGetGames, useGetTeamsAlph } from "../hooks/api/useApi";
import Footer from "./footer/Footer"
import GamesComp from "./gamesComp/GamesComp";
import Header from "./header/Header"
import * as s from "./Results.styles";

const Results = () => {
    const groupsArr = groupsDropdown.slice(1)
    const [clickedGroup, setClickedGroup] = useState('A')
    const resultChoices = { results: 'results', table: 'table' }
    const [clickedResult, setClickedResult] = useState(resultChoices.results)

    const { data: teams } = useGetTeamsAlph()
    const currentGroupTeams = teams.filter(team => team.group === clickedGroup)

    const { data: games } = useGetGames()
    const currentGroupGames = games.filter(game => game.group === clickedGroup)

    return (
        <s.Main>
            <Header />
            <s.Content>
                <s.Heading>Schedule & results</s.Heading>
                <s.FrameGroupStage>
                    <s.FrameInnerGroupStage>
                        <s.TextGroupStage>Group stage - ends may 9th</s.TextGroupStage>
                    </s.FrameInnerGroupStage>
                </s.FrameGroupStage>
                <s.FrameMain>
                    <s.FrameInnerMain>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                            <s.FrameBigButton onClick={() => setClickedResult(resultChoices.results)}>
                                <s.FrameInnerBigButton>
                                    <s.TextBigButton activeButton={clickedResult === resultChoices.results} >
                                        {resultChoices.results}
                                    </s.TextBigButton>
                                </s.FrameInnerBigButton>
                            </s.FrameBigButton>
                            <s.FrameBigButton onClick={() => setClickedResult(resultChoices.table)} >
                                <s.FrameInnerBigButton>
                                    <s.TextBigButton activeButton={clickedResult === resultChoices.table}>
                                        {resultChoices.table}
                                    </s.TextBigButton>
                                </s.FrameInnerBigButton>
                            </s.FrameBigButton>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
                            {groupsArr.map((group, i) => (
                                <s.FrameSmallButton key={i} onClick={() => { setClickedGroup(group) }}>
                                    <s.FrameInnerSmallButton>
                                        <s.TextSmallButton activeButton={clickedGroup === group} >Group {group}</s.TextSmallButton>
                                    </s.FrameInnerSmallButton>
                                </s.FrameSmallButton>
                            ))
                            }
                        </div>
                        {clickedResult === resultChoices.results &&
                            <s.FrameResults>
                                <s.FrameInnerResults>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <s.TextResults>country</s.TextResults>
                                        <s.TextResults>score</s.TextResults>
                                        <s.TextResults>country</s.TextResults>
                                    </div>
                                    <s.HeadingLine />
                                    {teams && currentGroupGames.map((game, i) => (
                                        <GamesComp
                                            key={i}
                                            homeFlagUrl={game.team1.flagUrl}
                                            homeTeam={game.team1.name}
                                            homeScore={game.team1.goals}
                                            awayScore={game.team2.goals}
                                            awayTeam={game.team2.name}
                                            awayFlagUrl={game.team2.flagUrl}
                                        />
                                    ))
                                    }
                                </s.FrameInnerResults>
                            </s.FrameResults>}
                        {clickedResult === resultChoices.table &&
                            <s.FrameResults>
                                <s.FrameInnerResults>
                                    tables go here
                                </s.FrameInnerResults>
                            </s.FrameResults>}
                    </s.FrameInnerMain>
                </s.FrameMain>
            </s.Content>
            <Footer />
        </s.Main>
    )
}

export default Results