import { Greet } from "./greet";
import useGithubUser from "./useGithubUser";

export const GithubUser = ({ username, beginSearch, deleteUser }) => {
    const {data, error} = useGithubUser(username, beginSearch, deleteUser);

    return (
        <div>
            <div>
                <Greet name={data.login} />
                <h2>Here is your information</h2>
            </div>
            <ul>
                {!!data?.name && <li><b>Name:</b> {data?.name}</li>}
                {!!data?.login && <li><b>Username:</b> {data?.login}</li>}
                {!!data?.id && <li><b>User id</b>: {data?.id}</li>}
                {!!data?.html_url && <li><a href={data?.html_url} target='_blank' rel='noreferrer'>Github Profile</a></li>}
                {!!data?.type && <li><b>Type:</b> {data?.type}</li>}
                {!!data?.twitter_username && <li><b>Twitter:</b> {data?.twitter_username}</li>}
                {!!data?.company && <li><b>Company:</b> {data?.company}</li>}
                {!!data?.location && <li><b>Location:</b> {data?.location}</li>}
                {!!data?.bio && <li><b>Bio:</b> {data?.bio}</li>}
                {!!data?.public_repos && <li><b>Public Repositories:</b> {data?.public_repos}</li>}
                {!!data?.email && <li><b>Email:</b> {data?.email}</li>}
                {!!data?.hireable && <li><b>Hireable:</b> {data?.hireable && 'Yes'}</li>}
                {!!data?.followers && <li><b>Followers:</b> {data?.followers}</li>}
                {!!data?.following && <li><b>Following:</b> {data?.following}</li>}
                {!!data?.created_at && <li><b>Account Created at:</b> {data?.created_at}</li>}
                {!!data?.updated_at && <li><b>Last Acccount Update at:</b> {data?.updated_at}</li>}
            </ul>
        </div>
    );
}