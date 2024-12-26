<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const emits = defineEmits(["newPage"]);
const props = defineProps<{ next: string | null; currentPage: number }>();

const isMobile = () => window.innerWidth <= 768;

const scrollToTop = () => {
    if (isMobile()) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

const prevPage = () => {
    if (props.currentPage > 1) {
        emits("newPage", props.currentPage - 1);
        scrollToTop();
    }
};

const nextPage = () => {
    if (props.next) {
        emits("newPage", props.currentPage + 1);
        scrollToTop();
    }
};
</script>

<template>
    <div class="flex justify-between mt-12">
        <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-4 py-2 bg-neutral-800 text-white rounded-full disabled:opacity-50 hover:bg-neutral-700"
        >
            Anterior
        </button>
        <span class="px-4 py-2 mx-2 text-xs">{{ currentPage }}</span>
        <button
            @click="nextPage"
            :disabled="!next"
            class="px-4 py-2 bg-neutral-800 text-white rounded-full disabled:opacity-50 hover:bg-neutral-700"
        >
            Siguiente
        </button>
    </div>
</template>

<style scoped>
button:disabled {
    cursor: not-allowed;
}
</style>
