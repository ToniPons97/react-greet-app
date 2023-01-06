import { useEffect, useState } from "react";

export const useGithubUser = (username, beginSearch, deleteUser) => {
    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    
    const fetchGithubUser = async (username) => {        
        if (!username && !beginSearch) 
            return;
    
        try {
            const url = `https://api.github.com/users/${username}`;
            const response = await fetch(url);
            
            if (response.status === 200) {
                const json = await response.json();
                setData(json);                
            } else if (response.status === 404) {
                deleteUser(username);
                setError(true);
            }
        } catch(e) {
            setError(e);
        }
    }

    useEffect(() => {
        fetchGithubUser(username, beginSearch, deleteUser);
    }, [username]);
    
    return { data, error };
}

export default useGithubUser;