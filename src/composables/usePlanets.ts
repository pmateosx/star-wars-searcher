import { useApi } from "./useApi";

export function usePlanets() {
    const { data, fetchData, error, loading } = useApi("planets");

    const fetchPlanetsPage = async (page: number = 1, search: string = "", format: string = "") => {
        const params: any = { page };
        if (search) {
            params.search = search;
        }
        if (format) {
            params.format = format;
        }
        await fetchData(params);
    };

    return { data, fetchPlanetsPage, error, loading };
}