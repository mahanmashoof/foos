export interface GameResult {
    ga: number,
    gd: number,
    gm: number,
    opponent: string,
    result: number
}

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
    results: GameResult[]
}

export interface APIGame {
    group: string,
    status: number,
    team1: {
        flagUrl: string,
        goals: number,
        name: string,
    },
    team2: {
        flagUrl: string,
        goals: number,
        name: string,
    },
}