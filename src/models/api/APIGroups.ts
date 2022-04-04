export interface APITeam {
    flagUrl: string,
    group: string,
    name: string,
    players: {
        player1: {
            cardUrl: string,
            name: string,
        },
        player2: {
            cardUrl: string,
            name: string,
        },
    }
}