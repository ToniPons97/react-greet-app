import { Greet } from "./greet";
import useGithubUser from "./useGithubUser";

export const GithubUser = ({ username }) => {
    const {user, error, loading, onRefresh} = useGithubUser(username);
    
    const handleRefresh = () => onRefresh();

    return (
        <div>
            <div>
                {
                    loading ? <h2>Loading...</h2> 
                        : error ? <h2>Error: Something went wrong on our side.</h2>
                        :
                        <>
                            <Greet name={user.login} />
                            <button onClick={handleRefresh}>Refresh</button>
                            <h2>Here is your information</h2>
                        </>
                }
            </div>
            <ul>
                {!!user?.name && <li><b>Name:</b> {user?.name}</li>}
                {!!user?.login && <li><b>Username:</b> {user?.login}</li>}
                {!!user?.id && <li><b>User id</b>: {user?.id}</li>}
                {!!user?.html_url && <li><a href={user?.html_url} target='_blank' rel='noreferrer'>Github Profile</a></li>}
                {!!user?.type && <li><b>Type:</b> {user?.type}</li>}
                {!!user?.twitter_username && <li><b>Twitter:</b> {user?.twitter_username}</li>}
                {!!user?.company && <li><b>Company:</b> {user?.company}</li>}
                {!!user?.location && <li><b>Location:</b> {user?.location}</li>}
                {!!user?.bio && <li><b>Bio:</b> {user?.bio}</li>}
                {!!user?.public_repos && <li><b>Public Repositories:</b> {user?.public_repos}</li>}
                {!!user?.email && <li><b>Email:</b> {user?.email}</li>}
                {!!user?.hireable && <li><b>Hireable:</b> {user?.hireable && 'Yes'}</li>}
                {!!user?.followers && <li><b>Followers:</b> {user?.followers}</li>}
                {!!user?.following && <li><b>Following:</b> {user?.following}</li>}
                {!!user?.created_at && <li><b>Account Created at:</b> {user?.created_at}</li>}
                {!!user?.updated_at && <li><b>Last Acccount Update at:</b> {user?.updated_at}</li>}
            </ul>
        </div>
    );
}