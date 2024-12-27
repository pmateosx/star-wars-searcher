<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import Planet from "../components/Planet.vue";
import PageControl from "../components/PageControl.vue";
import SearchBar from "../components/SearchBar.vue";
import { usePlanets } from "../composables/usePlanets";
import axios from "axios";
import { API_URL } from "../constants/api";

const { data, fetchPlanetsPage, error, loading } = usePlanets();
const currentPage = ref(1);
const searchQuery = ref("");
const format = ref("");

const wookiees = reactive({ data: {} });
const getWookiees = () => {
    axios
        .get(`${API_URL}/species/3`)
        .then((response) => (wookiees.data = response.data))
        .catch((error) => console.error(error));
};

onMounted(() => {
    fetchPlanetsPage(currentPage.value);
    getWookiees();
});

const handleNewPage = (page: number) => {
    currentPage.value = page;
    fetchPlanetsPage(page, searchQuery.value, format.value);
};

const handleSearch = ({
    term,
    format: newFormat,
}: {
    term: string;
    format?: string;
}) => {
    searchQuery.value = term;
    format.value = newFormat || "";
    currentPage.value = 1; // Reset to first page on new search
    fetchPlanetsPage(currentPage.value, searchQuery.value, format.value);
};
</script>

<template>
    <section class="text-white py-8">
        <article class="">
            <h3 class="md:text-left text-3xl sm:text-4xl">
                Busca el planeta al que atacar
            </h3>
            <p
                class="md:text-left text-slate-300 text-base font-thin leading-normal tracking-normal mt-2 mb-4"
            >
                En esta sección podras encontrar todos los planetas de la saga
                Star Wars
            </p>
        </article>

        <SearchBar @search="handleSearch" />

        <div
            class="bg-neutral-800 p-4 rounded-lg mt-12 min-h-[350px] flex justify-center items-center"
            v-if="data.results.length === 0 && !loading"
        >
            <p class="text-xs">
                Vaya, no hemos encontrado lo que andabas buscando...
            </p>
        </div>
        <div
            class="bg-neutral-800 p-4 rounded-lg mt-12 min-h-[350px] flex justify-center items-center"
            v-if="loading"
        >
            <p class="text-xs">Cargando...</p>
        </div>

        <section
            v-if="!loading"
            class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 min-h-[350px]"
        >
            <Planet
                v-for="planet in data.results"
                :key="planet.name"
                :planetData="planet"
                :wookies="wookiees.data"
            />
        </section>
        <PageControl
            :next="data.next"
            :currentPage="currentPage"
            @newPage="handleNewPage"
        />
        <p v-if="error">{{ error }}</p>
    </section>
</template>
