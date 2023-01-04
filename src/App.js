import { useState } from "react";
import { GithubUser } from "./components/GithubUser";

function App() {
  const [searchUser, setSearchUser] = useState('');
  const [beginSearch, setBeginSearch] = useState(false)

  const handleInput = (event) => {
    if (beginSearch)
      setBeginSearch(prev => false);
    setSearchUser(prev => event.target.value)

  };
  const handleSearch = () => setBeginSearch(prev => true);

  return (
    <div>
      <input name='username' id='username' value={searchUser} onChange={handleInput}/>
      <button onClick={handleSearch}>Search</button>
      {
        beginSearch &&
        <GithubUser username={searchUser} />
      }
    </div>
  );
}

export default App;
