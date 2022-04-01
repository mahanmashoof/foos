import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import firebase from "../../firebase";

const allTeams = query(
    collection(firebase, 'teams'),
    orderBy('name'),
)

export const useGetTeams = () => {
    const [data, setData] = useState<any[]>()
    useEffect(() => {
        onSnapshot(allTeams, (querySnapshot) => {
            const cities: any[] = [];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data());
            });
            setData(cities)
        })
    }, [])
    return { data }
}

