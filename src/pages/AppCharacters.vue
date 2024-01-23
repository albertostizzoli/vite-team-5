<template>
    <section class="container">
        <h2>Character</h2>
        <ul>
            <li v-for=" character in store.characters" :key="character.id">
                <router-link :to="{ name: 'show-character', params: { id: character.id } }">
                    {{ character.name }}
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import { store } from '../store.js';
import axios from "axios";

export default {
    name: "AppCharacters",
    data() {
        return {
            store,
        }
    },
    methods: {
        getAllChar() {
            axios.get(`${this.store.apiUrl}/characters`).then((res) => {
                this.store.characters = res.data.results.data;
                console.log(`show dei caratteru`, this.store.characters);
            })
        }
    },
    mounted() {
        this.getAllChar();
    }
}
</script>

<style lang="scss" scoped></style>