<template>
    <section class="page-bg vh-100 py-5">
        <div class="container p-5 bg-blur box">
            <div v-if="character">
                <div class="mb-5 d-flex justify-content-between align-items-center">
                <router-link :to="{name: 'characters'}" class="nav-link"><i class="fa-solid fa-left-long arrows"></i></router-link>
                    <h1 class="display-3 text-white text-center">{{ character.name }}</h1>
                </div>
                <div class=" mb-4 w-100 d-flex flex-row justify-content-between ">
                    <div class="card overflow-hidden my-shadow "><img :src="store.imgPath + character.image" alt=""></div>
                    <p class="fs-3 text-center text-white mt-5">{{ character.description }}</p>
                </div>
                <div>
                    <h2 class="pb-2 text-white text-center">Features</h2>
                    <ul class="d-flex justify-content-between align-items-center">
                        <li class="badge rounded-pill text-bg-warning p-3 fs-4" v-for="param in parameters">{{ param }}: {{ character[param] }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: "ShowCharacter",
    data() {
        return {
            store,
            character: null,
            parameters: [
                'attack',
                'defence',
                'speed',
                'life',
            ]
        }
    },
    methods: {
        getProjectData() {
            // console.log(this.$route);
            axios.get(`${store.apiUrl}/characters/${this.$route.params.id}`).then((res) => {
                if (res.data.results) {
                    this.character = res.data.results;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            });
        },
    },
    created() {
        this.getProjectData();
    },

}
</script>

<style lang="scss" scoped>

.box{
    border-radius: 15px;
}

.arrows{
    font-size: 50px;
    color: white;
    border: 1px solid white;
    padding: 5px;
}

</style>