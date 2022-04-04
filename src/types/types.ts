import { APITeam } from "../models/api/APIGroups";

export type GroupInfo = [
    groupName: string,
    teamInfo: APITeam[],
    totalGames: number
]