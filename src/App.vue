<template>
    <AppHeader />
    <router-view></router-view>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
export default {
    name: 'App',
    components: {
        AppHeader,
    },
    data() {
        return {
            store,

        }
    },
    methods: {
        getAllCharacters() {
            axios.get(this.store.apiUrl + "/characters").then((res) => {
                this.store.characters = res.data.results.data;
                console.log(this.store.characters);
            })
        },
    },
    mounted() {
        this.getAllCharacters();
    },
}
</script>

<style lang="scss" scoped></style>
