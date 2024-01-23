<template>
    <router-view></router-view>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
    export default {
        name: 'App',
        data(){
            return{
                store,

            }
        },
        methods:{

        },
        mounted(){

        },
    }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables'
</style>
