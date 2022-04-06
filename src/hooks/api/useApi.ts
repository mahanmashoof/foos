import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import firebase from "../../firebase";
import { APIGame, APITeam } from "../../models/api/APIGroups";

const allTeamsAlph = query(
    collection(firebase, 'teams'),
    orderBy('name'),
)

const allTeamsGroup = query(
    collection(firebase, 'teams'),
    orderBy('group'),
)

const allGames = query(
    collection(firebase, 'games'),
    orderBy('group'),
)

export const useGetTeamsAlph = () => {
    const [data, setData] = useState<APITeam[]>([])
    useEffect(() => {
        onSnapshot(allTeamsAlph, (querySnapshot) => {
            let allTeams: APITeam[] = []
            querySnapshot.forEach((doc) => {
                const teams = doc.data() as APITeam;
                allTeams.push(teams)
            });
            setData(allTeams)
        })
    }, [])
    return { data }
}

export const useGetTeamsGroup = (groupLetter: string) => {
    const [data, setData] = useState<APITeam[]>([])
    useEffect(() => {
        onSnapshot(allTeamsGroup, (querySnapshot) => {
            let allTeams: APITeam[] = []
            querySnapshot.forEach((doc) => {
                const teams = doc.data() as APITeam;
                if (teams.group === groupLetter) {
                    allTeams.push(teams)
                }
            });
            setData(allTeams)
        })
    }, [groupLetter])
    return { data }
}

export const useGetGames = () => {
    const [data, setData] = useState<APIGame[]>([])
    useEffect(() => {
        onSnapshot(allGames, (querySnapshot) => {
            let allGames: APIGame[] = []
            querySnapshot.forEach((doc) => {
                const games = doc.data() as APIGame;
                allGames.push(games)
            });
            setData(allGames)
        })
    }, [])
    return { data }
}

