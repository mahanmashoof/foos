import * as s from './TeamComp.styles'
import TeamName from './TeamName'

interface Team {
    country: string,
    player1: string,
    player2: string,
}
const TeamComp = (props: Team) => {

    return (
        <s.Main>
            <TeamName text={props.country} />
            <s.PlyerCardsContainer>
                <s.PlayerCardFrame>
                    <s.PlayerCrad src={props.player1} alt="..." />
                </s.PlayerCardFrame>
                <s.PlayerCardFrame>
                    <s.PlayerCrad src={props.player2} alt="..." />
                </s.PlayerCardFrame>
            </s.PlyerCardsContainer>
        </s.Main>
    )
}

export default TeamComp