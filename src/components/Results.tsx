import { useState } from "react";
import { groupsDropdown } from "../helpers/Dropdown";
import { adjustTeamName } from "../helpers/GroupGames";
import { useGetGames, useGetTeamsAlph } from "../hooks/api/useApi";
import { GameResult } from "../models/api/APIGroups";
import Footer from "./footer/Footer"
import GamesComp from "./gamesComp/GamesComp";
import TablesComp from "./gamesComp/TablesComp";
import Header from "./header/Header"
import PlayoffGameComp from "./playoffGameComp/PlayoffGameComp";
import * as s from "./Results.styles";

const Results = () => {
    const groupsArr = groupsDropdown.slice(1)
    const [clickedGroup, setClickedGroup] = useState('A')
    const resultChoices = { results: 'results', table: 'table' }
    const [clickedResult, setClickedResult] = useState(resultChoices.results)
    const stageChoices = { group: 'group', knockOut: 'knock-out' }
    const [clickedStage, setClickedStage] = useState(stageChoices.knockOut)

    const { data: teams } = useGetTeamsAlph()
    const currentGroupTeams = teams.filter(team => team.group === clickedGroup)

    const { data: games } = useGetGames()
    const currentGroupGames = games.filter(game => game.group === clickedGroup)

    const getGamesWon = (resultsArr: GameResult[]) => {
        return resultsArr ? resultsArr.map((result) => (result.result === 3 ? 1 : 0 as number)).reduce((a, b) => a + b) : 0
    }

    const getGamesLost = (resultsArr: GameResult[]) => {
        return resultsArr ? resultsArr.map((result) => (result.result === 0 || result.result === 1 ? 1 : 0 as number)).reduce((a, b) => a + b) : 0
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
        .sort((a, b) => getGoalsFor(b.results) - getGoalsFor(a.results))
        .sort((a, b) => getGoalDiff(b.results) - getGoalDiff(a.results))
        .sort((a, b) => getPoints(b.results) - getPoints(a.results))

    return (
        <s.Main>
            <Header />
            <s.Content>
                <s.Heading>Schedule & results</s.Heading>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <s.FrameGroupStage onClick={() => setClickedStage(stageChoices.knockOut)}>
                        <s.FrameInnerGroupStage>
                            <s.TextGroupStage activeButton={clickedStage === stageChoices.knockOut}>Knockout stage - ends june 10th</s.TextGroupStage>
                        </s.FrameInnerGroupStage>
                    </s.FrameGroupStage>
                    <s.FrameGroupStage onClick={() => setClickedStage(stageChoices.group)}>
                        <s.FrameInnerGroupStage>
                            <s.TextGroupStage activeButton={clickedStage === stageChoices.group}>Group stage - ends may 15th</s.TextGroupStage>
                        </s.FrameInnerGroupStage>
                    </s.FrameGroupStage>
                </div>
                {clickedStage === stageChoices.group && <s.FrameMain>
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
                </s.FrameMain>}
                {clickedStage === stageChoices.knockOut && <s.FrameMain>
                    <s.FrameInnerMain>
                        <s.FrameResults>
                            <s.FrameInnerResults>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <s.TextResults>qual-round</s.TextResults>
                                    <s.TextResults>quarter-finals</s.TextResults>
                                    <s.TextResults>semi-finals</s.TextResults>
                                    <s.TextResults>finals</s.TextResults>
                                    <s.TextResults>semi-finals</s.TextResults>
                                    <s.TextResults>quarter-finals</s.TextResults>
                                    <s.TextResults>qual-round</s.TextResults>
                                </div>
                                <s.HeadingLine />
                                <s.Playoff3Teams>
                                    <PlayoffGameComp team1FlagUrl='flags/nigeria.png' team2FlagUrl='flags/south korea.png' team1='NIG' team2='KOR' score='6-10' occation={""} background={""} />
                                    <PlayoffGameComp team1FlagUrl='flags/italy.png' team2FlagUrl='flags/south korea.png' team1='ITA' team2='KOR' score='TBD' occation={"3rd pl"} background={""} />
                                    <PlayoffGameComp team1FlagUrl='flags/jamaica.png' team2FlagUrl='flags/cameroon.png' team1='JAM' team2='CAM' score='7-10' occation={""} background={""} />
                                </s.Playoff3Teams>
                                <s.Playoff4Teams>
                                    <PlayoffGameComp team1FlagUrl='flags/egypt.png' team2FlagUrl='flags/portugal.png' team1='EGY' team2='POR' score='0-10' occation={""} background={""} />
                                    <PlayoffGameComp team1FlagUrl='flags/south korea.png' team2FlagUrl='flags/france.png' team1='KOR' team2='FRA' score='6-10' occation={""} background={""} />
                                    <PlayoffGameComp team1FlagUrl='flags/cameroon.png' team2FlagUrl='flags/italy.png' team1='CAM' team2='ITA' score='10-6' occation={""} background={""} />
                                    <PlayoffGameComp team1FlagUrl='flags/italy.png' team2FlagUrl='flags/south africa.png' team1='ITA' team2='SA' score='10-5' occation={""} background={""} />
                                </s.Playoff4Teams>
                                <s.Playoff3Teams>
                                    <PlayoffGameComp team1FlagUrl='flags/portugal.png' team2FlagUrl='flags/france.png' team1='POR' team2='FRA' score='3-10' occation={""} background={""} />
                                    <PlayoffGameComp team1FlagUrl='flags/cameroon.png' team2FlagUrl='flags/france.png' team1='CAM' team2='FRA' score='TBD' occation={"Final"} background={"black"} />
                                    <PlayoffGameComp team1FlagUrl='flags/argentina.png' team2FlagUrl='flags/italy.png' team1='ARG' team2='ITA' score='5-10' occation={""} background={""} />
                                </s.Playoff3Teams>
                            </s.FrameInnerResults>
                        </s.FrameResults>
                    </s.FrameInnerMain>
                </s.FrameMain>}
            </s.Content>
            <Footer />
        </s.Main>
    )
}

export default Results