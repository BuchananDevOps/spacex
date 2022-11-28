import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useRocketId = (id: string) => {
    const { data, error } = useSWR(
        `https://api.spacexdata.com/v4/rockets/${id}`,
        fetcher
    );
    
    return {
        rocket: data,
        isLoading: !error && !data,
        isError: error,
    };
    }
