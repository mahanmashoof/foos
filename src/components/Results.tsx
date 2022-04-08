import { useState } from "react";
import { groupsDropdown } from "../helpers/Dropdown";
import { adjustTeamName } from "../helpers/GroupGames";
import { useGetGames, useGetTeamsAlph } from "../hooks/api/useApi";
import { GameResult } from "../models/api/APIGroups";
import Footer from "./footer/Footer"
import GamesComp from "./gamesComp/GamesComp";
import TablesComp from "./gamesComp/TablesComp";
import Header from "./header/Header"
import * as s from "./Results.styles";

const Results = () => {
    const groupsArr = groupsDropdown.slice(1)
    const [clickedGroup, setClickedGroup] = useState('A')
    const resultChoices = { results: 'results', table: 'table' }
    const [clickedResult, setClickedResult] = useState(resultChoices.results)

    const { data: teams } = useGetTeamsAlph()
    //const currentGroupTeams = teams.filter(team => team.group === clickedGroup)

    const { data: games } = useGetGames()
    const currentGroupGames = games.filter(game => game.group === clickedGroup)

    const getGamesWon = (resultsArr: GameResult[]) => {
        return resultsArr ? resultsArr.map((result) => (result.result === 3 ? 1 : 0 as number)).reduce((a, b) => a + b) : 0
    }

    const getGamesLost = (resultsArr: GameResult[]) => {
        return resultsArr ? resultsArr.map((result) => (result.result === 0 ? 1 : 0 as number)).reduce((a, b) => a + b) : 0
    }

    const getGoalsFor = (resultsArr: GameResult[]) => {
        return resultsArr ? resultsArr.map((result) => (result.gm)).reduce((a, b) => a + b) : 0
    }

    const getGoalsAgainst = (resultsArr: GameResult[]) => {
        return resultsArr ? resultsArr.map((result) => (result.ga)).reduce((a, b) => a + b) : 0
    }

    const getGoalDiff = (resultsArr: GameResult[]) => {
        return resultsArr ? resultsArr.map((result) => (result.gd)).reduce((a, b) => a + b) : 0
    }

    const getPoints = (resultsArr: GameResult[]) => {
        return resultsArr ? resultsArr.map((result) => (result.result)).reduce((a, b) => a + b) : 0
    }

    currentGroupTeams
        .sort((a, b) => getGoalDiff(b.results) - getGoalDiff(a.results))
        .sort((a, b) => getPoints(b.results) - getPoints(a.results))

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
                                    {games && currentGroupGames.map((game, i) => (
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
                                    <div style={{ display: 'flex' }}>
                                        <s.TextResults>position</s.TextResults>
                                        <s.TextResults style={{ marginLeft: '72px' }}>team</s.TextResults>
                                        <s.TextResults style={{ marginLeft: '140px' }}>won</s.TextResults>
                                        <s.TextResults style={{ marginLeft: '40px' }}>lost</s.TextResults>
                                        <s.TextResults style={{ marginLeft: '40px' }}>goals for</s.TextResults>
                                        <s.TextResults style={{ marginLeft: '40px' }}>goals against</s.TextResults>
                                        <s.TextResults style={{ marginLeft: '40px' }}>goal difference</s.TextResults>
                                        <s.TextResults style={{ marginLeft: '130px' }}>points</s.TextResults>
                                    </div>
                                    <s.HeadingLine />
                                    {teams && currentGroupTeams.map((team, i) => (
                                        <TablesComp
                                            key={i}
                                            position={i + 1}
                                            flagUrl={team.flagUrl}
                                            team={adjustTeamName(team.name)}
                                            gamesWon={getGamesWon(team.results)}
                                            gamesLost={getGamesLost(team.results)}
                                            goalsFor={getGoalsFor(team.results)}
                                            goalsAgainst={getGoalsAgainst(team.results)}
                                            goalDiff={getGoalDiff(team.results)}
                                            points={getPoints(team.results)}
                                        />
                                    ))
                                    }
                                    <s.TableExplanation>Countries of Rank 1-2 will advance to knockout stage</s.TableExplanation>
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