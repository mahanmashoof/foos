import * as s from './PlayoffGameComp.styles'

interface Props {
    team1FlagUrl: string,
    team2FlagUrl: string,
    team1: string,
    team2: string,
    score: string,
}

const PlayoffGameComp = (props: Props) => {
    return(
        <s.Main>
            <div>
                <s.Flag alt='' src={props.team1FlagUrl}/>
                <s.TeamName>{props.team1}</s.TeamName>
            </div>
            <s.Score>{props.score}</s.Score>
            <div>
                <s.Flag alt='' src={props.team2FlagUrl}/>
                <s.TeamName>{props.team2}</s.TeamName>
            </div>
        </s.Main>
    )
}

export default PlayoffGameComp