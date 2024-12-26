import { reactive, ref } from "vue";
import axios, { AxiosError } from "axios";
import { API_URL } from "../constants/api";
import { translateWookieeData } from "../utils/wookieTranslator";

function transformToJson(wookieeString: string): object {
    console.log("WOOOKIIIIEEE STRING ",wookieeString);
    
    try {
        // Reemplazar "whhuanan" por null
        const replacedString = wookieeString.replace(/whhuanan/g, "null");

        // Intentar parsear el string JSON
        return JSON.parse(replacedString);
    } catch (error) {
        console.log("Error parsing JSON", error);
        
        // Si falla, devolver un objeto vacío
        return  { count: 0, next: null, previous: null, results: [] };
    }
}

export function useApi(endpoint: string) {
    const data = reactive({
        results: [],
        count: 0,
        next: null,
        previous: null,
        details: null,
    });
    const error = ref();
    const loading = ref(false);

    const fetchData = async (params: object = {}) => {
        loading.value = true;
        try {
            const response = await axios.get(`${API_URL}/${endpoint}`, {
                params,
            });
            if (response.data.results) {
                data.results = response.data.results;
                data.count = response.data.count;
                data.next = response.data.next;
                data.previous = response.data.previous;
            } else {
                console.log(params);
                if (params && params.format === "wookiee") {
                    const objtData = typeof response.data === 'string' ?  transformToJson(response.data) : response.data

                    const translatedData = translateWookieeData(objtData);
                    console.log("TRANSLATED finallll", translatedData);

                    data.count = translatedData.count;
                    data.next = translatedData.next;
                    data.previous = translatedData.previous;
                    data.results = translatedData.results;
                }
            }
        } catch (err) {
            error.value = (err as AxiosError).message;
        } finally {
            loading.value = false;
        }
    };

    return { data, fetchData, error, loading };
}
