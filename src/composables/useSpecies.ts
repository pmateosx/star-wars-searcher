import axios from "axios";
import { API_URL } from "../constants/api";

export function useSpecies() {
    axios.get(`${API_URL}/species/3`).then((response) => response.data);
}
