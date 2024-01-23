<template>
    <section class="container">
        <h2>items</h2>
        <div>
            <ul>
                <li v-for=" item in store.items">{{ item.name }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { store } from '../store.js';

export default {
    name: "AppItems",
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