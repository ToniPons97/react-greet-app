import { useState } from "react"
import { GithubUser } from "./GithubUser";

export const GithubUserList = () => {
    const [userList, setUserList] = useState([]);
    const [beginSearch, setBeginSearch] = useState(false);
    const [searchUser, setSearchUser] = useState('');

    const searchInput = document.querySelector('#username');
    
    const handleInput = (event) => {
        if (beginSearch)
            setBeginSearch(false);
        setSearchUser(event.target.value)
        
    };
    
    const handleSearch = () => {
        addUser(searchUser);

        searchInput.value = '';
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
            <input name='username' id='username' value={searchUser} onChange={handleInput} autoComplete='off'/>
            <button onClick={handleSearch}>Search</button>
            <button onClick={deleteAllUsers}>Clear Users</button>
          <div>
            {   userList.length === 0 ? <h3>No users</h3> 
                    : userList.length === 1 ? <h3>{userList.length} user</h3> :
                        <h3>{userList.length} users</h3> 
            }
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