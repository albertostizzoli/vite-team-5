<template>
    <section class="container">
        <h2>Type</h2>
        <ul>
            <li v-for=" tipo in store.types">{{ tipo.name }}
            </li>
        </ul>
    </section>
</template>

<script>
import { store } from '../store.js';
export default {

    name: "AppTypes",
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped></style>