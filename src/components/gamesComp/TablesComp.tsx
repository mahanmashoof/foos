import { adjustTeamName } from '../../helpers/GroupGames'
import * as s from './TablesComp.styles'

interface TeamStats {
    position: number,
    flagUrl: string,
    team: string,
    gamesWon: number,
    gamesLost: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDiff: number,
    points: number,
}

const TablesComp = (props: TeamStats) => {

    return (
        <s.Main>
            <s.PosText style={{ width: '108px' }}>#{props.position}</s.PosText>
            <div style={{ display: 'flex', alignItems: 'center', width: '254px', justifyContent: 'start' }}>
                <s.Flag alt='...' src={props.flagUrl} />
                <s.Text style={{ marginLeft: '32px' }}>{adjustTeamName(props.team)}</s.Text>
            </div>
            <s.Text style={{ width: '78px' }}>{props.gamesWon}</s.Text>
            <s.Text style={{ width: '110px' }}>{props.gamesLost}</s.Text>
            <s.Text style={{ width: '150px' }}>{props.goalsFor}</s.Text>
            <s.Text style={{ width: '183px' }}>{props.goalsAgainst}</s.Text>
            <s.Text style={{ width: '230px' }}>{props.goalDiff}</s.Text>
            <s.Text style={{ width: '20px', textAlign: 'right' }}>{props.points}</s.Text>
        </s.Main>
    )
}

export default TablesComp