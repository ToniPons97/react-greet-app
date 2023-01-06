import { useState } from "react";

export const useGithubUser = (username, beginSearch, deleteUser) => {
    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    
    const fetchGithubUser = async () => {        
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
                setError(new Error());
            }
        } catch(e) {
            setError(e);
        }
    }
    
    return { data, error, onFetch: fetchGithubUser };
}

export default useGithubUser;