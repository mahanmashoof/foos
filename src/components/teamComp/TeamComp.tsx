import * as s from './TeamComp.styles'
import TeamName from './TeamName'

const TeamComp = () => {

    return (
        <s.Main>
            <TeamName text={'ARGENTINA'} />
            <s.PlyerCardsContainer>
                <s.PlayerCardFrame>
                    <s.PlayerCrad src="player-cards/tor.png" alt="..." />
                </s.PlayerCardFrame>
                <s.PlayerCardFrame>
                    <s.PlayerCrad src="player-cards/lea.png" alt="..." />
                </s.PlayerCardFrame>
            </s.PlyerCardsContainer>
        </s.Main>
    )
}

export default TeamComp