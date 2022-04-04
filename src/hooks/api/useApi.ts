import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import firebase from "../../firebase";
import { APITeam } from "../../models/api/APIGroups";

const allTeams = query(
    collection(firebase, 'teams'),
    orderBy('name'),
)

export const useGetTeams = () => {
    const [data, setData] = useState<APITeam[]>([])
    useEffect(() => {
        onSnapshot(allTeams, (querySnapshot) => {
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

