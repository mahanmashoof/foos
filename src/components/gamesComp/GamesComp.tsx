import * as s from './GamesComp.styles'

interface GameResult {
    homeFlagUrl: string,
    homeTeam: string,
    homeScore: number,
    awayScore: number,
    awayTeam: string,
    awayFlagUrl: string,
}

const GamesComp = (props: GameResult) => {
    const adjustTeamName = (team: string) => {
        if (team === 'usa') {
            return team.toUpperCase()
        } else {
            return team[0].toUpperCase() + team.slice(1)
        }
    }

    return (
        <s.Main>
            <div style={{ display: 'flex', alignItems: 'center', width: '30%', justifyContent: 'start' }}>
                <s.Flag alt='...' src={props.homeFlagUrl} />
                <s.Text>{adjustTeamName(props.homeTeam)}</s.Text>
            </div>
            <div>
                <s.Text>{props.homeScore} - {props.awayScore}</s.Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '30%', justifyContent: 'end' }}>
                <s.Text>{adjustTeamName(props.awayTeam)}</s.Text>
                <s.Flag alt='...' src={props.awayFlagUrl} />
            </div>
        </s.Main>
    )
}

export default GamesComp