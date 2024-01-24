<template>
    <AppHeader />
    <router-view></router-view>
    <FooterComponent />
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
    name: 'App',
    components: {
        AppHeader,
        FooterComponent
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
        getAllItems() {
            axios.get(this.store.apiUrl + "/items").then((res) => {
                this.store.items = res.data.results;
                console.log(`items`, this.store.items);
            })
        },
        getAllTypes() {
            axios.get(this.store.apiUrl + "/types").then((res) => {
                this.store.types = res.data.results;
                console.log(`types`, this.store.types);
            })
        },
    },
    mounted() {
        this.getAllCharacters();
        this.getAllItems();
        this.getAllTypes();
    },
}
</script>

<style lang="scss" scoped></style>
