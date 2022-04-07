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
    return (
        <s.Main>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <s.Flag alt='...' src={props.homeFlagUrl} />
                <s.Text>{props.homeTeam}</s.Text>
            </div>
            <div>
                <s.Text>{props.homeScore} - {props.awayScore}</s.Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <s.Text>{props.awayTeam}</s.Text>
                <s.Flag alt='...' src={props.awayFlagUrl} />
            </div>
        </s.Main>
    )
}

export default GamesComp