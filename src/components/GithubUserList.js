import { useRef, useState } from "react"
import { GithubUser } from "./GithubUser";

export const GithubUserList = () => {
    const [userList, setUserList] = useState([]);
    const [beginSearch, setBeginSearch] = useState(false);
    const [searchUser, setSearchUser] = useState('');

    const searchInput = useRef(null);
    
    const handleInput = (event) => {
        if (beginSearch)
            setBeginSearch(false);
        setSearchUser(event.target.value);
        
    };
    
    const handleSearch = () => {
        addUser(searchUser);

        searchInput.current.value = '';
    };
    

    const addUser = (user) => {
        setBeginSearch(true);
        if (user && !userList.includes(user)) 
            setUserList(prev => [...prev,  user]);
    
        setSearchUser('');
    };

    const deleteUser = (username) => setUserList(prev => prev.filter(user => user !== username));
    const deleteAllUsers = () => setUserList([]);


    return (
        <div>
            <h1>Github Account Displayer</h1>
            <input ref={searchInput} name='username' id='username' value={searchUser} onChange={handleInput} autoComplete='off'/>
            <button onClick={handleSearch}>Search</button>
            <button onClick={deleteAllUsers}>Clear Users</button>
          <div>
            {
                beginSearch ?
                    userList.map(user => 
                        <GithubUser 
                            key={crypto.randomUUID()} 
                            beginSearch={beginSearch} 
                            username={user} 
                            deleteUser={deleteUser}
                        />)
                    : <h2>Writing...</h2>
            }
          </div>
        </div>
    );
}