import { useState } from "react"
import { GithubUser } from "./GithubUser";
import useGithubUser from "./useGithubUser";

export const GithubUserList = () => {
    const [userList, setUserList] = useState([]);
    const [beginSearch, setBeginSearch] = useState(false);
    const [searchUser, setSearchUser] = useState('');

    const searchInput = document.querySelector('#username');

    const {data, error, onFetch} = useGithubUser(searchUser, beginSearch, deleteUser);

    
    const handleInput = (event) => {
        if (beginSearch)
            setBeginSearch(false);
        setSearchUser(event.target.value)
        
    };
    
    const handleSearch = () => {
        addUser(searchUser);

        if (searchInput !== null)
            searchInput.value = '';
        onFetch();
    };
    

    const addUser = (user) => {
        setBeginSearch(true);
        if (user && !userList.includes(user)) 
            setUserList(prev => [...prev,  user]);
    
        setSearchUser('');
    };

    function deleteUser(username) {setUserList(prev => prev.filter(user => user !== username));}
    const deleteAllUsers = () => setUserList([]);

    const consoleLogUsersArray = () => console.log(userList);

    return (
        <div>
            <h1>Github Account Displayer</h1>
            <input name='username' id='username' value={searchUser} onChange={handleInput} autoComplete='off'/>
            <button onClick={handleSearch}>Search</button>
            <button onClick={deleteAllUsers}>Clear Users</button>
            <button onClick={consoleLogUsersArray}>Print search history</button>
          <div>

            {
                beginSearch ?
                <GithubUser 
                    key={crypto.randomUUID()} 
                    beginSearch={beginSearch} 
                    data={data} 
                    deleteUser={deleteUser}
                    error={error}
                />
                : <h2>Writing...</h2>
            }
          </div>
        </div>
    );
}