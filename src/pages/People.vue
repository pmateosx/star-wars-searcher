<script setup lang="ts">
import { ref, onMounted } from "vue";
import Character from "../components/Character.vue";
import PageControl from "../components/PageControl.vue";
import SearchBar from "../components/SearchBar.vue";
import { usePeople } from "../composables/usePeople.ts";

const { data, fetchPeoplePage, loading } = usePeople();
const currentPage = ref(1);
const searchQuery = ref("");

onMounted(() => {
    fetchPeople();
});

const fetchPeople = async (
    page = currentPage.value,
    query = searchQuery.value
) => {
    fetchPeoplePage(page, query);
};

const handleNewPage = (page: number) => {
    currentPage.value = page;
    fetchPeople(page, searchQuery.value);
};

const handleSearch = (query: { term: string }) => {
    searchQuery.value = query.term;
    currentPage.value = 1; // Reset to first page on new search
    fetchPeople(currentPage.value, searchQuery.value);
};
</script>

<template>
    <section class="text-white py-8">
        <article class="">
            <h3 class="md:text-left text-3xl sm:text-4xl">
                Busca tu personaje
            </h3>
            <p
                class="md:text-left text-slate-300 text-base font-thin leading-normal tracking-normal mt-2 mb-4"
            >
                En esta sección podras encontrar todos los personajes de la saga
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
            v-if="data.results.length > 0 && !loading"
            class="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[350px] mt-12"
        >
            <Character
                v-for="character in data.results"
                :key="character.name"
                :charData="character"
            />
        </section>
        <PageControl
            :next="data.next"
            :currentPage="currentPage"
            @newPage="handleNewPage"
        />
    </section>
</template>
