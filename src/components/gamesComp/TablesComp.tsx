import { adjustTeamName } from '../../helpers/GroupGames'
import * as s from './TablesComp.styles'

interface TeamStats {
    homeFlagUrl: string,
    team: string,
    gamesWon: number,
    gamesLost: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDiff: number,
    points: number,
}

const TablesComp = () => {

    return (
        <s.Main>
            <s.PosText style={{ width: '108px' }}>#1</s.PosText>
            <div style={{ display: 'flex', alignItems: 'center', width: '254px', justifyContent: 'start' }}>
                <s.Flag alt='...' src='flags/brazil.png' />
                <s.Text style={{ marginLeft: '32px' }}>{adjustTeamName('South x')}</s.Text>
            </div>
            <s.Text style={{ width: '78px' }}>3</s.Text>
            <s.Text style={{ width: '110px' }}>1</s.Text>
            <s.Text style={{ width: '150px' }}>36</s.Text>
            <s.Text style={{ width: '183px' }}>16</s.Text>
            <s.Text style={{ width: '230px' }}>20</s.Text>
            <s.Text style={{ width: '20px', textAlign: 'right' }}>19</s.Text>
        </s.Main>
    )
}

export default TablesComp