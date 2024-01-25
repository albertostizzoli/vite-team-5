<template>
    <section class="position-relative">
        <AppHeader />
        <router-view class="router"></router-view>
        <!--  <FooterComponent id="footer-component" /> -->
    </section>
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
      
    },
    mounted() {
    },
}
</script>

<style lang="scss" scoped>
.router {
    margin-bottom: 200px;
}
</style>
