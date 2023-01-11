import useSWR, { mutate } from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export const useGithubUser = (username) => {
    const url = `https://api.github.com/users/${username}`;
    const { data, error } = useSWR(() => username ? url : null, fetcher);

    return {
        user: data,
        error,
        loading: !data && !error,
        onRefresh: () => mutate()
    }
}


export default useGithubUser; 