<script setup lang="ts">
import { ref, defineEmits, watch } from "vue";

const emits = defineEmits(["search"]);
const searchTerm = ref("");
const includeWookiee = ref(false);

const emitSearch = () => {
    const params: { term: string, format?: string } = { term: searchTerm.value };
    if (includeWookiee.value) {
        params.format = "wookiee";
    }
    emits("search", params);
};

watch(() => includeWookiee.value, () => emitSearch());

</script>

<template>
    <div class="flex flex-col items-center mt-4">
        <div class="relative w-full mb-4">
            <input
                v-model="searchTerm"
                type="text"
                placeholder="Buscar..."
                @keyup.enter="emitSearch"
                class="w-full px-4 py-2 pr-12 bg-neutral-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            <button
                @click="emitSearch"
                class="absolute right-1 top-1 px-8 py-1 bg-neutral-800 text-white rounded-full text-s hover:bg-neutral-900"
            >
                Buscar
            </button>
        </div>
        <div v-if="$route.path === '/planets'" class="flex items-center cursor-pointer">
            <input
            type="checkbox"
            id="wookiee"
            v-model="includeWookiee"
            class="mr-2 cursor-pointer"
            />
            <label for="wookiee" class="text-white cursor-pointer">Traducir a Wookiee</label>
        </div>
    </div>
</template>