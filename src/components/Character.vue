<script setup lang="ts">
const props = defineProps(["charData"]);
const { name } = props.charData;
</script>

<template>
    <article class="text-white bg-neutral-800 p-4 rounded-lg max-h-[57px]">
        <h3p> {{ name }}</h3p>
    </article>
</template>
