import * as s from './GamesComp.styles'

const GamesComp = () => {
    return (
        <s.Main>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <s.Flag alt='...' src="flags/argentina.png" />
                <s.Text>team1</s.Text>
            </div>
            <div>
                <s.Text>1 - 2</s.Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <s.Text>team2</s.Text>
                <s.Flag alt='...' src="flags/australia.png" />
            </div>
        </s.Main>
    )
}

export default GamesComp