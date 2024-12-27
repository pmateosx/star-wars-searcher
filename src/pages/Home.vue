<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="backgroun-stars w-screen h-screen"></div>
    <section
        class="flex justify-center items-center flex-col w-full text-white h-[80vh] z-10"
    >
        <div
            class="principal-group h-full w-full flex flex-col justify-center items-center"
        >
            <img
                src="../assets/star-wars-logo.svg"
                class="w-[400px] mx-auto filter drop-shadow-lg"
                alt="Star Wars logo"
            />
        </div>

        <article class="mt-8 text-s">
            <ul class="list-none gap-4 flex flex-col w-full justify-start text-center">
                <li class="">Examina todos los personajes de Star Wars para planificar tu próximo ataque. Busca los planetas donde atacar al impero y dónde localizar a tus amigos wookiees.</li>
            </ul>
        </article>

        <RouterLink
            :to="'/people'"
            class="mt-8 text-sm w-full border-neutral-600 border bg-neutral-700 text-white text-center py-1 px-4 rounded-full max-w-[300px] hover:bg-neutral-800"
            >Comenzar
        </RouterLink>
    </section>
</template>

<style scoped>
.principal-group {
    background-image: url("../assets/planets/planet-2.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.backgroun-stars {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url("../assets/bg-stars.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-sizing: border-box;
    box-shadow: inset 0 0 70px 50px black;
    filter: grayscale(100%);
}
</style>
