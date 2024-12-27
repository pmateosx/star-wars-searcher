<script setup lang="ts">
const props = defineProps(["planetData", "wookies"]);
const { name, climate, gravity, terrain, residents } = props.planetData;

const getRandomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
};

const checkWookiee = () => {
    if (!props.wookies) {
        return false;
    } else {
        return props.wookies.people?.some((person: string) => {
            return residents.includes(person);
        });
    }
};
const planetsImages = [
    "https://res.cloudinary.com/dfbloaduq/image/upload/v1735259265/planet-1_rqrmni.webp",
    "https://res.cloudinary.com/dfbloaduq/image/upload/v1735259264/planet-2_z7oezo.webp",
    "https://res.cloudinary.com/dfbloaduq/image/upload/v1735259265/planet-3_sm18n0.webp",
    "https://res.cloudinary.com/dfbloaduq/image/upload/v1735259253/planet-4_f8brwl.webp",
]
</script>

<template>
    <article class="text-white bg-neutral-800 p-4 rounded-lg">
        <div
            class="flex justify-center items-center bg-neutral-700 p-2 rounded-lg"
        >
            <img
                class="object-contain h-[200px] w-full rounded-lg"
                :src="planetsImages[getRandomNumber() - 1]"
                alt=""
            />
        </div>
        <p class="mt-2">{{ name }}</p>
        <p class="mt-2 text-neutral-400 text-xs">
            {{
                `${climate} | ${terrain} | ${gravity}`
            }}
        </p>
        <p v-if="checkWookiee()" class="mt-2 text-xs text-green-400">
            ¡Wookiee en el planeta!
        </p>
    </article>
</template>
