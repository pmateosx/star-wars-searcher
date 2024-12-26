import { useApi } from "./useApi";

export function usePeople() {
    const { data, fetchData, error, loading } = useApi("people");

    const fetchPeoplePage = (page: number = 1, search: string = "") => {
        const params: any = { page };
        if (search) {
            params.search = search;
        }
        fetchData(params);
    };

    return { data, fetchPeoplePage, error, loading };
}