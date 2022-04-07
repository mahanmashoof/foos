export const threeTeamsGroup = [
    [0, 1],
    [1, 2],
    [2, 0],
]

export const fourTeamsGroup = [
    [0, 1],
    [2, 3],
    [1, 2],
    [3, 0],
    [0, 2],
    [1, 3],
]

export const fiveTeamsGroup = [
    [0, 1],
    [2, 3],
    [4, 0],
    [1, 2],
    [3, 4],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 0],
    [4, 1],
]

export const adjustTeamName = (team: string) => {
    if (team === 'usa') {
        return team.toUpperCase()
    } else {
        return team[0].toUpperCase() + team.slice(1)
    }
}