<template>
    <section
        class="bg-neutral-900 min-h-screen overflow-x-hidden font-sans relative z-0"
    >
        <nav
            class="flex justify-center items-center mx-auto p-4 fixed top-0 bg-neutral-900 w-screen z-10"
        >
            <div
                class="max-w-screen-md w-full flex justify-between items-center"
            >
                <div
                    class="flex cursor-pointer"
                    @click="$router.push({ name: 'home' })"
                >
                    <img
                        class="w-[60px]"
                        src="../assets/star-wars-logo.svg"
                        alt="logo star wars"
                        width="20"
                    />
                </div>
                <ul
                    class="list-none gap-4 flex flex-row justify-end text-s w-full"
                >
                    <li
                        class="cursor-pointer text-neutral-400 hover:text-neutral-100"
                    >
                        <RouterLink
                            :to="'/people'"
                            class="cursor-pointer text-neutral-400 hover:text-neutral-100"
                            >Personas
                        </RouterLink>
                    </li>
                    <li
                        class="cursor-pointer text-neutral-400 hover:text-neutral-100"
                    >
                        <RouterLink
                            :to="'/planets'"
                            class="cursor-pointer text-neutral-400 hover:text-neutral-100"
                            >Planetas
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </nav>

        <section class="max-w-screen-md mx-auto my-8 p-4">
            <slot />
        </section>
    </section>
</template>

<script setup lang="ts">
// Your script content goes here
</script>
