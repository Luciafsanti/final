import { useEffect, useState } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch("http://localhost:3000/usuarios");
            const data = await response.json();
            console.log('Data received from backend:', data);
            setUsers(data);
            setLoading(false);

        };

        fetchData();
        return { users, loading };
    }, []);



}


export default useUsers;


